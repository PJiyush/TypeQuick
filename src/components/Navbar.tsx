import { ThemeContextType } from "@/interface/ThemeInterface";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
function Navbar({isDarkMode, switchMode}:ThemeContextType) {
    return (
        <div className="w-full h-20">
            <div className="flex w-full h-20">
                <div className="ml-28 mt-4 ">
                    <p className="text-yellow-400 text-5xl">Type<span className=" font-bold">Q</span>uic<span className=" font-bold">k</span>...</p>
                </div>
                <div className=" text-5xl mt-4 ml-[940px] text-yellow-400 cursor-pointer " onClick={switchMode}>
                    {isDarkMode?<IoMoonOutline/>:<MdOutlineWbSunny />}
                </div>
            </div>
        </div>
    )
}

export default Navbar