import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectModelContainer, SelectModel, LoadButton } from "./Elements";
import { data } from "../data/data";

const ModelSelector = () => {
	const [selectedModel, setSelectedModel] = useState("");
	const navigate = useNavigate();

	const handleModelChange = (e) => {
		setSelectedModel(e.target.value);
	};

	const handleLoadModel = () => {
		if (selectedModel) navigate(`/${selectedModel}`);
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
		</SelectModelContainer>
	);
};

export default ModelSelector;
