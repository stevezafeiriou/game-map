// components/Scene.js
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";

const Scene = ({ modelPath, movement, rotation }) => {
	const cameraRef = useRef();

	useFrame((state) => {
		const { forward, backward, left, right } = movement.current;
		const { x, y } = rotation.current;

		// Camera movement
		const speed = 0.1;
		if (forward) state.camera.position.z -= forward * speed;
		if (backward) state.camera.position.z += backward * speed;
		if (left) state.camera.position.x -= left * speed;
		if (right) state.camera.position.x += right * speed;

		// Camera rotation
		state.camera.rotation.x += x * 0.02;
		state.camera.rotation.y += y * 0.02;
	});

	return (
		<>
			{/* Textured Ground */}
			<TexturedGround />

			{/* Sunlight */}
			<Sunlight />

			{/* Lighting */}
			<hemisphereLight intensity={0.35} groundColor="white" />

			{/* Dynamic Model */}
			{modelPath && <Model modelPath={modelPath} />}
		</>
	);
};

const TexturedGround = () => {
	// Load texture for the ground
	const texture = useTexture("/scene.jpg");

	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -15, 0]}>
			<planeGeometry args={[800, 800]} />
			<meshStandardMaterial map={texture} />
		</mesh>
	);
};

const Sunlight = () => {
	const sunlightRef = useRef();

	return (
		<>
			{/* Directional Light for Sun */}
			<directionalLight
				ref={sunlightRef}
				position={[10, 50, 10]} // Position of the sun
				intensity={1.5} // Brightness of the sun
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				color={"#ffffff"} // White sunlight
			/>

			{/* Visual Representation of the Sun */}
			<mesh position={[10, 50, 10]}>
				<sphereGeometry args={[2, 32, 32]} />
				<meshBasicMaterial color="yellow" />
			</mesh>
		</>
	);
};

const Model = ({ modelPath }) => {
	const { scene } = useGLTF(modelPath);
	return <primitive object={scene} scale={[15, 15, 15]} position={[0, 9, 0]} />;
};

export default Scene;
