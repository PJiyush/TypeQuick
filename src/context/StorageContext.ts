import { createContext, useContext } from "react";
import { StorageInterface } from "@/interface/StorageInterface";

export const StorageContext = createContext<StorageInterface|undefined>(undefined)
export const useStore = ()=>useContext(StorageContext)