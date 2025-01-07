import "./HeroSlider.css";
import { useEffect, useRef } from "react";

interface HeroSliderProps {
	slides: Array<{
		title: string;
		description: string;
		image: string;
	}>;
}

export default function HeroSlider({ slides }: HeroSliderProps) {
	const sliderRef = useRef<HTMLDivElement>(null);

	const nextSlide = () => {
		const allSlides = sliderRef.current?.querySelectorAll(".slide");
		const allDots = sliderRef.current?.querySelectorAll(".dot");

		if (allSlides && allDots) {
			const idx = Array.from(allSlides).findIndex((slide) =>
				slide.classList.contains("active")
			);
			const numberOfSlides = allSlides.length;
			const nextIdx = idx + 1 === numberOfSlides ? 0 : idx + 1;
			const currentSlide = allSlides[idx];
			const nextSlide = allSlides[nextIdx];
			const currentDot = allDots[idx];
			const nextDot = allDots[nextIdx];

			currentSlide.classList.remove("active");
			nextSlide.classList.add("active");
			currentDot.classList.remove("active");
			nextDot.classList.add("active");
		}
	};


	const updateSlide = (e: any, index: number) => {
        console.log(e, index);
        
		const allSlides = sliderRef.current?.querySelectorAll(".slide");
        const allDots = sliderRef.current?.querySelectorAll(".dot");

        if (allSlides && allDots) {
            const idx = index;
            const numberOfSlides = allSlides.length;
            const nextIdx = idx+1 === numberOfSlides ? 0 : idx+1;
            const currentSlide = allSlides[idx];
            const nextSlide = allSlides[nextIdx];
            const currentDot = allDots[idx];
            const nextDot = allDots[nextIdx];

            currentSlide.classList.remove("active");
            nextSlide.classList.add("active");
            currentDot.classList.remove("active");
            nextDot.classList.add("active");
        }
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<section className="image-slider relative h-[75svh] overflow-hidden">
				<div ref={sliderRef} className="img-slider relative">
					{slides.map((slide, index) => (
						<div className={`slide ${index === 0 ? "active" : ""}`} key={index}>
							<img src={slide.image} alt={slide.title} className="w-full" />
							<div className="content absolute z-10 top-10 left-10 text-white font-semibold">
								<h1 className="text-4xl font-bold">{slide.title}</h1>
								<p className="text-2xl">{slide.description}</p>
							</div>
						</div>
					))}

					<div className="navigation mb-10">
						{slides.map((slide, index) => {
							console.log(slide.title);

							return (
								<div
									className={`dot ${index === 0 ? "active" : ""}`}
									key={index}
									onClick={(e) => updateSlide(e, index)}
								></div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
