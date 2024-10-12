import { BsStars } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

import { Data } from './ProjectData';

const ProjectShowCase = () => {
    return (
        <section className="md:mt-20 mt-10 flex flex-col gap-10 md:gap-28">
                <div className="flex flex-col lg:flex-row gap-4 w-full 2xl:w-[80%] mx-auto mt-[2rem] items-center lg:items-start">
                    <div className="w-full px-8">
                        <div className="border-[1px] p-2 h-[40vh] md:h-[55vh] w-full 2xl:w-[45vw] rounded-3xl ">
                            <div className={`border-[1px] h-full rounded-2xl bg-gradient-to-b from-[#94d2bd] to-[#0a9396] relative overflow-hidden`}>
                                <div className="flex items-center justify-between px-20 pt-8 font-bold text-black">
                                    <div>
                                        <h2 className="text-xl hidden md:block">
                                            {Data.Project1.ImageTitle}
                                        </h2>
                                        <p className="flex items-start md:items-center gap-1 text-sm font-semibold opacity-70 md:flex-row flex-col">
                                            <span>{Data.Project1.Prop1}</span>
                                            <BsDot className="hidden md:block" />
                                            <span>{Data.Project1.Prop2}</span>
                                            <BsDot className="hidden md:block"/>
                                            <span>{Data.Project1.Prop3}</span>
                                        </p>
                                    </div>
                                    <div className="hidden md:block">
                                        <FaArrowRight />
                                    </div>
                                </div>
                                <div className="absolute mx-auto w-[80%] flex justify-center left-[50%] md:hover:scale-[1.08] md:hover:rotate-[-5deg] duration-200 translate-x-[-50%] md:bottom-[-5%] bottom-0 shadow-xl">
                                    <img className="rounded-xl" src={Data.Project1.ImgSRC} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-4 mt-2">
                            <span>
                                {Data.Project1.Timeline}
                            </span>
                            <span>
                                <div className={`h-[2px] w-[40px] bg-[#0a9396]`}></div>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-4 md:px-0 px-8">
                        <h2 className="text-3xl">{Data.Project1.Title}</h2>
                        <p className="opacity-80 lg:text-start text-center">
                            {Data.Project1.description}
                        </p>
                        <div className="flex flex-col gap-2">
                            <span className="flex gap-4 items-center">
                                <BsStars className={`text-[#0a9396] text-xl`}/>
                                <p>{Data.Project1.point1}</p>
                            </span>
                            <span className="flex gap-4 items-center">
                                <BsStars className={`text-[#0a9396] text-xl`}/>
                                <p>{Data.Project1.point2}</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 w-full 2xl:w-[80%] mx-auto mt-[2rem] items-center lg:items-start">
                    <div className="w-full px-8">
                        <div className="border-[1px] p-2 h-[40vh] md:h-[55vh] w-full 2xl:w-[45vw] rounded-3xl ">
                            <div className={`border-[1px] h-full rounded-2xl bg-gradient-to-b from-[#fcefb4] to-[#ec9f05] relative overflow-hidden`}>
                                <div className="flex items-center justify-between px-20 pt-8 font-bold text-black">
                                    <div>
                                        <h2 className="text-xl hidden lg:block">
                                            {Data.Project2.ImageTitle}
                                        </h2>
                                        <p className="flex items-start md:items-center gap-1 text-sm font-semibold opacity-70 md:flex-row flex-col">
                                            <span>{Data.Project2.Prop1}</span>
                                            <BsDot className="hidden md:block" />
                                            <span>{Data.Project2.Prop2}</span>
                                            <BsDot className="hidden md:block"/>
                                            <span>{Data.Project2.Prop3}</span>
                                        </p>
                                    </div>
                                    <div className="hidden md:block">
                                        <FaArrowRight />
                                    </div>
                                </div>
                                <div className="absolute mx-auto w-[80%] flex justify-center left-[50%] md:hover:scale-[1.08] md:hover:rotate-[-5deg] duration-200 translate-x-[-50%] md:bottom-[-5%] bottom-0 shadow-xl">
                                    <img className="rounded-xl" src={Data.Project2.ImgSRC} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-4 mt-2">
                            <span>
                                {Data.Project2.Timeline}
                            </span>
                            <span>
                                <div className={`h-[2px] w-[40px] bg-[#ec9f05]`}></div>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-4 md:px-0 px-8">
                        <h2 className="text-3xl">{Data.Project2.Title}</h2>
                        <p className="opacity-80 lg:text-start text-center">
                            {Data.Project2.description}
                        </p>
                        <div className="flex flex-col gap-2">
                            <span className="flex gap-4 items-center">
                                <BsStars className={`text-[#ec9f05] text-xl`}/>
                                <p>{Data.Project2.point1}</p>
                            </span>
                            <span className="flex gap-4 items-center">
                                <BsStars className={`text-[#ec9f05] text-xl`}/>
                                <p>{Data.Project2.point2}</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 w-full 2xl:w-[80%] mx-auto mt-[2rem] items-center lg:items-start">
                    <div className="w-full px-8">
                        <div className="border-[1px] p-2 h-[40vh] md:h-[55vh] w-full 2xl:w-[45vw] rounded-3xl ">
                            <div className={`border-[1px] h-full rounded-2xl bg-gradient-to-b from-[#c19ee0] to-[#7251b5] relative overflow-hidden`}>
                                <div className="flex items-center justify-between px-20 pt-8 font-bold text-black">
                                    <div>
                                        <h2 className="text-xl hidden lg:block">
                                            {Data.Project3.ImageTitle}
                                        </h2>
                                        <p className="flex items-start md:items-center gap-1 text-sm font-semibold opacity-70 md:flex-row flex-col">
                                            <span>{Data.Project3.Prop1}</span>
                                            <BsDot className="hidden md:block" />
                                            <span>{Data.Project3.Prop2}</span>
                                            <BsDot className="hidden md:block"/>
                                            <span>{Data.Project3.Prop3}</span>
                                        </p>
                                    </div>
                                    <div className="hidden md:block">
                                        <FaArrowRight />
                                    </div>
                                </div>
                                <div className="absolute mx-auto w-[80%] flex justify-center left-[50%] md:hover:scale-[1.08] md:hover:rotate-[-5deg] duration-200 translate-x-[-50%] md:bottom-[-5%] bottom-0 shadow-xl">
                                    <img className="rounded-xl" src={Data.Project3.ImgSRC} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-4 mt-2">
                            <span>
                                {Data.Project3.Timeline}
                            </span>
                            <span>
                                <div className={`h-[2px] w-[40px] bg-[#7251b5]`}></div>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-4 md:px-0 px-8">
                        <h2 className="text-3xl">{Data.Project3.Title}</h2>
                        <p className="opacity-80 lg:text-start text-center">
                            {Data.Project3.description}
                        </p>
                        <div className="flex flex-col gap-2">
                            <span className="flex gap-4 items-center">
                                <BsStars className={`text-[#7251b5] text-xl`}/>
                                <p>{Data.Project3.point1}</p>
                            </span>
                            <span className="flex gap-4 items-center">
                                <BsStars className={`text-[#7251b5] text-xl`}/>
                                <p>{Data.Project3.point2}</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default ProjectShowCase
