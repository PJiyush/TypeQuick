import { useEffect, useState } from 'react'
import { handleKey } from '@/lib/handleKey';
import { appendClass } from '@/lib/helper';
import { generateWords } from '@/lib/generateWords';
import { useTimer } from '@/hooks/useTimer';
import { useStart } from '@/context/StartContext';

const words:string = generateWords(2)

function Terminal() {
    const {isStart,switchMode} = useStart()||{};
    const timer = useTimer(isStart);
    const [complete, setComplete] = useState(false);
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
                    if(switchMode) switchMode()
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
        <div className='terminal h-3/4 w-5/6 mx-auto my-10 rounded-3xl bg-white/20 shadow-lg shadow-black/10'>
            <div className={`h-96 mx-8 pt-8 ${isStart?"":'blur-lg'}`} id='words'>
                {words.split(' ').map((word:string, index:number) => (
                    <span key={index} className="text-5xl font-mono word">
                        {word.split("").map((char, index) => (
                            <span key={index} className='character'>{char}</span>
                        ))}
                        <span className="space"> </span>
                    </span>
                ))}
            </div>
            <div className={` mx-8 ${isStart?'hidden':''} -top-96 relative pt-8`} >
                <p className=' text-5xl text-white'>{complete?"Test Completed":"Press Enter to start"}</p>
            </div>
            <div className='bg-yellow-500 text-white w-10 text-center rounded-md'>
                {timer}
            </div>
            <div onClick={switchMode} className='bg-red-600 w-52'>
                stop
            </div>
        </div>
    );
}

export default Terminal