import Navbar from './Navbar'
import { useTheme } from '@/context/ThemeContext'
function Home() {
    const {isDarkMode, switchMode} = useTheme() || {};
    return (
        <div className={`h-screen w-full bg-gradient-to-r ${isDarkMode?'from-[#b072c8] to-[#343b9d]':`from-[#110117] to-[#383838]`}`}>
            <Navbar isDarkMode={isDarkMode} switchMode={switchMode}/>
            <div className=' terminal h-3/4 w-5/6 mx-auto my-10 rounded-3xl bg-white/20 shadow-lg shadow-black/10'>
            </div>
        </div>
    )
}

export default Home