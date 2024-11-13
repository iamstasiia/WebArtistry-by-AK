const NetworkLinksComponent = () => {
    return (
        <div className="network-links">
            <ul>
                <li>
                    <a href="https://github.com/iamstasiia" target="_blank">
                        <i className="fa-brands fa-github"></i>
                        <span className="tooltip">https://github.com/iamstasiia</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/anastasiia-khrypko-a43a20326/?trk=opento_sprofile_goalscard">
                        <i className="fa-brands fa-linkedin-in"></i>
                        <span className="tooltip">anastasiia-khrypko-a43a20326</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-solid fa-envelope"></i>
                        <span className="tooltip">a.a.khrypko@gmail.com</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NetworkLinksComponent;
