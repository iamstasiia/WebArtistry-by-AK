import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("lightMode");
    const [font, setFont] = useState(false);

    const [scrollPercent, setScrollPercent] = useState(0);
    const [backgroundStyle, setBackgroundStyle] = useState("var(--color-d)");
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    const themeChanger = (newTheme) => {
        setTheme(newTheme);
    };

    const fontChanger = () => {
        setFont((prevFont) => !prevFont);
    };

    useEffect(() => {
        const scrollHandler = () => {
            const scrollableElement = document.querySelector(".scroll-content-container");
            const maxHeight = scrollableElement.scrollHeight - scrollableElement.clientHeight;
            const scrollRatio = scrollableElement.scrollTop / maxHeight;
            const angle = scrollRatio * 360;
            const percent = Math.round(scrollRatio * 100);

            setScrollPercent(percent);
            setBackgroundStyle(
                `conic-gradient(from 0deg, var(--color-b) 0%, var(--color-1) ${angle}deg, var(--color-d) ${angle}deg)`
            );

            setShowScrollTopButton(scrollableElement.scrollTop > 300);
        };

        const scrollableElement = document.querySelector(".scroll-content-container");
        scrollableElement.addEventListener("scroll", scrollHandler);

        scrollHandler();

        return () => {
            scrollableElement.removeEventListener("scroll", scrollHandler);
        };
    }, [theme]);

    const scrollToTop = () => {
        document.querySelector(".scroll-content-container").scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const value = {
        theme,
        themeChanger,
        font,
        fontChanger,
        scrollPercent,
        backgroundStyle,
        showScrollTopButton,
        scrollToTop,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
