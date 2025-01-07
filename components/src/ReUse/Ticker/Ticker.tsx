import SingleTicker from "../Ticker/SingleTicker";

export interface TickerProps {
	data: {
		logo: string,
		name: string,
		isNegative: boolean,
		price: number,
		changeAbs: number,
		changePercent: number
	}[],
	cssText: string,
	height: number
}

export default function Ticker({ data, cssText, height} : TickerProps) {
	return (
		<>
			<div className="container">
				<div className="tape flex gap-10">
					{data.map((d, i) => (
						<SingleTicker
							key={i}
							css={cssText}
							data={d}
							isSingle={false}
							height={height}
						/>
					))}
				</div>
			</div>
		</>
	);
}
