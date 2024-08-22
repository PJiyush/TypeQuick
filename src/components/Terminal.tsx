import { useEffect } from 'react'
import { handleKey } from '@/lib/handleKey';
import { appendClass } from '@/lib/helper';
function Terminal() {
    const words:string = "type quick";
    useEffect(() => {
        document.addEventListener('keydown',handleKey);
        return () => {
            document.removeEventListener('keydown',handleKey);
        }
    },[])
    useEffect(() => {
        appendClass( document.querySelector('.word'), 'current');
        appendClass( document.querySelector('.character'), 'focus');
    },[])
    return (
        <div className='terminal h-3/4 w-5/6 mx-auto my-10 rounded-3xl bg-white/20 shadow-lg shadow-black/10'>
            <div className={`h-96 mx-8 pt-8`} id='words'>
                {words.split(' ').map((word:string, index:number) => (
                    <span key={index} className="text-5xl font-mono word">
                        {word.split("").map((char, index) => (
                            <span key={index} className='character'>{char}</span>
                        ))}
                        <span className="space"> </span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Terminal