import { useEffect, useState } from 'react';
export const useTimer = (start:boolean=false) =>{
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        console.log('Terminal mounted');
        const interval = setInterval(() => {
            if(!start) return;
            setTimer(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }
    ,[start])
    return timer;
}