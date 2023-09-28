import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NaveBar from "./Components/NaveBar";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Work from "./Components/Work"



function App() {
  return (
    <div className="text-blue-500 bg-[#08192f] flex flex-col gap-5">
      <NaveBar />
      <Home />
      <About />
      <Skills />
      <Services/>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
