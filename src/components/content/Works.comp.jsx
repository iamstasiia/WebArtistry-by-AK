import Screenshot01 from "../../assets/works-img/Screenshot-01.png";
import Screenshot02 from "../../assets/works-img/Screenshot-02.png";
import Screenshot03 from "../../assets/works-img/Screenshot-03.png";
import Screenshot04 from "../../assets/works-img/Screenshot-04.png";
import Screenshot05 from "../../assets/works-img/Screenshot-05.png";
import { VanillaTilt } from "../../styles/vanilla-tilt.js";

const WorksComponent = () => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: true, // if it should have a "glare" effect
        "max-glare": 0.75,
    });

    const worksArray = [
        {
            title: "Store Homepage",
            description: "HTML, SCSS",
            picture: Screenshot01,
            link: "https://iamstasiia.github.io/WebDevCourse_HTML-CSS_Website-presentation/",
        },
        {
            title: "Shopping List",
            picture: Screenshot02,
            description: "JavaScript, SCSS, HTML",
            link: "https://iamstasiia.github.io/WebDevCourse_SPA_01_Shopping-List/",
        },
        {
            title: "Weather App",
            picture: Screenshot03,
            description: "JavaScript, SCSS, HTML",
            link: "https://web-dev-weather.vercel.app/",
        },
        {
            title: "Sign In Form",
            picture: Screenshot04,
            description: "JavaScript, SCSS, HTML",
            link: "https://sign-in-form-five.vercel.app/",
        },
        {
            title: "Recipe App",
            picture: Screenshot05,
            description: "JavaScript, SCSS, HTML",
            link: "https://culinary-delights.vercel.app/recipes",
        },
    ];

    return (
        <section id="works-container" className="works-container">
            <div className="content">
                <div className="title-container">
                    <h2>
                        <span>My</span> works
                    </h2>
                    <p>
                        Explore my portfolio to see examples of my work that demonstrate my skills and dedication to web
                        development. Each project represents a milestone in my journey as a developer.
                    </p>
                </div>

                <div className="work-page-links">
                    <ul>
                        {worksArray.map((work, index) => (
                            <li className="card" key={index}>
                                <div className="img-box">
                                    <a href={work.link} target="_blank">
                                        <img src={work.picture} alt="#" />
                                    </a>
                                    <h3>{work.title}</h3>
                                </div>
                                <div className="card-content">
                                    <p>{work.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="background-text">Portfolio</p>
        </section>
    );
};

export default WorksComponent;
