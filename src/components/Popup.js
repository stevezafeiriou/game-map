import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import ModelSelector from "./ModelSelector";
import {
	ModalOverlay,
	ModalContent,
	Tabs,
	TabButton,
	SocialLinks,
	InfoButton,
	InformationContainer,
} from "./Elements"; // Changed import source

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
						<Tabs>
							<TabButton
								active={activeTab === "info"}
								onClick={() => setActiveTab("info")}
							>
								Information
							</TabButton>
							<TabButton
								active={activeTab === "models"}
								onClick={() => setActiveTab("models")}
							>
								Models
							</TabButton>
						</Tabs>

						{activeTab === "info" ? (
							<InformationContainer>
								<h2>Xylophobia - Dendrophylia</h2>
								<p>
									Xylophobia-Dendrophilia is an experimental in-browser
									mini-game map that expands upon Money Trees, a website
									developed in 2024. Money Trees hosts digital tree assets in
									which users can invest, allocating funds toward the
									maintenance, care, and eventual replanting of the
									corresponding physical tree if it is felled.
								</p>
								<p>
									By scanning a QR code associated with a particular tree, users
									gain access to an interactive game map created using Three.js
									and hosted on Glitch. This platform transforms the digital
									environment into an evolving tree-scape informed by real-world
									ecological signals from Google’s i-tree, bridging digital and
									physical realms.
								</p>
								<p>
									The core of this infinite game is a virtual forest derived
									from 3D photogrammetric scans of urban trees in London.
									Artistic representation is achieved by painting 2D UV map
									textures obtained from these scans and re-mapping them onto
									the 3D models, prompting users to reflect on their
									relationship with the environment amid rapid ecological
									change.
								</p>
								<p>
									As an ongoing project, the work will integrate additional
									artist-generated and collaboratively produced models developed
									through youth workshops prior to its exhibition as an
									immersive installation.
								</p>
								<hr style={{ margin: "20px 0", borderColor: "#333" }} />
								<SocialLinks>
									<a href="https://money-trees.glitch.me/">Money Trees</a>
									<a href="https://rachymcewan.com/">Rachy</a>
									<a href="https://www.instagram.com/rachymcewan_studio/">
										Instagram
									</a>
								</SocialLinks>
							</InformationContainer>
						) : (
							<ModelSelector />
						)}
					</ModalContent>
				</ModalOverlay>
			)}
		</>
	);
};

export default InfoPopup;
