import NetworkLinksComponent from './NetworkLinks.comp.jsx';

const ContactsComponent = () => {

    return (
        <section id="contacts-container" className="contacts-container">
            <div className="content">
                <h2>
                    <span>My</span> contacts
                </h2>
                <p>
                    I am enthusiastic about learning and collaborating on
                    exciting projects. 
                </p>
                <p>Feel free to contact me via:</p>

                <NetworkLinksComponent />
                
                <p>Thank you for visiting my portfolio!</p>
            </div>
            <p className="background-text">Contact me</p>
        </section>
    );

};

export default ContactsComponent;
