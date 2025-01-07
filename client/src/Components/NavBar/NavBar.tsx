import NavLinks from "./NavLinks";
import { BiSearch } from "react-icons/bi";
import { IoLogoWordpress } from "react-icons/io5";
import { topLinks, bottomLinks } from "./links";

// Interface for NavBar
interface NavBarProps {
	toggleIsSearching: () => void;
}

export default function NavBar({ toggleIsSearching }: NavBarProps) {
	return (
		<>
			<nav className="Navbar h-[14svh] sticky top-0 z-10 bg-blue-950 text-white flex flex-col px-16">
				{/* Top Nav */}
				<div className="flex justify-end items-center mt-auto">
					<div className="flex space-x-4 items-center">
                        <div className="text-white hover:cursor-pointer">
                            <BiSearch className="text-2xl" onClick={toggleIsSearching} />
                        </div>
						{topLinks.map((link, index) => {
							return (
								<NavLinks
									key={index}
									redirectLink={link.redirectLink}
									title={link.title}
									cssStyle="poppins-light"
								/>
							);
						})}
					</div>
				</div>

				{/* Bottom Nav */}
				<div className="flex items-center h-[7svh] mb-2">
					<div className="flex space-x-4 items-baseline">
						<IoLogoWordpress className="text-4xl text-blue-200 self-center" />
						<NavLinks
							redirectLink="/"
							title="LTIMindtree"
							cssStyle="font-bold text-blue-400 text-4xl italic py-2"
						/>
						{bottomLinks.map((link, index) => {
							return (
								<NavLinks
									key={index}
									redirectLink={link.redirectLink}
									title={link.title}
									cssStyle="poppins-normal text-white hover:text-blue-200 transition duration-500 ease-in-out"
								/>
							);
						})}
					</div>
				</div>
			</nav>
		</>
	);
}
