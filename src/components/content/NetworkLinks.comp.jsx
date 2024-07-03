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
                {/* <li>
                    <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </li> */}
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
