import styled from "styled-components";

// ========== Model Selector Styles ==========
export const SelectModelContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 400px;
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
		transform: scale(1.05);
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
	background: rgba(0, 0, 0, 0.8);
	z-index: 10000;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalContent = styled.div`
	background: rgba(0, 0, 0, 0.9);
	border-radius: 16px;
	padding: 20px;
	width: 90%;
	max-width: 500px;
	max-height: 80vh; // Add max height
	color: white;
	box-shadow: 0 0 15px rgba(186, 12, 0, 0.5);
	overflow-y: auto; // Enable vertical scrolling
	-webkit-overflow-scrolling: touch; // Smooth mobile scrolling

	@media (max-width: 768px) {
		padding: 15px;
		max-height: 90vh; // More height on mobile
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

export const InformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	overflow-y: auto; // Nested scrolling area

	h2 {
		margin-bottom: 10px;
		font-size: 1.5rem;

		@media (max-width: 768px) {
			font-size: 1.3rem;
		}
	}

	p {
		margin-bottom: 10px;
		line-height: 1.5;
		font-size: 1rem;

		@media (max-width: 768px) {
			font-size: 0.9rem;
			line-height: 1.4;
		}
	}
`;
