import { IoLogoWordpress } from "react-icons/io5";
import { MdCopyright } from "react-icons/md";
import {
	social,
	services,
	footerContent,
	footerStatements,
} from "./footerLinks";

export default function Footer() {
	return (
		<>
			<footer className="min-h-[50svh]">
				{/* Head of Footer */}
				<div className="head min-h-[10svh] flex items-center px-4 border-b-slate-400 border-b-2 flex-wrap">
					{/* LEFT */}
					<div className="logo flex gap-3 items-center justify-items-start w-[350px]">
						<IoLogoWordpress className="text-4xl" />|
						<span className="font-semibold">LTIMindtree</span>
					</div>
					{/* MIDDLE */}
					<div className="social flex gap-4 items-center mx-auto">
						{social.map((item, index) => {
							return (
								<>
									<a
										key={index}
										href={item.link}
										target="_blank"
										rel="noreferrer"
										className="text-2xl"
									>
										<item.icon />
									</a>
								</>
							);
						})}
					</div>
					{/* RIGHT */}
					<div className="services flex items-center gap-2 w-[350px] justify-end">
						{services.map((item, index) => {
							return (
								<>
									{index != 0 ? " | " : ""}
									<a
										key={index}
										href={item.link}
										target="_blank"
										rel="noreferrer"
									>
										{item.title}
									</a>
								</>
							);
						})}
					</div>
				</div>
				{/* Footer Content */}
				<div className="content min-h-[30svh] px-4 py-8">
					<p className="text-base"> {footerContent} </p>
				</div>
				{/* Tail of Footer */}
				<div className="tail min-h-[10svh] px-4 bg-slate-300 flex">
					{/* Copyright */}
					<div className="copyright text-sm flex items-center">
						<MdCopyright className="text-sm" />
						2024 LTIMindtree Limited
					</div>
					<div className="statements flex-grow flex items-center justify-center">
						<p className="w-[60%]">
							{footerStatements.map((item, index) => {
								return (
									<>
										{index != 0 ? " | " : ""}
										<a
											key={index}
											href={item.link}
											target="_blank"
											rel="noreferrer"
										>
											{item.title}
										</a>
									</>
								);
							})}
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
