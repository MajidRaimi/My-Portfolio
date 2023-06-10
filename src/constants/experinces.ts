import {
    mayaseen, shamah, natheel
} from '../assets';

export interface experiencesProps {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
}

const experiences: experiencesProps[] = [
    {
        title: "Swift Developer",
        company_name: "Shamah Autism Center",
        icon: shamah,
        iconBg: "#E6DEDD",
        date: "August 2021 - November 2021",
        points: [
            "Spearheaded the development of a sophisticated mobile application from scratch.",
            " Worked closely with design teams, product managers, and other developers to create a high-quality, user-centric application.",
            "Implemented a responsive and intuitive user interface, ensuring a seamless user experience.",
            "Participated in regular code reviews, providing and receiving constructive feedback to ensure high-quality, efficient, and maintainable code.",
        ],
    },
    {
        title: "React Developer",
        company_name: "Natheel",
        icon: natheel,
        iconBg: "#E6DEDD",
        date: "Jan 2022 - Feb 2022",
        points: [
            "Spearheaded the design, development, and deployment of a professional company portfolio website.",
            "Directed all aspects of the website's content creation, from writing and editing to visual design and layout.",
            "mplemented a responsive, user-friendly design to ensure seamless navigation and viewing experience across various devices.",
            "Handled the deployment of the website, ensuring its optimal performance and security.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Mayaseen",
        icon: mayaseen,
        iconBg: "#E6DEDD",
        date: "DEC 2022 - Present",
        points: [
            "I specialize in crafting engaging, user-friendly websites with optimal performance using modern technologies like React.js and Vue.js.",
            "My back-end work involves building scalable server-side software with Node.js and Express.js, focusing on secure APIs and seamless integration with front-end components.",
            "I create efficient, user-friendly mobile applications for both iOS and Android platforms, delivering solid functionality and excellent user experience.",
        ],
    },
];

export default experiences;