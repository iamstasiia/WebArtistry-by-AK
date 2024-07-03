import { useState, useEffect, useContext } from "react";
import NavbarComponent from "./content/Navbar.comp.jsx";
import AboutComponent from "./content/About.comp.jsx";
import SkillsComponent from "./content/Skills.comp.jsx";
import WorksComponent from "./content/Works.comp.jsx";
import ContactsComponent from "./content/Contacts.comp.jsx";
import { ThemeContext } from "../contexts/Theme.context.jsx";

const ScrollContentComponent = () => {
    const [activeSection, setActiveSection] = useState("");
    const {theme} = useContext(ThemeContext);
    console.log(theme);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="scroll-content-container" style={{ backgroundImage: `linear-gradient(var(--fog-color), var(--fog-color)), url(./src/assets/image-from-rawpixel-id-13122505-png${theme === 'lightMode' ? '-black' : ''}.png)`}}> 
            <NavbarComponent activeSection={activeSection} />

            <AboutComponent />
            <SkillsComponent />
            <WorksComponent />
            <ContactsComponent />
        </div>
    );
};

export default ScrollContentComponent;
