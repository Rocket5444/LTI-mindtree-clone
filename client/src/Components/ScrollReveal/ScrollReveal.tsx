import React, { useRef, useEffect } from "react";
import "./ScrollReveal.css";

export default function ScrollReveal({
	children, transformCSS
}: {
	children: React.ReactNode,
    transformCSS?: string
}) {
	const nodeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("active");
				} else {
					entry.target.classList.remove("active");
				}
			});
		});

		if (nodeRef.current) {
			observer.observe(nodeRef.current);
		}

		return () => {
			if (nodeRef.current) {
				observer.unobserve(nodeRef.current);
			}
		};
	}, []);

	return (
		<section ref={nodeRef} className={`scroll-to-reveal ${transformCSS}`}>
			{children}
		</section>
	);
}
