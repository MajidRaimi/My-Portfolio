import {
    flutter, nextjs, githubtech, typescript, reactjs, redux, tailwind, nodejs, mongodb, threejs, git, figma, docker
} from '../assets';

interface technologiesProps {
    name: string;
    icon: string;
}


const technologies: technologiesProps[] = [
    {
        name: "flutter",
        icon: flutter,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next.js",
        icon: nextjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "github",
        icon: githubtech,
    },
    {
        name: "docker",
        icon: docker,
    },
];

export default technologies;