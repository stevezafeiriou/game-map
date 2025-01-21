// components/Scene.js
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three"; // Import Three.js explicitly

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
			{/* Textured Sky */}
			<TexturedSky />

			{/* Textured Grass Floor */}
			<TexturedGround />

			{/* Lighting */}
			<hemisphereLight intensity={0.35} groundColor="green" />
			<directionalLight position={[10, 10, 5]} intensity={0.8} />

			{/* Dynamic Model */}
			{modelPath && <Model modelPath={modelPath} />}
		</>
	);
};

const TexturedSky = () => {
	const texture = useTexture("/sky.jpg");

	return (
		<mesh>
			<sphereGeometry args={[450, 64, 64]} />
			<meshBasicMaterial map={texture} side={THREE.BackSide} />
		</mesh>
	);
};

const TexturedGround = () => {
	const texture = useTexture("/grass.jpg");

	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -15, 0]}>
			<planeGeometry args={[800, 800]} />
			<meshStandardMaterial map={texture} />
		</mesh>
	);
};

const Model = ({ modelPath }) => {
	const { scene } = useGLTF(modelPath);
	return <primitive object={scene} scale={[15, 15, 15]} position={[0, 9, 0]} />;
};

export default Scene;
