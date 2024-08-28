// src/hooks/useThemeContext.ts
import { useContext } from "react";
import ThemeContext from "../styles/theme/ThemeContextProvider"; // Ajusta la ruta si es necesario

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(
          "useThemeContext must be used within a ThemeContextProvider."
        );
    }
    const { mode, theme, toggleDarkMode } = context;
    return {
        mode,
        theme, 
        toggleDarkMode,
    };
};
