import { SparklesCore } from "./components/ui/sparkles"
// import { LampDemo } from "./components/ui/lamp"

const App = () => {



  
  return (
    <div className="flex justify-center items-center h-screen bg-red-100 relative">
      <div className="bg-black h-screen w-full overflow-hidden absolute">
        <SparklesCore className=" w-full h-[200vh] z-[1] translate-y-[-50%] absolute"  particleColor="#fff" particleSize={1} speed={1} particleDensity={20} maxSize={0.2} background="transparent"
        />
        <div className="h-[1460vh] z-20 w-[100vh] absolute left-[50%] translate-x-[-50%] top-[100%] blur-[200px] opacity-100 bg-white rounded-full aspect-square flex justify-center items-center">
        </div>
          <div className="h-[510vh] w-[500vh] absolute left-[50%] translate-x-[-50%] top-[80%] z-[20] bg-white rounded-full aspect-[1/1] flex justify-center items-center">
            <div className="h-[510vh] w-[511vh] cursor-pointer absolute top-[0.05%] bg-black rounded-full aspect-[1/1] blur-[1.5px]">
            </div>
          </div>
        <div className="blob1 z-[19]"></div>
        <div className="blob2 z-[19]"></div>
      </div>
        <div className="text-xl cursor-pointer text-white w-full flex justify-center items-center h-[60vh]    z-[10020]">
          hey
        </div>
    </div>
  )
}

export default App
