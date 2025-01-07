import { ReactNode } from "react";
import Navbar from "../../ReUse/Navbar/Navbar";
import Footer from "../../ReUse/Footer/Footer";
import { navs } from "./navs";

export default function HomeLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar navs={navs} />
			    <div className="pb-2 px-2">{children}</div>
			<Footer />
		</>
	);
}
