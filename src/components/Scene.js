import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import sceneIcon from "../assets/scene.jpg";
import { data } from "../data/data";

const Scene = ({
	movement,
	rotation,
	spacingFactor = 5,
	updateUserPosition,
}) => {
	useFrame((state) => {
		const { forward, backward, left, right } = movement.current;
		const { x, y } = rotation.current;
		const speed = 0.3;
		if (forward) state.camera.position.z -= forward * speed;
		if (backward) state.camera.position.z += backward * speed;
		if (left) state.camera.position.x -= left * speed;
		if (right) state.camera.position.x += right * speed;

		state.camera.rotation.x += x * 0.15;
		state.camera.rotation.y += y * 0.15;

		// Send a new plain object with the camera's current position
		if (updateUserPosition) {
			updateUserPosition({
				x: state.camera.position.x,
				y: state.camera.position.y,
				z: state.camera.position.z,
			});
		}
	});

	return (
		<>
			<TexturedGround />
			<Sunlight />
			<hemisphereLight intensity={0.835} groundColor="white" />

			{/* Render all tree models */}
			{data.map((item) => (
				<Model
					key={item.uuid}
					modelPath={item.model}
					position={item.position.map((coord) => coord * spacingFactor)}
				/>
			))}
		</>
	);
};

const TexturedGround = () => {
	const texture = useTexture(sceneIcon);
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(1, 1);
	texture.anisotropy = 16;
	texture.minFilter = THREE.LinearMipmapLinearFilter;
	texture.magFilter = THREE.NearestFilter;

	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -15, 0]}>
			<planeGeometry args={[800, 800]} />
			<meshPhongMaterial
				map={texture}
				color="white"
				shininess={50}
				specular="#ffffff"
				emissive="white"
				emissiveIntensity={0.02}
			/>
		</mesh>
	);
};

const Sunlight = () => {
	const sunlightRef = useRef();
	return (
		<directionalLight
			ref={sunlightRef}
			position={[10, 50, 10]}
			intensity={1.5}
			castShadow
			shadow-mapSize-width={2048}
			shadow-mapSize-height={2048}
			color={"#ffffff"}
		/>
	);
};

const Model = ({ modelPath, position = [0, 0, 0] }) => {
	const { scene } = useGLTF(modelPath);
	return <primitive object={scene} scale={[15, 15, 15]} position={position} />;
};

export default Scene;

// /* THIS SCENE HAS GRASS AND SKY */
// import React, { useRef, useEffect } from "react";
// import { useFrame, useThree } from "@react-three/fiber";
// import { useGLTF, Sky } from "@react-three/drei";
// import * as THREE from "three";
// import { data } from "../data/data";

// // Sets up fog so the distant horizon gradually fades into a sky-blue color.
// const FogSetup = () => {
// 	const { scene } = useThree();
// 	useEffect(() => {
// 		scene.fog = new THREE.Fog("#87CEEB", 100, 1000);
// 	}, [scene]);
// 	return null;
// };

// // Creates a solid green ground. Positioned at y=0 so it sits under the models.
// const ColoredGround = () => {
// 	return (
// 		<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -16, 0]}>
// 			<planeGeometry args={[800, 800]} />
// 			<meshPhongMaterial color="#228B22" side={THREE.DoubleSide} />
// 		</mesh>
// 	);
// };

// // Directional light simulating the sun.
// const DirectionalSunlight = () => {
// 	const lightRef = useRef();
// 	return (
// 		<directionalLight
// 			ref={lightRef}
// 			position={[100, 100, 100]}
// 			intensity={1.0}
// 			castShadow
// 			shadow-mapSize-width={2048}
// 			shadow-mapSize-height={2048}
// 			color={"#ffffff"}
// 		/>
// 	);
// };

// const Scene = ({
// 	movement,
// 	rotation,
// 	spacingFactor = 5,
// 	updateUserPosition,
// }) => {
// 	useFrame((state) => {
// 		const { forward, backward, left, right } = movement.current;
// 		const { x, y } = rotation.current;
// 		const speed = 0.3;
// 		if (forward) state.camera.position.z -= forward * speed;
// 		if (backward) state.camera.position.z += backward * speed;
// 		if (left) state.camera.position.x -= left * speed;
// 		if (right) state.camera.position.x += right * speed;

// 		state.camera.rotation.x += x * 0.15;
// 		state.camera.rotation.y += y * 0.15;

// 		// Update camera position so that any UI (e.g. minimap) can show the current location.
// 		if (updateUserPosition) {
// 			updateUserPosition({
// 				x: state.camera.position.x,
// 				y: state.camera.position.y,
// 				z: state.camera.position.z,
// 			});
// 		}
// 	});

// 	return (
// 		<>
// 			<FogSetup />
// 			{/* Sky component provides a gradient sky with a visible sun.
//           Tweak parameters like sunPosition, inclination, and azimuth as needed. */}
// 			<Sky
// 				distance={450000}
// 				sunPosition={[400, 50, 100]}
// 				inclination={0.49}
// 				azimuth={0.25}
// 				turbidity={5}
// 				rayleigh={0.4}
// 				mieCoefficient={0.005}
// 				mieDirectionalG={0.8}
// 			/>
// 			<ColoredGround />
// 			<DirectionalSunlight />
// 			{/* Low-intensity ambient light for balanced illumination */}
// 			<ambientLight intensity={0.7} />

// 			{/* Render all tree models */}
// 			{data.map((item) => (
// 				<Model
// 					key={item.uuid}
// 					modelPath={item.model}
// 					position={item.position.map((coord) => coord * spacingFactor)}
// 				/>
// 			))}
// 		</>
// 	);
// };

// const Model = ({ modelPath, position = [0, 0, 0] }) => {
// 	const { scene } = useGLTF(modelPath);
// 	return <primitive object={scene} scale={[15, 15, 15]} position={position} />;
// };

// export default Scene;
