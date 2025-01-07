import { Chart } from "react-google-charts";
import { cryptoDataTypes } from "../../../Pages/Heatmaps/cryptoData";

const options = {
	minColor: "#f00",
	midColor: "#ddd",
	maxColor: "#0d0",
	headerHeight: 15,
	fontColor: "black",
	showScale: true,
	generateTooltip: (_row: any, _size: any, value: string) => {
		return (
			'<div style="background:#fd9; padding:10px; border-style:solid"> ' +
			value +
			"</div>"
		);
	},
};

interface TreeMapProps{
	mapData: cryptoDataTypes;
}

export default function Treemap({mapData} : TreeMapProps){
	return (
		<Chart
			chartType="TreeMap"
			width="100%"
			height="400px"
			data={mapData}
			options={options}
		/>
	);
};