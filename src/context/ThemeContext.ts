import { createContext, useContext } from "react";
import { ThemeContextType } from "@/interface/ThemeInterface";

export const ThemeContext = createContext<ThemeContextType|undefined>(undefined)
export const useTheme = ()=>useContext(ThemeContext)
