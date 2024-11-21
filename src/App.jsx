import { useContext } from "react";
import { ThemeContext } from "./contexts/Theme.context.jsx";
import ScrollContentComponent from "./components/ScrollContent.comp.jsx";
import FooterComponent from "./components/Footer.comp.jsx";
import "./styles/App.scss";

function App() {
    const { theme, font, backgroundStyle } = useContext(ThemeContext);

    return (
        <div className={`app-wrapper ${theme} ${font ? "sans-serif" : ""}`}>
            <div className="scroll-indicator" style={{ background: backgroundStyle }}>
                <ScrollContentComponent />
            </div>

            <FooterComponent />
        </div>
    );
}

export default App;
