const NavbarComponent = ({ activeSection }) => {
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav>
            <ul className="navbar-wrapper">
                <li>
                    <a
                        href="#about-container"
                        className={`${
                            activeSection === "about-container" ? "active" : ""
                        }`}
                        data-back="about"
                        data-front="about"
                        onClick={handleSmoothScroll}
                    ></a>
                </li>
                <li className={activeSection === "skills-container" ? "active" : ""}>
                    <a
                        href="#skills-container"
                        className={`${
                            activeSection === "skills-container" ? "active" : ""
                        }`}
                        data-back="skills"
                        data-front="skills"
                        onClick={handleSmoothScroll}
                    ></a>
                </li>
                <li className={activeSection === "works-container" ? "active" : ""}>
                    <a
                        href="#works-container"
                        className={`${
                            activeSection === "works-container" ? "active" : ""
                        }`}
                        data-back="works"
                        data-front="works"
                        onClick={handleSmoothScroll}
                    ></a>
                </li>
                <li className={activeSection === "contacts-container" ? "active" : ""}>
                    <a
                        href="#contacts-container"
                        className={`${
                            activeSection === "contacts-container" ? "active" : ""
                        }`}
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
