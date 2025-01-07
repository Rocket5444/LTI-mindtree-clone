import ScrollReveal from "../../../Components/ScrollReveal/ScrollReveal";

interface statsProp {
	type: string;
	value: string;
}

interface GrowthStatsProps {
	stats: statsProp[];
}
export default function GrowthStats({ stats }: GrowthStatsProps) {
	return (
		<div className="stats">
			{stats.map((stat, index) => {
				return (
					<ScrollReveal
						key={index}
						transformCSS={`${
							index % 2 == 0 ? "translate-y-20" : "-translate-y-20"
						} duration-[1.5s]`}
					>
						<div className="stat">
							<h6>{stat.value}</h6>
							<p className="font-semibold">{stat.type}</p>
						</div>
					</ScrollReveal>
				);
			})}
		</div>
	);
}
