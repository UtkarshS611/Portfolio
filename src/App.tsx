import Home from "./Components/Home/Home";
import ProjectSection  from "./Components/Projects/ProjectSection";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "./Contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <main className="bg-white dark:bg-[#000814]">
        <Home />
        <ProjectSection />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
