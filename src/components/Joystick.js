// components/Joystick.js
import React, { useRef } from "react";
import styled from "styled-components";
import camIcon from "../assets/cam.png";
import navIcon from "../assets/nav.png";

const JoystickContainer = styled.div`
	position: absolute;
	${({ position }) =>
		position &&
		`bottom: ${position.bottom}; left: ${position.left}; right: ${position.right};`}
	width: 15vw;
	height: 15vw;
	max-width: 100px;
	max-height: 100px;
	background: rgba(255, 255, 255, 0.2); /* Transparent white background */
	backdrop-filter: blur(10px); /* Blur effect */

	border-radius: 50%; /* Circular shape */
	box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.55); /* Subtle shadow */
	user-select: none;
	z-index: 100;

	/* Adding the background image */
	background-image: url(${(props) =>
		props.type === "movement" ? camIcon : navIcon});
	background-size: cover;
	background-position: center center;

	@media (max-width: 768px) {
		width: 20vw;
		height: 20vw;
		max-width: 80px;
		max-height: 80px;
	}
`;

const JoystickHandle = styled.div`
	opacity: 0.9;
	position: absolute;
	height: 4vw;
	width: 4vw;
	max-height: 40px;
	max-width: 40px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%)
		${({ $offset }) =>
			$offset ? `translate(${$offset.x}px, ${$offset.y}px)` : ""};
	transition: transform 0.1s ease-out; /* Smooth movement */
	background: rgba(255, 255, 255, 0.65); /* Semi-transparent white */
	backdrop-filter: blur(15px); /* Stronger blur for the handle */

	border-radius: 50%; /* Circular shape */
	box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.35); /* Subtle shadow */
	user-select: none;

	@media (max-width: 768px) {
		height: 5vw;
		width: 5vw;
		max-height: 30px;
		max-width: 30px;
	}
`;

const Joystick = ({ type, position, movementRef, rotationRef }) => {
	const handleRef = useRef(null);
	const containerRef = useRef(null);
	const radius = 60; // Radius of the joystick container

	const handlePointerMove = (e) => {
		if (!e.buttons) return;

		const rect = containerRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;

		const distance = Math.min(Math.sqrt(x * x + y * y), radius);
		const angle = Math.atan2(y, x);

		const newX = Math.cos(angle) * distance;
		const newY = Math.sin(angle) * distance;

		// Update transform with centered base position
		handleRef.current.style.transform = `translate(-50%, -50%) translate(${newX}px, ${newY}px)`;

		const normalizedX = newX / radius;
		const normalizedY = newY / radius;

		if (type === "movement" && movementRef) {
			// Movement controls (left joystick)
			movementRef.current.forward = Math.max(-normalizedY, 0); // Up movement
			movementRef.current.backward = Math.max(normalizedY, 0); // Down movement
			movementRef.current.left = Math.max(-normalizedX, 0); // Left movement
			movementRef.current.right = Math.max(normalizedX, 0); // Right movement
		} else if (type === "rotation" && rotationRef) {
			// Camera controls (right joystick)
			rotationRef.current.x = -normalizedY * 0.05; // Vertical look (inverted)
			rotationRef.current.y = -normalizedX * 0.05; // Horizontal look
		}
	};

	const handlePointerUp = () => {
		handleRef.current.style.transform = `translate(-50%, -50%)`;

		if (type === "movement" && movementRef) {
			movementRef.current.forward = 0;
			movementRef.current.backward = 0;
			movementRef.current.left = 0;
			movementRef.current.right = 0;
		} else if (type === "rotation" && rotationRef) {
			rotationRef.current.x = 0;
			rotationRef.current.y = 0;
		}
	};

	return (
		<JoystickContainer
			ref={containerRef}
			position={position}
			type={type}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUp}
			onPointerLeave={handlePointerUp} // Ensure it resets when pointer leaves
		>
			<JoystickHandle ref={handleRef} />
		</JoystickContainer>
	);
};

export default Joystick;
