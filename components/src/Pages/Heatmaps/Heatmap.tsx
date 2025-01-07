import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import CryptoCoinHeatMap from "../../ReUse/Heatmaps/CryptoCoinHeatMap/CryptoCoinHeatMap";
import Treemap from "../../ReUse/Heatmaps/Custom/CustomHeatmap";
import ETFHeatMap from "../../ReUse/Heatmaps/ETFHeatMap/ETFHeatMap";
import ForexHeatMap from "../../ReUse/Heatmaps/ForexHeatMap/ForexHeatMap";
import StockHeatMap from "../../ReUse/Heatmaps/StockHeatMap/StockHeatMap";
import cryptoData from "./cryptoData";

export default function Heatmap() {
	return (
		<HomeLayout>
			<div>
				<h1>Crypto Coin Heatmap</h1>
                <CryptoCoinHeatMap />

                <h1>Stock Heatmap</h1>
                <StockHeatMap />

                <h1>ETF Heatmap</h1>
                <ETFHeatMap />

                <h1>Forex Heatmap</h1>
                <ForexHeatMap />

                <h1>Custom Heatmap</h1>
                <Treemap mapData={cryptoData} />
			</div>
		</HomeLayout>
	);
}
