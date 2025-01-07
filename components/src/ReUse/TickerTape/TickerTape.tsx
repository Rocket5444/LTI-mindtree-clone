import Ticker from "../Ticker/Ticker";
import { TickerProps } from "../Ticker/Ticker";
import Marquee from "react-fast-marquee";

export default function TickerTape({data, cssText, height} : TickerProps){
    return (
			<>
				<div className="container">
					<Marquee
						gradient={false} 
						speed={40} 
						pauseOnHover={true}
						className="flex gap-10"
						autoFill={true}
					>
						<div className="w-[100svw]">
							<Ticker data={data} cssText={cssText} height={height} />
						</div>
					</Marquee>
				</div>
			</>
		);
}