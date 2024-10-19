import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
    return (
        <div className="text-white py-4 mt-6 z-[900] absolute left-[50%] translate-x-[-50%] w-[80%] flex  items-center justify-between">
            <div className="w-full">
                Logo
            </div>
            <div className="w-full hidden md:flex justify-center items-center gap-4 bg-[#ffffff16] backdrop-blur-[200px] py-1 rounded-full border-[0.8px] border-[#ffffff4c]">
                <a href="" className="hover:bg-[#00000096] duration-200 hover:backdrop-blur-[200px] px-4 py-2 rounded-full">About</a>
                <a href="" className="hover:bg-[#00000096] duration-200 hover:backdrop-blur-[200px] px-4 py-2 rounded-full">Work</a>
                <a href="" className="hover:bg-[#00000096] duration-200 hover:backdrop-blur-[200px] px-4 py-2 rounded-full">Skills</a>
            </div>
            <div className="flex gap-4 w-full justify-end">
                <a href="https://www.linkedin.com/in/utkarsh-singh-5630b42aa/" className="hidden md:flex cursor-pointer gap-2 font-light justify-center items-center">
                    Linkedin
                    <IoIosArrowRoundForward className="rotate-[-45deg] text-2xl" />
                </a>
                <button className="flex gap-2 font-light justify-center items-center">
                    Resume
                    <IoIosArrowRoundForward className="rotate-[-45deg] text-2xl"/>
                </button>
            </div>
        </div>
    )
}

export default Header
