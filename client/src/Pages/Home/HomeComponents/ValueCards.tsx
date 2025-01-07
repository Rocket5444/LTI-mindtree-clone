import ScrollReveal from "../../../Components/ScrollReveal/ScrollReveal";

interface ValueCardProps {
    cards: {
        img: string;
        subTitles: string[];
    }[];
}

export default function ValueCards({ cards } : ValueCardProps) {
	return (
		<>
			<div className="cards">
				{
                    cards.map((card, index) => {
				    	return (
								<>
                                    <ScrollReveal transformCSS="-translate-x-40 duration-[2s]">
									<div key={index} className="card">
										<img src={card.img} className="card-img" alt="" />
										<div className="card-body">
											{card.subTitles.map((subTitle, index) => {
												return (
													<p key={index} className="card-sub-title">
														{subTitle}
													</p>
												);
											})}
											<button className="card-btn">More -</button>
										</div>
									</div>
                                    </ScrollReveal>
								</>
							);
				    })
                }
			</div>
		</>
	);
}
