import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import { slides, valueAtScale, growthStats, valueCards } from "./homeComponents";
import HeroSlider from "../../Components/Sliders/HeroSlider/HeroSlider";
import ValueAtScale from "./HomeComponents/ValueAtScale";
import ScrollReveal from "../../Components/ScrollReveal/ScrollReveal";
import GrowthStats from "./HomeComponents/GrowthStats";
import ValueCards from "./HomeComponents/ValueCards";
import peopleImg from "../../assets/Images/people.jpg";
import "./Home.css";

// Home page
export default function Home() {
	return (
		<HomeLayout>
			{/* Hero SLider */}

			{<HeroSlider slides={slides} />}

			{/* Value At Scale */}
			<ValueAtScale valueAtScale={valueAtScale} />

			{/* Growth Section */}
			<ScrollReveal transformCSS="translate-y-40 duration-[1s]">
				<section className="growth-section">
					<h1>Creating Next Level Growth</h1>
					<GrowthStats stats={growthStats} />
				</section>
			</ScrollReveal>

			{/* Main Sec */}
			<ScrollReveal transformCSS="translate-y-40 duration-[1s]">
				<div className="main-section bg-slate-100 p-[2rem] min-h-[60svh] flex flex-col gap-8">
					<h1 className="poppins-bold text-3xl text-center">
						Unmatched core to Experience Transformation
					</h1>
					<div className="content md:flex justify-center gap-8 flex-grow items-center">
						<div className="text basis-[50%] poppins-extralight text-xl">
							<ScrollReveal transformCSS="-translate-x-40 duration-[1s]">
								<p>
									LTIMindtree is a new kind of technology consulting compnay. We
									help businesses transform-from core to experience-to thrive in
									the marketplace of the future. With a unique blend of the
									engineering DNA with experience DNA, LTIMindtree helps
									businesses get to the future, faster.
								</p>
							</ScrollReveal>
						</div>
						<div className="image basis-[40%] flex items-center justify-center overflow-clip">
							<ScrollReveal transformCSS="translate-x-40 duration-[1s] flex flex-grow items-center justify-center">
								<img
									src={peopleImg}
									alt="People working together"
									className="h-[250px]"
								/>
							</ScrollReveal>
						</div>
					</div>
				</div>
			</ScrollReveal>

			{/* Creating Value */}
			<ScrollReveal transformCSS="translate-y-40 duration-[1s]">
				<div className="creating-value p-[2rem] min-h-[60svh] flex flex-col gap-8">
					<h1>Together Creating Value</h1>
					<ValueCards cards={valueCards} />
				</div>
			</ScrollReveal>
		</HomeLayout>
	);
}
