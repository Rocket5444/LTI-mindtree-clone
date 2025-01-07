import Ticker from "../../ReUse/Ticker/Ticker";
import TickerTape from "../../ReUse/TickerTape/TickerTape";
import SKXYWTFHero from "./SKXYWTF-hero";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";

import { data, cssText, height } from "./tickersData";

export default function Landing() {
	return (
		<HomeLayout>
			<div className="container flex flex-col gap-5">
				<SKXYWTFHero />

				<h1 className="text-2xl font-bold text-red-400">Ticker Tape</h1>
				<TickerTape data={data} cssText={cssText} height={height} />

				<h1 className="text-2xl font-bold text-blue-200">Tickers</h1>
				<Ticker data={data} cssText={cssText} height={height} />
			</div>
		</HomeLayout>
	);
}
