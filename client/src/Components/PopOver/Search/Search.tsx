import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
import "./Search.css";

// Interface for Search
interface SearchProps {
	handleClose: () => void;
	in?: boolean;
}

export default function Search({ handleClose, in: inProp }: SearchProps) {
	return (
		<CSSTransition
			in={inProp}
			timeout={1000}
			classNames="searchBody"
			unmountOnExit
		>
			<div
				className="search h-[100svh] absolute bg-opacity-60 bg-white w-full z-50"
			>
				<div className="searchbar h-[14svh] bg-blue-950 bg-opacity-100 flex gap-5 items-center justify-center relative">
					<div className="searchInput w-[80%] flex items-center gap-5">
						<input
							type="text"
							placeholder="Search"
							className="w-[90%] h-[80%] bg-white border-none text-xl p-2"
						/>
						<IoSearch className="text-white text-3xl cursor-pointer" />
					</div>
					<div className="searchIcon flex absolute right-20">
						<IoClose
							className="text-white text-3xl cursor-pointer"
							onClick={handleClose}
						/>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
}
