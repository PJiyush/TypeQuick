import { StartContextType } from "@/interface/StartInterface";
import { useState } from "react";

export const useStartValue = ():StartContextType => {
    const [isStart, setisStart] = useState<boolean>(false);
    const switchMode = () => {
        setisStart(isStart => !isStart);
    };
    return {
        isStart,
        switchMode
    };
}