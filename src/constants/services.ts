import {
    web, mobile, backend, creator
} from '../assets';

export interface servicesProps {
    title: string;
    icon: string;
}



const services: servicesProps[] = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "App Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "ML&DL Developer",
        icon: creator,
    },
];

export default services;