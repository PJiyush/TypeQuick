import { createContext, useContext } from "react";
import { StartContextType } from "@/interface/StartInterface";

export const StartContext = createContext<StartContextType|undefined>(undefined)
export const useStart = ()=>useContext(StartContext)