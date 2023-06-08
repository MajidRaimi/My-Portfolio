import { activeType } from "../components/Navbar";


const smoothScroll = (id: activeType) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
        behavior: "smooth",
    });

}

export default smoothScroll;