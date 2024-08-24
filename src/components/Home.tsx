import Navbar from './Navbar'
import { useTheme } from '@/context/ThemeContext'
import Terminal from './Terminal';
import { ProgressChart } from './ProgressChart';
function Home() {
    const {isDarkMode, switchMode} = useTheme() || {};
    return (
        <div>
            <div className={`h-screen w-full bg-gradient-to-r ${isDarkMode?'from-[#b072c8] to-[#343b9d]':`from-[#110117] to-[#383838]`}`}>
                <Navbar isDarkMode={isDarkMode} switchMode={switchMode}/>
                <Terminal/>
            </div>
            <div className={`h-screen flex flex-col bg-gradient-to-r ${isDarkMode?'from-[#b072c8] to-[#343b9d]':`from-[#110117] to-[#383838]`}`}>
            <div className="flex-1 p-4 bg-slate-500">
                <div className='flex justify-center text-4xl underline text-white'>My Progress</div>
                <div className=''>
                    <ProgressChart/>
                </div>
            </div>

            <footer className="bg-gray-800 text-white text-center p-4">
                <p>The words above, used for typing, are generated randomly with the help of the <a href="https://www.npmjs.com/package/random-words" className=' underline'>random-words</a> library.</p>
            </footer>
            </div>
        </div>
    )
}

export default Home