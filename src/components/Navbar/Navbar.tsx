import { useState } from "react"

import {
    Menu,
    X
} from "lucide-react"

interface navbarProps{
    aboutMe: string,
    skills: string,
    projects: string,
    resume: string,
}

const Navbar = ({
    aboutMe,
    skills,
    projects,
    resume,
}: navbarProps) => {

    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);

    const HandleMenuOpen = () => {
        setMenuOpen(!isMenuOpen)
        setIsExpanded((prev) => !prev);
        
    }
    const HandleMenuClose = () => {
        setMenuOpen(!isMenuOpen)
        setIsExpanded((prev) => !prev);
    }
    

    return (
        <nav className={`flex px-8 bg-fuchsia-100 py-3 rounded-2xl tracking-wider  font-semibold justify-between max-w-[60rem] w-full mx-auto transition-all duration-300 backdrop-blur-md bg-opacity-30 ${isExpanded === true && "navOpen"} 
        ${isExpanded === false && "navClose"} `}>
            <div>Utkarsh Singh</div>
            <div className="hidden md:flex justify-end items-center gap-16  w-full max-w-[40vw] ">
                <div>{aboutMe}</div>
                <div>{skills}</div>
                <div>{projects}</div>
                <a>{resume}</a>
                <button>Theme</button>
            </div>
            {isMenuOpen === false && <Menu onClick={HandleMenuOpen} className="md:hidden block"/>}
            {isMenuOpen === true && <X onClick={HandleMenuClose} className="md:hidden block"/>}
        </nav>
    )
}

export default Navbar
