import { useEffect } from "react";

const skillsArray = [
    { title: "HTML 5", icon: "fa-brands fa-html5" },
    { title: "CSS 3", icon: "fa-brands fa-css3-alt" },
    { title: ["JavaScript", "(ES6)"], icon: "fa-brands fa-js" },
    { title: ["Sass", "(Scss)"], icon: "fa-brands fa-sass" },
    { title: "React", icon: "fa-brands fa-react" },
    { title: "Node.js", icon: "fa-brands fa-node-js" },
    { title: ["Bootstrap", "Tailwind"], icon: "fa-brands fa-bootstrap" },
    { title: "Responsive", icon: "fa-solid fa-crop" },
    { title: "Figma", icon: "fa-brands fa-figma" },
    { title: "Terminal", icon: "fa-solid fa-terminal" },
    { title: "Git", icon: "fa-brands fa-git-alt" },
    { title: "GitHub", icon: "fa-brands fa-github" },
];

const SkillsComponent = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            const skills = document.querySelectorAll(".skills-list li");
            const randomIndex = Math.floor(Math.random() * skillsArray.length);
            const randomSkill = skills[randomIndex];
            randomSkill.classList.add("active");

            setTimeout(() => {
                randomSkill.classList.remove("active");
            }, 2000);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="skills-container" className="skills-container">
            <div className="content">
                <h2>
                    <span>My</span> skills
                </h2>
                <div className="skills-list">
                    <ul>
                        {skillsArray.map((skill, index) => (
                            <li key={index}>
                                <i className={skill.icon}></i>
                                {Array.isArray(skill.title) ? (
                                    skill.title.map((t, i) => <p key={i}>{t}</p>)
                                ) : (
                                    <p>{skill.title}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="background-text">My abilities</p>
        </section>
    );
};

export default SkillsComponent;
