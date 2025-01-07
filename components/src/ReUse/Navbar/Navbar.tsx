import { Link } from "react-router-dom";
import { RiApps2Line } from "react-icons/ri";

interface NavbarProps {
    navs: {
        name: string;
        path: string;
    }[];
}

export default function Navbar({navs} : NavbarProps) {
    return (
			<div className="border-b border-yellow-300 w-full h-[10svh] flex justify-between px-4 items-center">
				<div className="logo w-32 font-bold text-2xl bg-gradient-to-br from-yellow-500 to-yellow-100 bg-clip-text text-transparent transition-all duration-1000 cursor-pointer">
					SKXYWTF
				</div>
				<div className="navs flex items-center gap-10 transition-all">
					{navs.map((nav, i) => (
						<Link key={i} to={nav.path} className="text-slate-300 font-semibold hover:text-white">
							{nav.name}
						</Link>
					))}
				</div>
				<div className="w-32 flex items-center">
					<RiApps2Line className="text-3xl cursor-pointer ml-auto" />
				</div>
			</div>
		);
}