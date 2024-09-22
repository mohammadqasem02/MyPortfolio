import "remixicon/fonts/remixicon.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Certificates } from "./components/Certificates/Certificates";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
