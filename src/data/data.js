/*
 * Xylophobia - A Virtual Forest Experience
 * All models are compressed using Draco compression.
 * This file contains the data for the virtual forest, including tree models and their properties.
 * Each tree has a unique UUID, model path, title, description, position in the scene.
 * The data also includes environmental metrics like soil moisture, temperature, humidity, and CO2 levels.
 * This data is used to render the scene and provide information about each tree. Data will replaced with real data in the future.
 * The models are expected to be in the public directory of the React app.
 */
export const data = [
	{
		uuid: "mushy",
		model: "/mushy.glb",
		title: "Mushy Tree",
		description: "A mushy tree with vibrant colors",
		position: [20, -1, -10],
		data: {
			soil_moisture: "35%",
			temperature: "22°C",
			humidity: "55%",
			co2: "18",
		},
	},
	{
		uuid: "bluetree",
		model: "/bluetree.glb",
		title: "Blue Tree",
		description: "A beautiful blue tree",
		position: [0, 3, 0],
		data: {
			soil_moisture: "40%",
			temperature: "25°C",
			humidity: "50%",
			co2: "20",
		},
	},

	{
		uuid: "saveme",
		model: "/saveme.glb",
		title: "Save Me Tree",
		description: "A tree needing rescue",
		position: [10, 2.5, 15],
		data: {
			soil_moisture: "38%",
			temperature: "24°C",
			humidity: "52%",
			co2: "22",
		},
	},
	{
		uuid: "twisted",
		model: "/twisted.glb",
		title: "Twisted Tree",
		description: "A twisted tree with an intricate structure",
		position: [-5, 1.5, -20],
		data: {
			soil_moisture: "32%",
			temperature: "32°C",
			humidity: "32%",
			co2: "23.2",
		},
	},
];
