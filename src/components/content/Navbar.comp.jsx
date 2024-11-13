import { useState } from "react";

const NavbarComponent = ({ activeSection }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <nav>
            {/* hamburger */}
            <button className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`navbar-wrapper ${isMenuOpen ? "open" : ""}`}>
                <li>
                    <a
                        href="#about-container"
                        className={`${activeSection === "about-container" ? "active" : ""}`}
                        data-back="about"
                        data-front="about"
                        onClick={handleSmoothScroll}
                    ></a>
                </li>
                <li>
                    <a
                        href="#skills-container"
                        className={`${activeSection === "skills-container" ? "active" : ""}`}
                        data-back="skills"
                        data-front="skills"
                        onClick={handleSmoothScroll}
                    ></a>
                </li>
                <li>
                    <a
                        href="#works-container"
                        className={`${activeSection === "works-container" ? "active" : ""}`}
                        data-back="works"
                        data-front="works"
                        onClick={handleSmoothScroll}
                    ></a>
                </li>
                <li>
                    <a
                        href="#contacts-container"
                        className={`${activeSection === "contacts-container" ? "active" : ""}`}
                        data-back="contact"
                        data-front="contact"
                        onClick={handleSmoothScroll}
                    ></a>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarComponent;
