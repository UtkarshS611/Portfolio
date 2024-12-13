import { SparklesCore } from "../ui/sparkles";
import { FaArrowRight } from "react-icons/fa6";
import { BsFiles } from "react-icons/bs";
import { useState } from "react";
import Header from "../Header/Header";

const Home = () => {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Copied to Clipboard");

      setTimeout(() => {
        setCopySuccess("");
      }, 2000);
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };
  return (
    <section>
      <Header />
      <div className="flex justify-center items-center h-screen relative">
        <div className="bg-white dark:bg-[#000814] h-screen w-full overflow-hidden absolute">
          <SparklesCore
            className=" w-full h-[200vh] z-[1] translate-y-[-50%] absolute"
            particleColor="#fff"
            particleSize={1}
            speed={1}
            particleDensity={20}
            maxSize={0.2}
            background="transparent"
          />
          <div className="h-[1460vh] z-19 w-[100vh] absolute left-[50%] translate-x-[-50%] top-[100%] blur-[200px] opacity-100 bg-purple-400 dark:bg-white rounded-full aspect-square flex justify-center items-center"></div>
          <div className="h-[510vh] w-[500vh] absolute left-[50%] translate-x-[-50%] top-[80%] z-[20] bg-purple-300 dark:bg-white rounded-full aspect-[1/1] flex justify-center items-center">
            <div className="h-[510vh] w-[511vh] cursor-pointer absolute top-[0.035%] bg-white dark:bg-[#000814] rounded-full aspect-[1/1] blur-[1.5px]"></div>
          </div>
          <div className="blob1 z-[19]"></div>
          <div className="blob2 z-[19]"></div>
        </div>
        <div className="text-xl text-black dark:text-white w-full flex flex-col justify-center font-light items-center z-[99]">
          <div className="tracking-tight sm:text-xl text-[1rem] animate">
            Hello👋 I'm Utkarsh, a Web developer
          </div>
          <div className="animate flex flex-col justify-center items-center mt-4 text-3xl sm:text-5xl gap-1 font-semi-bold">
            <div>I help founders transform</div>
            <div className="flex md:items-end items-center gap-4 flex-col md:flex-row">
              ideas into impactful{" "}
              <span className="font-Accent text-2xl">websites</span>
            </div>
          </div>
          <div className="flex animate_2 gap-8 md:gap-14 mt-10 flex-col md:flex-row">
            <button className="flex justify-center items-center bg-purple-100 dark:bg-[#ffffff39] pr-1 pl-6 py-1 backdrop-blur-3xl rounded-full gap-2 border-[0.5px] hover:bg-purple-200 dark:hover:bg-white duration-200 hover:text-black border-[#ffffff13]">
              Let's connect
              <span className="dark:bg-white bg-purple-200 font-light text-black rounded-full flex items-center justify-center p-[0.75rem]">
                <FaArrowRight />
              </span>
            </button>
            <button
              className="flex justify-center items-center gap-2"
              onClick={() => copyToClipboard("utkarsh.singh6113@gmail.com")}
            >
              <span>
                <BsFiles />
              </span>
              <div>
                <span>{copySuccess ? copySuccess : "Copy email"}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center lg:flex-row w-full lg:w-[70vw] gap-16 lg:gap-32 mx-auto mt-16 pt-16 dark:text-white text-black">
        <div className="w-full flex flex-col items-center justify-center gap-4 lg:gap-8">
          <h1 className="font-semibold  w-full text-center lg:text-start  text-3xl lg:text-4xl">
            My journey so far...
          </h1>
          <p className="text-[16px] lg:text-[18px] text-black/60 dark:text-white/80 text-center lg:text-start">
            Seasoned with a year of experience as a product and a marketing
            developer, I've worked on projects with various nature be it
            e-commerce, Finance, Healthcare, Manufacturing and more.
            <br />
            <br />
            Be it SaaS, PaaS, websites or apps, my learn-it-all attitude and
            entrepreneurial mindset drives me to create digital experiences that
            resonate with users and drive success.
          </p>
        </div>
        <div className="w-full flex justify-center relative h-[35vh]">
          <div className="h-[30vh] w-[25vh] bg-gray-100 dark:bg-[white] p-[0.75rem] absolute top-0 left-[70%] translate-x-[-50%] rotate-[-8deg] hover:rotate-0 duration-200 hover:scale-[1.04] hover:shadow-2xl hover:z-[1] rounded-lg flex flex-col gap-2">
            <img src="/Images/Profile1.jpeg" className="h-[22vh] w-[22vh]" />
            <div className="flex justify-center items-end font-bold mt-4 font-Accent text-[#000000c4]">
              hello it's me
            </div>
          </div>
          <div className="h-[30vh] w-[25vh] bg-gray-100 dark:bg-[white] p-[0.75rem] absolute top-0 left-[30%] translate-x-[-50%] rotate-[8deg] hover:rotate-0 duration-200 hover:scale-[1.04] hover:shadow-2xl hover:z-[1] rounded-lg flex flex-col gap-2">
            <img
              src="https://images.unsplash.com/photo-1727773377765-04d5bd488f44?q=80&w=2525&auto=format&fit=crop&
                        ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[22vh] w-[22vh]"
            />
            <div className="flex justify-center items-end font-bold mt-4 font-Accent text-[#000000c4]">
              That's me again..
            </div>
          </div>
          <div className="h-[30vh] w-[25vh] bg-gray-100 dark:bg-[white] p-[0.75rem] absolute top-[10%] duration-200 hover:scale-[1.04] hover:z-[1] rounded-lg flex flex-col gap-2 hover:shadow-2xl">
            <img src="/Images/Profile2.jpeg" className="h-[22vh] w-[22vh]" />
            <div className="flex justify-center items-end font-bold mt-4 font-Accent text-[#000000c4]">
              That's me
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;