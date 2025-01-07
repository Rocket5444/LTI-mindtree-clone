// Social Media logos Import
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";

// Interfaces
interface socialInterface {
    icon: typeof IoLogoLinkedin,
    link: string
}

interface servicesInterface {
    title: string,
    link: string
}

interface statementsInterface {
    title: string,
    link: string
}

const social: Array<socialInterface> = [
    {
        icon: IoLogoLinkedin,
        link: ""
    },
    {
        icon: FaInstagram,
        link: ""
    },
    {
        icon: FaXTwitter,
        link: ""
    },
    {
        icon: FaYoutube,
        link: ""
    },
    {
        icon: RiFacebookFill,
        link: ""
    },
    {
        icon: MdMailOutline,
        link: ""
    }
]

const services: Array<servicesInterface> = [
    {
        title: "Blogs",
        link: ""
    },
    {
        title: "Carreers",
        link: ""
    },
    {
        title: "Company",
        link: ""
    },
    {
        title: "Investors",
        link: ""
    },
    {
        title: "Newsletters",
        link: ""
    }
]

const footerContent : string = "LTIMindtree is a global technology consulting and digital solutions company that enables enterprises across industries to reimagine business models, accelerate innovation, and maximize growth by harnessing digital technologies. As a digital transformation partner to more than 700 clients, LTIMindtree brings extensive domain and technology expertise to help drive superior competitive differentiation, customer experiences, and business outcomes in a converging world. Powered by 81,000+ talented and entrepreneurial professionals across more than 30 countries, LTIMindtree — a Larsen & Toubro Group company — combines the industry-acclaimed strengths of erstwhile Larsen and Toubro Infotech and Mindtree in solving the most complex business challenges and delivering transformation at scale. For more information, please visit https://www.ltimindtree.com/."

const footerStatements: Array<statementsInterface> = [
    // Accessibility Standard
    {
        title: "Accessibility Standard",
        link: ""
    },
    // Multi-Year Accessibility Plan
    {
        title: "Multi-Year Accessibility Plan",
        link: ""
    },
    // Modern Slavery Statement
    {
        title: "Modern Slavery Statement",
        link: ""
    },
    // Privacy Statement
    {
        title: "Privacy Statement",
        link: ""
    },
    // Do not sell my personal information
    {
        title: "Do not sell my personal information",
        link: ""
    },
    // Sitemap
    {
        title: "Sitemap",
        link: ""
    },
    // Responsible Disclosure
    {
        title: "Responsible Disclosure",
        link: ""
    }
]

export { social, services, footerContent, footerStatements }