// components/ScenePage.js
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { data } from "../data/data";
import Scene from "./Scene";

const ScenePage = () => {
	const { uuid } = useParams();
	const modelData = data.find((item) => item.uuid === uuid);

	const movementRef = useRef({ forward: 0, backward: 0, left: 0, right: 0 });
	const rotationRef = useRef({ x: 0, y: 0 });

	if (!modelData) {
		return (
			<div style={{ textAlign: "center", marginTop: "20px" }}>
				<h1>Model Not Found</h1>
				<p>The model you're trying to load does not exist.</p>
			</div>
		);
	}

	return (
		<Canvas camera={{ position: [0, 3, 10], fov: 75 }} shadows>
			<Scene
				modelPath={modelData.model}
				movement={movementRef}
				rotation={rotationRef}
			/>
		</Canvas>
	);
};

export default ScenePage;
