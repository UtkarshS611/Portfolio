import  Footer  from "./Components/Footer/footer";
import  Home  from "./Components/Home/home";
import  ProjectSection  from "./Components/Projects/projectSection";
import { ThemeProvider } from "./Contexts/ThemeContext";

const App = () => {

  return (
    <ThemeProvider>
      <main className="bg-white dark:bg-[#000814]">
        <Home />
        <ProjectSection />
        <Footer/>
      </main>
    </ThemeProvider>
  );
};

export default App;
