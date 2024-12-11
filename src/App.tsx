import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ProjectSection from "./Components/Projects/ProjectSection";
import { ThemeProvider } from "./Contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <main className="bg-white dark:bg-[#000814]">
        <Home/>
        <ProjectSection/>
        <Footer/>
      </main>
    </ThemeProvider>
  );
};

export default App;
