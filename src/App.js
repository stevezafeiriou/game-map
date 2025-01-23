import React, { useRef } from "react";
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
import { data } from "./data/data";
import InfoPopup from "./components/Popup";
import "./App.css";

const AppContainer = styled.div`
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

const HomePage = () => {
	return <Navigate to={`/${data[0].uuid}`} replace />;
};

const ScenePage = () => {
	const { uuid } = useParams();
	const modelData = data.find((item) => item.uuid === uuid);
	const movementRef = useRef({ forward: 0, backward: 0, left: 0, right: 0 });
	const rotationRef = useRef({ x: 0, y: 0 });

	if (!modelData) return <Navigate to="/" replace />;

	return (
		<AppContainer>
			<InfoPopup />
			<Card>
				<Canvas camera={{ position: [5, 2.5, 35], fov: 75 }} shadows>
					<Scene
						modelPath={modelData.model}
						movement={movementRef}
						rotation={rotationRef}
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
			<Route path="/:uuid" element={<ScenePage />} />
		</Routes>
	</Router>
);

export default App;
