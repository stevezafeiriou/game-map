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
								<h2>Xylophobia-Dendrophilia</h2>
								<p>
									Xylophobia-Dendrophilia, a current WIP, constitutes a
									web-based experimental game interface that expands Money
									Trees—a 2024 digital platform hosting arboreal assets tied to
									physical tree preservation.
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
									Users invest in virtual trees, with proceeds allocated to the
									maintenance, care, and replanting of corresponding real-world
									specimens. Upon scanning a tree-specific QR code, participants
									access an interactive Three.js-generated map hosted via the
									Glitch platform. This dynamic environment synthesises
									real-time ecological data from Google’s i-Tree API to produce
									a continuously evolving arboreal landscape. The central
									component of this procedurally generated environment is a
									virtual landscape comprising 3D photogrammetric scans of
									London’s urban trees. Artistic development involves applying
									2D UV map textures derived from photogrammetric scans to 3D
									models, creating a stylised interplay between digital
									abstraction and ecological fidelity.
								</p>
								<p>
									Through this framework, users are invited to contemplate
									human-environment interdependencies within contexts of
									accelerated environmental transformation. As an ongoing
									project, the work will integrate additional artist-generated
									and collaboratively produced models developed through youth
									workshops before its exhibition as an immersive installation.
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
