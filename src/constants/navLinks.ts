import { activeType } from "../components/Navbar";

interface NavLinkProps {
    id: activeType;
    title: string;
}

export const navLinks: NavLinkProps[] = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export default navLinks;