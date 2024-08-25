import Navbar from './Navbar'
import { useTheme } from '@/context/ThemeContext'
import Terminal from './Terminal';
import { ProgressChart } from './ProgressChart';
function Home() {
    const {isDarkMode, switchMode} = useTheme() || {};
    return (
        <div className='overflow-x-clip'>
            <div className={`h-screen w-screen bg-gradient-to-r ${isDarkMode?' bg-nightThemePrimary':` bg-lightThemePrimary`}`}>
                <Navbar isDarkMode={isDarkMode} switchMode={switchMode}/>
                <Terminal/>
            </div>
            <div className={`lg:h-screen h-2/3 flex flex-col ${!isDarkMode?' bg-lightThemePrimary':`bg-nightThemePrimary`}`}>
                <div className="flex-1 p-4">
                    <div className=' flex  justify-center'>
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