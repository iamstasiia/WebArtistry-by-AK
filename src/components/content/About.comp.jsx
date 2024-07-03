const AboutComponent = () => {
    return (
        <section id="about-container" className="about-container">
            <div className="content">
                <p>Hello World, I`m</p>
                <h1>
                    <span>A</span>nastasiia <span>K</span>hrypko
                </h1>
                <h3>a <span>Junior Web Developer</span> based in Germany.</h3>

                <p>I have a strong interest in creating dynamic, responsive, and user-friendly websites. My journey into web development started with a curiosity about how websites function, evolving into a passion for coding and design.</p>

                <div className="network-links">
                    <ul>
                        <li><a href="https://github.com/iamstasiia" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fa-solid fa-envelope"></i></a></li>
                    </ul>
                </div>
            </div>
            <p className="background-text">About me</p>
        </section>
    );
};

export default AboutComponent;
