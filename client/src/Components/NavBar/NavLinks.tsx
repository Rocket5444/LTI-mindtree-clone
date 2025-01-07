import { Link } from "react-router-dom";

// interface for NavLinks
interface NavLinksProps {
    redirectLink: string;
    title: string;
    cssStyle: string;
}

export default function NavLinks({ redirectLink, title, cssStyle } : NavLinksProps) {
	return (
		<div className={cssStyle}>
			<Link to={redirectLink}>{title}</Link>
		</div>
	);
}
