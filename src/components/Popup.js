import React, { useState } from "react";
import { FiInfo, FiX } from "react-icons/fi";
import ModelSelector from "./ModelSelector";
import {
	ModalOverlay,
	ModalContent,
	Tabs,
	TabButton,
	SocialLinks,
	InfoButton,
	InformationContainer,
	InfoText,
	VideoContainer,
	CloseButton,
} from "./Elements";

const InfoPopup = () => {
	const [showModal, setShowModal] = useState(false);
	const [activeTab, setActiveTab] = useState("info");

	return (
		<>
			<InfoButton onClick={() => setShowModal(true)}>
				<FiInfo size={24} color="white" />
			</InfoButton>

			{showModal && (
				<ModalOverlay onClick={() => setShowModal(false)}>
					<ModalContent onClick={(e) => e.stopPropagation()}>
						<CloseButton onClick={() => setShowModal(false)}>
							<FiX size={24} color="white" />
						</CloseButton>

						<Tabs>
							{/* <TabButton
								active={activeTab === "info"}
								onClick={() => setActiveTab("info")}
							>
								Information
							</TabButton> */}
							{/* <TabButton
								active={activeTab === "models"}
								onClick={() => setActiveTab("models")}
							>
								Settings
							</TabButton> */}
						</Tabs>

						{activeTab === "info" ? (
							<InformationContainer>
								<InfoText>
									<h2>Xylophobia-Dendrophilia</h2>
									<p>
										Xylophobia-Dendrophilia, a current WIP, constitutes a
										web-based experimental game interface that expands Money
										Trees—a 2024 digital platform hosting arboreal assets tied
										to physical tree preservation.
									</p>

									<p>
										Users invest in virtual trees, with proceeds allocated to
										the maintenance, care, and replanting of corresponding
										real-world specimens. Upon scanning a tree-specific QR code,
										participants access an interactive Three.js-generated map
										hosted via the Glitch platform. This dynamic environment
										synthesises real-time ecological data from Google’s i-Tree
										API to produce a continuously evolving arboreal landscape.
										The central component of this procedurally generated
										environment is a virtual landscape comprising 3D
										photogrammetric scans of London’s urban trees. Artistic
										development involves applying 2D UV map textures derived
										from photogrammetric scans to 3D models, creating a stylised
										interplay between digital abstraction and ecological
										fidelity.
									</p>

									<p>
										Through this framework, users are invited to contemplate
										human-environment interdependencies within contexts of
										accelerated environmental transformation. As an ongoing
										project, the work will integrate additional artist-generated
										and collaboratively produced models developed through youth
										workshops before its exhibition as an immersive
										installation.
									</p>
									{/* Keep other paragraphs */}
									<hr style={{ margin: "20px 0", borderColor: "#333" }} />
									<SocialLinks>
										<a href="https://money-trees.uk/">Money Trees</a>
										{/* <a href="https://rachymcewan.com/">Rachy</a>
										<a href="https://stevezafeiriou.com/">Steve</a> */}
									</SocialLinks>
								</InfoText>
								<VideoContainer>
									<iframe
										src="https://www.youtube.com/embed/dK4-qUVEAok?autoplay=1&loop=1&playlist=dK4-qUVEAok&mute=1&controls=0&modestbranding=1&rel=0"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										title="Xylophobia Video"
									/>
								</VideoContainer>
							</InformationContainer>
						) : null}
					</ModalContent>
				</ModalOverlay>
			)}
		</>
	);
};

export default InfoPopup;
