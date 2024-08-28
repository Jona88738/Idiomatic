import { Theme, createTheme } from "@mui/material";
import { FC, PropsWithChildren, createContext } from "react";
import { useModeTheme } from "./useModeTheme";

type ThemeContextType = {
    mode: string;
    toggleDarkMode: () => void;
    theme: Theme;
}

export const ThemeContext = createContext<ThemeContextType>({
    mode: "light",
    toggleDarkMode: () => {},
    theme: createTheme(),
})

export const ThemeContextProvider: FC<PropsWithChildren> = ({children}) => {
    const value = useModeTheme();

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
