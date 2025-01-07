// Importing the images for the carousel
import slide1 from '../../assets/Images/bg.jpg'
import slide2 from '../../assets/Images/bg1.jpg'
import slide3 from '../../assets/Images/bg3.webp'

import chaiman from '../../assets/Images/chairman.webp'

import Card1 from "../../assets/Images/card1.png";
import Card2 from "../../assets/Images/card2.png";
import Card3 from "../../assets/Images/card3.png";
import Card4 from "../../assets/Images/card4.png";

const slides = [
    {
        title: "Slide 1",
        description: "This is the first slide",
        image: slide1
    },
    {
        title: "Slide 2",
        description: "This is the second slide",
        image: slide2
    },
    {
        title: "Slide 3",
        description: "This is the third slide",
        image: slide3
    }
]

const valueAtScale = [
	{
		img: chaiman,
        chairmanName: "Mr. A. M. Naik",
        title: "Chairman Emeritus of L&T and Chairman of LTIMindtree",
        description: "LTIMindtree is integral to L&T’s technology-led growth vision and is poised to play a crucial role in the expansion and diversification of our services portfolio. The highly complementary strengths of LTI and Mindtree make this integration a win-win proposition for all our stakeholders — clients, partners, investors, shareholders, employees, and communities — furthering L&T’s tradition of innovation, excellence, trust, and empathy."
	},
];

const growthStats = [
    {
        type: "Revenue",
        value: "$4Bn+"
    },
    {
        type: "Clients",
        value: "700+"
    },
    {
        type: "Employees",
        value: "81,000+"
    },
    {
        type: "Countries",
        value: "30+"
    }
]

const valueCards = [
    {
        img: Card1,
        subTitles: [
            "Innovation",
            "Excellence",
            "Trust",
            "Empathy"
        ]
    },
    {
        img: Card2,
        subTitles: [
            "Innovation",
            "Excellence",
            "Trust",
            "Empathy"
        ]
    },
    {
        img: Card3,
        subTitles: [
            "Innovation",
            "Excellence",
            "Trust",
            "Empathy"
        ]
    },
    {
        img: Card4,
        subTitles: [
            "Innovation",
            "Excellence",
            "Trust",
            "Empathy"
        ]
    }
]


export { slides, valueAtScale, growthStats, valueCards }