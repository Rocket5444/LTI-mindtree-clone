// src/cryptoData.ts

export interface cryptoDataTypes{
	[index: number]: Array<string | number | null>;
}

const cryptoData : cryptoDataTypes = [
	[
		"Location",
		"Parent",
		"Market trade volume (size)",
		"Market increase/decrease (color)",
	],
	["Crypto", null, 0, 0],
	["Bitcoin", "Crypto", 60, 20],
	["Ethereum", "Crypto", 30, 10],
	["XRP", "Crypto", 10, -10],
	["Litecoin", "Crypto", 20, -5],
	["Cardano", "Crypto", 25, 15],
	["Polkadot", "Crypto", 15, 5],
	["Chainlink", "Crypto", 10, -5],
	["Stellar", "Crypto", 5, -10],
];

export default cryptoData;
