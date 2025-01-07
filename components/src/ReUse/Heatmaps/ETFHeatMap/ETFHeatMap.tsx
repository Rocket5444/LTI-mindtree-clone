// ETFHeatMap.jsx
import { useEffect, useRef, memo } from "react";

function ETFHeatMap() {
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-etf-heatmap.js";
		script.type = "text/javascript";
		script.async = true;
		script.innerHTML = `
        {
          "dataSource": "AllUSEtf",
          "blockSize": "aum",
          "blockColor": "change",
          "grouping": "asset_class",
          "locale": "en",
          "symbolUrl": "",
          "colorTheme": "dark",
          "hasTopBar": false,
          "isDataSetEnabled": false,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "isMonoSize": false,
          "width": "100%",
          "height": "100%"
        }`;
		container.current?.appendChild(script);
	}, []);

	return (
		<div className="tradingview-widget-container" ref={container}>
			<div className="tradingview-widget-container__widget"></div>
			<div className="tradingview-widget-copyright">
				<a
					href="https://www.tradingview.com/"
					rel="noopener nofollow"
					target="_blank"
				>
					<span className="blue-text">Track all markets on TradingView</span>
				</a>
			</div>
		</div>
	);
}

export default memo(ETFHeatMap);
