import Navbar from './Navbar'
import { useTheme } from '@/context/ThemeContext'
import Terminal from './Terminal';
function Home() {
    const {isDarkMode, switchMode} = useTheme() || {};
    return (
        <div className={`h-screen w-full bg-gradient-to-r ${isDarkMode?'from-[#b072c8] to-[#343b9d]':`from-[#110117] to-[#383838]`}`}>
            <Navbar isDarkMode={isDarkMode} switchMode={switchMode}/>
            <Terminal/>
        </div>
    )
}

export default Home