import {
    web, mobile, backend, creator
} from '../assets';

interface servicesProps {
    title: string;
    icon: string;
}



const services: servicesProps[] = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

export default services;