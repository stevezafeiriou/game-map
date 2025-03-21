// App.js
import React, { useRef, useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
	Navigate,
} from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Scene from "./components/Scene";
import Joystick from "./components/Joystick";
import Minimap from "./components/Minimap";
import { data } from "./data/data";
import InfoPopup from "./components/Popup";
import "./App.css";

const AppContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: radial-gradient(circle, #990d00, #000);
	overflow: hidden;
	touch-action: none;
`;

const Card = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90vw;
	height: 80vh;
	background: rgba(0, 0, 0, 0.9);
	border-radius: 16px;
	box-shadow: 0px 0px 15px rgba(186, 12, 0, 0.5);
	overflow: hidden;

	@media (max-width: 768px) {
		width: 95vw;
		height: 70vh;
	}
`;

/** Container for the Canvas and Minimap */
const CanvasContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

const HomePage = () => {
	return <Navigate to={`/${data[0].uuid}`} replace />;
};

const ScenePage = () => {
	const { uuid } = useParams();
	const [isValidUUID, setIsValidUUID] = useState(false);
	const [loading, setLoading] = useState(true);
	const [userPosition, setUserPosition] = useState(null);

	const movementRef = useRef({ forward: 0, backward: 0, left: 0, right: 0 });
	const rotationRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const exists = data.some((item) => item.uuid === uuid);
		setIsValidUUID(exists);
		setLoading(false);
	}, [uuid]);

	if (loading) return <div>Loading...</div>;
	if (!isValidUUID) return <Navigate to="/" replace />;

	const modelData = data.find((item) => item.uuid === uuid);

	// Use a spacing factor to space out models.
	const spacingFactor = 5;
	// Define an offset so the camera starts "in front" of the selected tree.
	const cameraOffset = [0, 2.5, 10];
	const initialCameraPosition = [
		modelData.position[0] * spacingFactor + cameraOffset[0],
		modelData.position[1] * spacingFactor + cameraOffset[1],
		modelData.position[2] * spacingFactor + cameraOffset[2],
	];

	return (
		<AppContainer>
			<InfoPopup />
			<Card>
				<CanvasContainer>
					{/* Set key to uuid so Canvas re-mounts when route changes */}
					<Canvas
						key={uuid}
						camera={{ position: initialCameraPosition, fov: 75 }}
						shadows
					>
						<Scene
							movement={movementRef}
							rotation={rotationRef}
							spacingFactor={spacingFactor}
							updateUserPosition={setUserPosition}
						/>
					</Canvas>
					<Minimap userPosition={userPosition} spacingFactor={spacingFactor} />
				</CanvasContainer>
			</Card>
			<Joystick
				type="movement"
				position={{ bottom: "10%", left: "10%" }}
				movementRef={movementRef}
			/>
			<Joystick
				type="rotation"
				position={{ bottom: "10%", right: "10%" }}
				rotationRef={rotationRef}
			/>
		</AppContainer>
	);
};

const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/:uuid" element={<ScenePage />} />
		</Routes>
	</Router>
);

export default App;
