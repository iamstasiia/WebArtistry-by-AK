import Screenshot01 from '../../assets/works-img/Screenshot-01.png';
import Screenshot02 from '../../assets/works-img/Screenshot-02.png';
import Screenshot03 from '../../assets/works-img/Screenshot-03.png';
import Screenshot04 from '../../assets/works-img/Screenshot-04.png';
import Screenshot05 from '../../assets/works-img/Screenshot-05.png';

const WorksComponent = () => {

    return (
        <section id="works-container" className="works-container">
            <div className="content">
                <div className='title-container'>
                    <h2>
                        <span>My</span> works
                    </h2>
                    <p>Explore my portfolio to see examples of my work that demonstrate my skills and dedication to web development. Each project represents a milestone in my journey as a developer.</p>
                </div>

                <div className="work-page-links">
                    <ul>
                        <li>
                            <a href="https://iamstasiia.github.io/WebDevCourse_HTML-CSS_Website-presentation/" target='_blank'><img src={Screenshot01} alt="#" /></a>
                        </li>
                        <li>
                            <a href="https://iamstasiia.github.io/WebDevCourse_SPA_01_Shopping-List/" target='_blank'><img src={Screenshot02} alt="#" /></a>
                        </li>
                        <li>
                            <a href="https://web-dev-weather.vercel.app/" target='_blank'><img src={Screenshot03} alt="#" /></a>
                        </li>
                        <li>
                            <a href="https://culinary-delights.vercel.app/recipes" target='_blank'><img src={Screenshot05} alt="#" /></a>
                        </li>
                        <li>
                            <a href="https://sign-in-form-five.vercel.app/" target='_blank'><img src={Screenshot04} alt="#" /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="background-text">Portfolio</p>
        </section>
    );
};

export default WorksComponent;
