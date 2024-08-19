import { ThemeContextType } from "@/interface/ThemeInterface";
import { useState } from "react";

export const useThemeValue = ():ThemeContextType => {
    const [isDarkMode, setisDarkMode] = useState<boolean>(false);
    const switchMode = () => {
        setisDarkMode(prevMode => !prevMode);
    };
    return {
        isDarkMode,
        switchMode
    };
}