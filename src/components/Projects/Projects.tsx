import ProjectShowCase from "../ProjectShowCase/ProjectShowCase"

const Projects = () => {
    return (
        <div className="mt-[5rem] md:mt-[8rem]">
            <div className="uppercase text-sm opacity-80 text-center">
                Featured work
            </div>
            <div className="flex gap-4 font-semibold items-end justify-center md:mt-[1.5rem] mt-[1rem]">
                <span className="text-4xl">Curated</span>
                <span className="text-xl font-Accent"> 
                    Work
                </span>
            </div>
            <ProjectShowCase/>
        </div>
    )
}

export default Projects
