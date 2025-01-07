interface SingleTickerProps {
	css: string;
	data: {
		logo: string;
		name: string;
		isNegative: boolean;
		price: number;
		changeAbs: number;
		changePercent: number;
	};
	isSingle: boolean;
	height: number;
}

export default function SingleTicker({
	css,
	data,
	isSingle,
	height,
}: SingleTickerProps) {
	return (
		<div
			className={`ticker ${css} rounded-lg shadow-sm shadow-slate-100 flex flex-col`}
		>
			{/* header */}
			<div
				className={`header h-10 ${
					!isSingle ? "flex" : ""
				} justify-between items-center p-2 flex-wrap`}
			>
				<div className="flex gap-2 items-center">
					<img src={data.logo} className="h-6" />
					<h1 className="font-semibold text-slate-400 text-md">{data.name}</h1>
				</div>
				{!isSingle && (
					<div>
						<span className="text-slate-200 text-md">{data.price}</span>
					</div>
				)}
			</div>
			{/* body */}
			<div className="body flex justify-between items-center flex-grow p-2">
				<div
					className={`${
						data.isNegative ? "text-red-500" : "text-green-500"
					} flex gap-6 items-center`}
				>
					<span style={{ fontSize: `${(height - 26) * 4}px` }}>
						{data.isNegative ? "-" : "+"}
						{data.changePercent}%
					</span>
					<span style={{ fontSize: `${(height - 26) * 4 - 5}px` }}>
						{data.changeAbs}
					</span>
				</div>
				{isSingle && (
					<div>
						<span className="">{data.price}</span>
					</div>
				)}
			</div>
		</div>
	);
}
