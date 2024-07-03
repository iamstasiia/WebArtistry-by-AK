import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme.context.jsx";

function FooterComponent() {
    const {
        theme,
        themeChanger,
        font,
        fontChanger,
        scrollPercent,
        showScrollTopButton,
        scrollToTop,
    } = useContext(ThemeContext);

    return (
        <footer>
            <small className="copyright">&copy;/2024 Anastasiia Khrypko</small>

            <div className="theme-switcher-container">
                <div className="theme-switcher">
                    <label>
                        <input
                            type="radio"
                            name="theme"
                            value="lightMode"
                            checked={theme === "lightMode"}
                            onChange={() => themeChanger("lightMode")}
                        />
                        Light
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="theme"
                            value="darkMode"
                            checked={theme === "darkMode"}
                            onChange={() => themeChanger("darkMode")}
                        />
                        Dark
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="font"
                            checked={font}
                            onChange={fontChanger}
                        />
                        Sans-serif
                    </label>
                </div>

                <div className="scroll-percent-box">
                    {showScrollTopButton && (
                        <button
                            className="scroll-to-top-btn"
                            onClick={scrollToTop}
                        >
                            <i className="fa-solid fa-angles-up"></i>
                        </button>
                    )}
                    <p id="percent-value">
                        {scrollPercent}
                        <span>%</span>
                        <i className="fa-solid fa-scroll"></i>
                    </p>
                </div>
            </div>
        </footer>
    );

}

export default FooterComponent;
