import { IoIosArrowRoundForward } from "react-icons/io";
import { useTheme } from "../../Contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Header = () => {

    const { theme, toggleTheme } = useTheme();

  return (
    <div className="dark:text-white text-black py-4 mt-6 z-[900] absolute left-[50%] translate-x-[-50%] w-[80%] flex  items-center justify-between">
      <div className="w-full">Utkarsh</div>
      <div className="w-full hidden md:flex justify-center items-center gap-2 bg-purple-100/60 border-purple-200 dark:bg-[#ffffff16] backdrop-blur-[200px] py-1 rounded-full border-[0.8px] dark:border-[#ffffff4c] relative">
        <a
          href=""
          className="hover:bg-[#00000096] duration-200 hover:backdrop-blur-[200px] px-4 py-2 rounded-full"
        >
          About
        </a>
        <a
          href=""
          className="hover:bg-[#00000096] duration-200 hover:backdrop-blur-[200px] px-4 py-2 rounded-full"
        >
          Work
        </a>
        <a
          href=""
          className="hover:bg-[#00000096] duration-200 hover:backdrop-blur-[200px] px-4 py-2 rounded-full"
        >
          Skills
        </a>
        <button
          onClick={toggleTheme}
          className="absolute right-2 p-2 rounded-full bg-gray-200 dark:bg-gray-800 
        hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          ) : (
            <Sun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>
      <div className="flex gap-4 w-full justify-end">
      <button
          onClick={toggleTheme}
          className="md:hidden block p-2 rounded-full bg-gray-200 dark:bg-gray-800 
        hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          ) : (
            <Sun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          )}
        </button>
        <a
          href="https://www.linkedin.com/in/utkarsh-singh-5630b42aa/"
          target="_blank"
          className="hidden md:flex cursor-pointer gap-2 font-light justify-center items-center"
        >
          Linkedin
          <IoIosArrowRoundForward className="rotate-[-45deg] text-2xl" />
        </a>
        <a
          href="https://drive.google.com/file/d/1q25HSTjPWP8skAQ9JE5f9RTdrcS7B3ND/view"
          target="_blank"
          className="flex gap-2 font-light justify-center items-center"
        >
          Resume
          <IoIosArrowRoundForward className="rotate-[-45deg] text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Header;
