import React from "react";
import styled from "styled-components";
import { data } from "../data/data";

const MinimapContainer = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 150px;
	height: 150px;
	background: rgba(0, 0, 0, 0.5);
	border: 2px solid #990d00;
	border-radius: 8px;
	overflow: hidden;
	z-index: 1000;
`;

const MapArea = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

const Marker = styled.div`
	position: absolute;
	width: 10px;
	height: 10px;
	background: #cc1100;
	border: 2px solid white;
	border-radius: 50%;
	transform: translate(-50%, -50%);
`;

const TreeMarker = styled.div`
	position: absolute;
	width: 6px;
	height: 6px;
	background: white;
	border-radius: 50%;
	transform: translate(-50%, -50%);
`;

/** Utility to clamp a value between min and max */
function clamp(value, min, max) {
	return Math.max(min, Math.min(max, value));
}

const Minimap = ({ userPosition, spacingFactor }) => {
	// Compute tree positions (after applying spacingFactor)
	const treePositions = data.map((item) => ({
		x: item.position[0] * spacingFactor,
		z: item.position[2] * spacingFactor,
	}));

	// Include user position in the bounding box (if available)
	const positions = [...treePositions];
	if (userPosition) {
		positions.push({ x: userPosition.x, z: userPosition.z });
	}

	const xs = positions.map((pos) => pos.x);
	const zs = positions.map((pos) => pos.z);
	const minX = Math.min(...xs);
	const maxX = Math.max(...xs);
	const minZ = Math.min(...zs);
	const maxZ = Math.max(...zs);

	const padding = 10;
	const rangeX = maxX - minX + padding * 2;
	const rangeZ = maxZ - minZ + padding * 2;

	// Convert world coordinates (x, z) to minimap percentages
	const mapCoord = (x, z) => {
		let normalizedX = (x - minX + padding) / rangeX;
		let normalizedZ = (z - minZ + padding) / rangeZ;
		// Clamp to ensure the marker never goes off the map
		normalizedX = clamp(normalizedX, 0, 1);
		normalizedZ = clamp(normalizedZ, 0, 1);
		return {
			left: normalizedX * 100, // percentage
			top: (1 - normalizedZ) * 100, // invert Z so that higher Z appears at the bottom
		};
	};

	// Get user coordinates (default center if not available)
	const userCoords = userPosition
		? mapCoord(userPosition.x, userPosition.z)
		: { left: 50, top: 50 };

	return (
		<MinimapContainer>
			<MapArea>
				{data.map((item) => {
					const treeX = item.position[0] * spacingFactor;
					const treeZ = item.position[2] * spacingFactor;
					const coords = mapCoord(treeX, treeZ);
					return (
						<TreeMarker
							key={item.uuid}
							style={{ left: `${coords.left}%`, top: `${coords.top}%` }}
						/>
					);
				})}
				<Marker
					style={{ left: `${userCoords.left}%`, top: `${userCoords.top}%` }}
				/>
			</MapArea>
		</MinimapContainer>
	);
};

export default Minimap;
