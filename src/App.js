import React, { useState, useRef } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
	useParams,
} from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Scene from "./components/Scene";
import Joystick from "./components/Joystick";
import { data } from "./data/data";
import "./App.css";

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: radial-gradient(circle, #990d00, #000);
	background-size: cover;

	overflow: hidden; /* Prevent overflow */
	touch-action: none; /* Prevent accidental scrolling on mobile */
	box-sizing: border-box;
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

	overflow: hidden; /* Ensure the environment respects the border radius */
	box-sizing: border-box;

	@media (max-width: 768px) {
		width: 95vw;
		height: 70vh; /* Adjusted for smaller screens */
	}
`;

const SelectModelContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const SelectModel = styled.select`
	padding: 10px;
	font-size: 16px;
	border-radius: 5px;
	border: 1px solid #ccc;
`;

const HomePage = () => {
	const navigate = useNavigate();
	const [selectedModel, setSelectedModel] = useState("");

	const handleModelChange = (e) => {
		setSelectedModel(e.target.value);
	};

	const handleLoadModel = () => {
		if (selectedModel) {
			navigate(`/view/${selectedModel}`);
		}
	};

	return (
		<AppContainer>
			<SelectModelContainer>
				<h1>Select a 3D Model</h1>
				<SelectModel onChange={handleModelChange} value={selectedModel}>
					<option value="">-- Choose a Model --</option>
					{data.map((item) => (
						<option key={item.uuid} value={item.uuid}>
							{item.title}
						</option>
					))}
				</SelectModel>
				<button onClick={handleLoadModel} disabled={!selectedModel}>
					Load Model
				</button>
			</SelectModelContainer>
		</AppContainer>
	);
};

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
		<AppContainer>
			<Card>
				<Canvas camera={{ position: [0, 2.5, 5], fov: 75 }} shadows>
					<Scene
						movement={movementRef}
						rotation={rotationRef}
						modelPath={modelData.model}
					/>
				</Canvas>
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
			<Route path="/view/:uuid" element={<ScenePage />} />
		</Routes>
	</Router>
);

export default App;
