interface valueTypes {
    img: string;
    chairmanName: string;
    title: string;
    description: string;
}

interface valueAtScaleProps {
    valueAtScale: Array<valueTypes>;
}

export default function ValueAtScale({ valueAtScale } : valueAtScaleProps) {
	return (
		<section className="value-at-scale">
			<div className="content-container">
				<h1>Delivering Value at Scale</h1>
				{valueAtScale.map((value, index) => {
					return (
						<div key={index} className="profile-quote">
							<img src={value?.img} alt={value.chairmanName} />
							<div className="quote-text">
								<p className="quote">“</p>
								<p className="name">{value.chairmanName}</p>
								<p className="title">
									{value.title}
								</p>
								<p className="description">
									{value.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
