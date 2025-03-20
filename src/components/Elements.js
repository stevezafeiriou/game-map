import styled from "styled-components";

// ========== Model Selector Styles ==========
export const SelectModelContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 60px;
	padding: 20px;
	background: rgba(0, 0, 0, 0.8);
	border-radius: 16px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
	color: white;
	text-align: center;

	@media (max-width: 768px) {
		width: 90%;
		padding: 15px;
	}
`;

export const SelectModel = styled.select`
	width: 100%;
	padding: 12px;
	font-size: 16px;
	border-radius: 8px;
	margin-bottom: 20px;
	border: none;
	outline: none;
	background: #1e1e1e;
	color: white;
	box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.5);
	cursor: pointer;

	&:hover {
		background: #333;
	}

	&:focus {
		border: 2px solid #990d00;
		box-shadow: 0px 0px 8px rgba(255, 100, 100, 0.8);
	}
`;

export const LoadButton = styled.button`
	width: 100%;
	padding: 12px;
	font-size: 16px;
	font-weight: bold;
	border-radius: 8px;
	border: none;
	background: #990d00;
	color: white;
	cursor: pointer;
	transition: background 0.3s ease, transform 0.2s ease;

	&:hover {
		background: #cc1100;
	}

	&:disabled {
		background: #444;
		cursor: not-allowed;
		transform: none;
	}
`;

// ========== Popup Styles ==========
export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.9);
	z-index: 10000;
	overflow: hidden;
`;

export const ModalContent = styled.div`
	position: relative;
	padding: 50px 15px 15px;
	width: 100vw;
	height: 100vh;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;

	@media (max-width: 768px) {
		padding: 40px 10px 10px;
	}
`;

export const Tabs = styled.div`
	display: flex;
	margin-bottom: 20px;
	gap: 10px;

	@media (max-width: 480px) {
		gap: 5px;
	}
`;

export const TabButton = styled.button`
	flex: 1;
	padding: 10px;
	font-size: 0.9rem;
	background: ${(props) => (props.active ? "#990d00" : "#1e1e1e")};
	border: none;
	border-radius: 8px;
	color: white;
	cursor: pointer;
	transition: all 0.3s ease;

	@media (max-width: 480px) {
		padding: 8px;
		font-size: 0.8rem;
	}

	&:hover {
		background: ${(props) => (props.active ? "#cc1100" : "#333")};
	}
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 15px;
	justify-content: center;

	margin-top: 20px;
	flex-wrap: wrap; // Allow wrapping on mobile

	a {
		color: white;
		transition: color 0.3s ease;
		font-size: 0.9rem;

		@media (max-width: 480px) {
			font-size: 0.8rem;
		}

		&:hover {
			color: #990d00;
		}
	}

	p {
		color: white;
		font-size: 1rem;
		margin-top: -3px;
		@media (max-width: 480px) {
			font-size: 0.8rem;
		}
	}
`;

export const InfoButton = styled.button`
	position: fixed;
	top: 20px;
	right: 20px;
	background: #990d00;
	border: none;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 1000;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

	&:hover {
		background: #cc1100;
		transform: scale(1.1);
	}
`;

// Add these to your existing Elements.js
export const CloseButton = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	background: transparent;
	border: none;
	color: white;
	cursor: pointer;
	padding: 5px;
	z-index: 100;

	&:hover {
		color: #990d00;
	}
`;

export const InformationContainer = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 30px;
	margin-top: 20px;
	height: calc(100% - 80px);

	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
	}
`;

export const InfoText = styled.div`
	flex: 1;
	overflow-y: auto;
	padding-right: 20px;

	h2 {
		color: #fff;
		font-size: 1.5rem;
		margin-bottom: 20px;
		font-family: "GothicPixels", sans-serif;
	}

	p {
		color: #fff;
		font-size: 1rem;
		margin-bottom: 20px;
		line-height: 1.5;
		text-align: justify;
	}

	@media (max-width: 768px) {
		padding-right: 0;
		order: 2;
	}
`;

export const VideoContainer = styled.div`
	flex: 1;
	min-height: 300px;
	position: relative;
	padding-bottom: 56.25%; /* 16:9 aspect ratio */
	height: 0;
	overflow: hidden;

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
	}

	@media (max-width: 768px) {
		order: 1;
		width: 100%;
		min-height: 200px;
		padding-bottom: 75%; /* 4:3 for mobile */
	}
`;
