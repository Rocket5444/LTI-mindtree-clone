import { Link } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
export default function ContactPop(){

    return (
			<button className="bg-yellow-500 flex items-center justify-center gap-4 border border-black fixed right-0 bottom-0 text-2xl z-20 p-2 rounded-md bg-opacity-70">
				<FaMessage className='text-2xl translate-y-0.5' />
				<Link to="/contact-us" className="font-semibold">
					Contact Us
				</Link>
			</button>
		);
}