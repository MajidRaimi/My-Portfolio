import {
    web, mobile, backend, creator
} from '../assets';

export interface servicesProps {
    title: string;
    icon: string;
}



const services: servicesProps[] = [
    {
        title: "Web\nDeveloper",
        icon: web,
    },
    {
        title: "App\nDeveloper",
        icon: mobile,
    },
    {
        title: "Backend\nDeveloper",
        icon: backend,
    },
    {
        title: "ML / DL\nDeveloper",
        icon: creator,
    },
];

export default services;