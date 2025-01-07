import { ReactNode, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Search from "../../Components/PopOver/Search/Search";

export default function HomeLayout({ children }: { children: ReactNode }) {
	// Search State
	const [isSearching, setIsSearching] = useState(false);
	const toggleIsSearching = () => setIsSearching(!isSearching);

	return (
		<>
			{isSearching && <Search handleClose={toggleIsSearching} in={isSearching} />}
			<NavBar toggleIsSearching={toggleIsSearching} />
			<div className="bg-blue-950 overflow-x-clip">
			{children}
			</div>
			<Footer />
		</>
	);
}
