import React from "react"

export const Footer: React.FC = () => {
    return (
        <div className="dark:text-white text-black text-[0.9rem] flex flex-col md:flex-row justify-center items-center md:justify-between w-[80%] mx-auto border-t-[1px] border-black/50 dark:border-[#ffffff49] md:px-10 py-6 mt-10">
            <div>
                ©️ 2024, Utkarsh Singh
            </div>
            <div>
                Made with love💜 and coffee ☕ of course
            </div>
        </div>
    )
};
