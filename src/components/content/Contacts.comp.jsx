const ContactsComponent = () => {
    return (
        <section id="contact-container" className="contact-container">
            <div className="content">
                <h2>
                    <span>My</span> contacts
                </h2>
                <p>
                    I am enthusiastic about learning and collaborating on
                    exciting projects. 
                </p>
                <p>Feel free to contact me via:</p>
                <div className="network-links">
                    <ul>
                        <li><a href="https://github.com/iamstasiia" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fa-solid fa-envelope"></i></a></li>
                    </ul>
                </div>
                <p>Thank you for visiting my portfolio!</p>
            </div>
            <p className="background-text">Contact me</p>
        </section>
    );
};

export default ContactsComponent;
