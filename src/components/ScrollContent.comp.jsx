import AboutComponent from "./content/About.comp.jsx";
import SkillsComponent from "./content/Skills.comp.jsx";
import WorksComponent from "./content/Works.comp.jsx";
import ContactsComponent from "./content/Contacts.comp.jsx";

const ScrollContentComponent = () => {

    return (
        <div className="scrollContent-container"> 
            <AboutComponent />
            <SkillsComponent />
            <WorksComponent />
            <ContactsComponent />
        </div>
    );
};

export default ScrollContentComponent;
