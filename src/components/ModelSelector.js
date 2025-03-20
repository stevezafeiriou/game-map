import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	SelectModelContainer,
	SelectModel,
	LoadButton,
	SocialLinks,
} from "./Elements";
import { data } from "../data/data";

const ModelSelector = ({ setShowModal }) => {
	const [selectedModel, setSelectedModel] = useState("");
	const navigate = useNavigate();

	const handleModelChange = (e) => {
		setSelectedModel(e.target.value);
	};

	const handleLoadModel = () => {
		if (selectedModel) navigate(`/${selectedModel}`);
		setShowModal(false);
	};

	return (
		<SelectModelContainer>
			<h2 style={{ marginBottom: "20px" }}>Select a Tree Model</h2>
			<SelectModel onChange={handleModelChange} value={selectedModel}>
				<option value="">-- Choose a Model --</option>
				{data.map((item) => (
					<option key={item.uuid} value={item.uuid}>
						{item.title}
					</option>
				))}
			</SelectModel>
			<LoadButton onClick={handleLoadModel} disabled={!selectedModel}>
				Load Model
			</LoadButton>
			<hr style={{ margin: "20px 0", borderColor: "#333" }} />
			<SocialLinks>
				<a href="https://money-trees.uk/">Money Trees</a>
				<p>| </p>
				<a href="https://rachymcewan.com/">Rachy Mcewan</a>
				<p>& </p>
				<a href="https://stevezafeiriou.com/">Steve Zafeiriou</a>
			</SocialLinks>
		</SelectModelContainer>
	);
};

export default ModelSelector;
