import { PaletteMode, createTheme } from "@mui/material"
import { useMemo, useState } from "react"
import { theme } from "./Theme";

export const useModeTheme = () => {
    const [mode, setMode] = useState<PaletteMode>("light");

    const toggleDarkMode = () => {setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))}

    const modifiedTheme = useMemo(
        () => createTheme({
            ...theme,
            palette: {
                ...theme.palette,
                mode,
            },
        }),
        [mode]
    )

    return {
        theme: modifiedTheme,
        mode,
        toggleDarkMode,
    }
}