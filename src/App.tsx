import { SparklesCore } from "./components/ui/sparkles"
import { FaArrowRight } from "react-icons/fa6";
import { BsFiles } from "react-icons/bs";
import Header from "./components/Header/Header";

const App = () => {

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen relative">
        <div className="bg-[#000814] h-screen w-full overflow-hidden absolute">
          <SparklesCore className=" w-full h-[200vh] z-[1] translate-y-[-50%] absolute"  particleColor="#fff" particleSize={1} speed={1} particleDensity={20} maxSize={0.2} background="transparent"
          />
          <div className="h-[1460vh] z-20 w-[100vh] absolute left-[50%] translate-x-[-50%] top-[100%] blur-[200px] opacity-100 bg-white rounded-full aspect-square flex justify-center items-center">
          </div>
            <div className="h-[510vh] w-[500vh] absolute left-[50%] translate-x-[-50%] top-[80%] z-[20] bg-white rounded-full aspect-[1/1] flex justify-center items-center">
              <div className="h-[510vh] w-[511vh] cursor-pointer absolute top-[0.05%] bg-[#000814] rounded-full aspect-[1/1] blur-[1.5px]">
              </div>
            </div>
          <div className="blob1 z-[19]"></div>
          <div className="blob2 z-[19]"></div>
        </div>
        <div className="text-xl  text-white w-full flex flex-col justify-center font-light items-center z-[99]">
          <div className="tracking-tight sm:text-xl text-[1rem]">
            Hello👋  I'm Utkarsh, a Web developer
          </div>
          <div className="flex flex-col justify-center items-center mt-4 text-3xl sm:text-5xl gap-1 font-semi-bold">
            <div>
              I help founders transform 
            </div>
            <div className="flex md:items-end items-center gap-4 flex-col md:flex-row">
              ideas into impactful <span className="font-Accent text-2xl">websites</span>
            </div>
          </div>
          <div className="flex gap-8 md:gap-14 mt-10 flex-col md:flex-row">
            <button className="flex justify-center items-center bg-[#ffffff39] pr-1 pl-6 py-1 backdrop-blur-3xl rounded-full gap-2 border-[0.5px] hover:bg-white duration-200 hover:text-black border-[#ffffff13]">
                Let's connect
              <span className="bg-white font-light text-black rounded-full flex items-center justify-center p-[0.75rem]">
                <FaArrowRight />
              </span>
            </button>
            <button className="flex justify-center items-center gap-2">
              <span>
              <BsFiles />
              </span>
              <span>
                Copy email
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
