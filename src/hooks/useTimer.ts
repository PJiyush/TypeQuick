import { useEffect, useState } from 'react';
export const useTimer = () =>{
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        console.log('Terminal mounted');
        const interval = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }
    ,[])
    return timer;
}