import { ThemeContextType } from "@/interface/ThemeInterface";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { FaCode } from "react-icons/fa";
function Navbar({isDarkMode, switchMode}:ThemeContextType) {
    return (
        <div className="w-screen h-20">
            <div className="flex justify-between items-center h-20 lg:px-40 px-10 md:px-12 ">
                <div className="mt-4 flex justify-center items-center lg:items-end lg:gap-5 gap-3 ">
                    <p className={` ${!isDarkMode?"text-lightThemeSecondary":" text-nightThemeSecondary"} text-3xl lg:text-5xl`}>Type<span className=" font-bold ">Q</span><span className="underline underline-offset-2">uic</span><span className=" font-bold underline">k</span>...</p>
                    <div className="flex gap-2 mx-2 ">
                        <ImStatsDots className={`text-lg lg:text-2xl ${!isDarkMode?"text-[#0b1017]":"text-nightThemeSecondary"} cursor-pointer opacity-50 hover:opacity-100`} onClick={()=>{
                            window.scrollTo({
                                top: 800,
                                behavior: 'smooth'
                            })
                        }}/>
                        <FaCode className={`text-lg lg:text-2xl ${!isDarkMode?"text-nightThemePrimary":"text-nightThemeSecondary"} cursor-pointer opacity-50 hover:opacity-100`} onClick={()=>{
                            window.location.href=''
                        }}/>
                    </div>
                </div>
                <div className={` text-5xl mt-8 mr-2  ${!isDarkMode?"text-nightThemePrimary":"text-nightThemeSecondary"} cursor-pointer opacity-70 hover:opacity-100 `} onClick={switchMode}>
                    {isDarkMode?<IoMoonOutline/>:<MdOutlineWbSunny />}
                </div>
            </div>
        </div>
    )
}

export default Navbar