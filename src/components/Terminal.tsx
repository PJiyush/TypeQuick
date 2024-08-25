import { useEffect, useRef, useState } from 'react'
import { handleKey } from '@/lib/handleKey';
import { appendClass } from '@/lib/helper';
import { generateWords } from '@/lib/generateWords';
import { useTimer } from '@/hooks/useTimer';
import { useStart } from '@/context/StartContext';
import { storeWpmAccuracy } from '@/lib/storeWpmAccuracy';
import { useStore } from '@/context/StorageContext';
import { TiMediaPauseOutline } from "react-icons/ti";
import { MdOutlineRestartAlt } from "react-icons/md";
import { useTheme } from '@/context/ThemeContext';
const words:string = generateWords(20)

function Terminal() {
    const actTime = useRef(0);
    const {isStart,switchMode} = useStart()||{};
    const timer = useTimer(isStart);
    actTime.current = timer;
    const [complete, setComplete] = useState(false);
    const {setItem} = useStore()||{};
    const {isDarkMode} = useTheme()||{};
    useEffect(() => {
        const startKey = (e:KeyboardEvent)=>{
            e.preventDefault();
            if(e.key === 'Enter'){
                if(switchMode) switchMode()
                else console.log('switchMode is not defined')
        }}
        if(!isStart){
            document.addEventListener('keydown',startKey)
        } 
        return () => {
            document.removeEventListener('keydown',startKey)
        }
    },[isStart])
    useEffect(() => {
        if(isStart){
            document.addEventListener('keydown',(e:KeyboardEvent)=>{
                const stop = handleKey(e);
                if(stop){
                    setComplete(true);
                    setItem(storeWpmAccuracy(actTime.current).accuracy, storeWpmAccuracy(actTime.current).wpm)
                    if(switchMode) switchMode()
                    window.scrollTo({
                        top: 800,
                        behavior: 'smooth'})
                }
            });
        }
        return () => {
            document.removeEventListener('keydown',(e:KeyboardEvent)=>{
                const stop = handleKey(e);
                if(stop){
                    setComplete(true);
                    if(switchMode) switchMode()
                }
            });
        }
    },[isStart, switchMode])
    useEffect(() => {
        appendClass( document.querySelector('.word'), 'current');
        appendClass( document.querySelector('.character'), 'focus');
    },[])
    return (
        <div className={`terminal h-3/4 w-5/6 mx-auto my-10 rounded-3xl  ${!isDarkMode? "bg-white/80":"bg-white/5"} `}>
            <div className={`h-96 mx-8 pt-8 ${isStart?"":'blur-lg'} ${!isDarkMode? "text-lightThemeSecondary":"text-nightThemeSecondary"} opacity-70`} id='words'>
                {words.split(' ').map((word:string, index:number) => (
                    <span key={index} className="lg:text-5xl text-lg font-mono word">
                        {word.split("").map((char, index) => (
                            <span key={index} className='character'>{char}</span>
                        ))}
                        <span className="space"> </span>
                    </span>
                ))}
            </div>
            <div className={` mx-8 ${isStart?'hidden':''} -top-96 relative pt-8`} >
                <p className={` text-5xl ${!isDarkMode? "text-lightThemeSecondary":"text-nightThemeSecondary"} flex justify-center mt-4`}>{complete?"Test Completed":"Press Enter to start"}</p>
            </div>
            <div className={` w-full h-20 flex justify-center relative ${isStart?"-top-[40px]":"hidden"} `}>
                <div className={` w-20 text-5xl mr-2 flex justify-center opacity-50 font-extrabold ${!isDarkMode?'text-lightThemeSecondary':'text-nightThemeSecondary'} `}>{timer}</div>
            </div>
            <div className={`w-full h-12 relative ${isStart?"-top-[40px]":"hidden"} flex justify-center`}>
                <div className='w-24  flex items-center'>
                    <TiMediaPauseOutline className={` ${!isDarkMode? "text-lightThemeSecondary":"text-nightThemeSecondary"} text-5xl font-semibold cursor-pointer opacity-50 hover:opacity-100`} onClick={switchMode}/>
                    <MdOutlineRestartAlt className={` ${!isDarkMode? "text-lightThemeSecondary":"text-nightThemeSecondary"} text-4xl font-semibold cursor-pointer opacity-50 hover:opacity-100`} onClick={()=>{
                        window.location.reload()
                    }}/>
                </div>
            </div>
            
        </div>
    );
}

export default Terminal