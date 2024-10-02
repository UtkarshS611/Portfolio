import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
    return (
        <div className="text-white py-4 mt-6 z-[40] fixed  w-full flex justify-around  items-center">
            <div className="md:ml-[7rem]">
                Logo
            </div>
            <div className=" hidden md:flex items-center gap-6 bg-[#ffffff16] backdrop-blur-[200px] px-1 py-1 rounded-full border-[0.8px] border-[#ffffff4c]">
                <a href="" className="hover:bg-[#00000096] duration-200 hover:backdrop-blur-[200px] px-4 py-2 rounded-full">About</a>
                <a href="" className="hover:bg-[#00000096] duration-200 hover:backdrop-blur-[200px] px-4 py-2 rounded-full">Work</a>
                <a href="" className="hover:bg-[#00000096] duration-200 hover:backdrop-blur-[200px] px-4 py-2 rounded-full">Skills</a>
            </div>
            <div className="flex gap-4">
                <button className="hidden md:flex gap-2 font-light justify-center items-center">
                    Linkedin
                    <IoIosArrowRoundForward className="rotate-[-45deg] text-2xl" />
                </button>
                <button className="flex gap-2 font-light justify-center items-center">
                    Resume
                    <IoIosArrowRoundForward className="rotate-[-45deg] text-2xl"/>
                </button>
            </div>
        </div>
    )
}

export default Header
