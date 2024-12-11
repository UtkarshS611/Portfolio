// import Home from "../src/Components/Home/Home";
// import ProjectSection  from "../src/Components/Projects/ProjectSection";
// import Footer from "../src/Components/Footer/Footer";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ProjectSection from "./Components/Projects/ProjectSection";
import { ThemeProvider } from "./Contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <main className="bg-white dark:bg-[#000814]">
        {/* <Home /> */}
        <Home/>
        <ProjectSection/>
        <Footer/>
        {/* <ProjectSection /> */}
        {/* <Footer /> */}
      </main>
    </ThemeProvider>
  );
};

export default App;
