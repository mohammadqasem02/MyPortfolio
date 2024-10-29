import "remixicon/fonts/remixicon.css";
import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
/* import { Projects } from "./components/Projects/Projects";
 */ import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Certificates } from "./components/Certificates/Certificates";
const LazyProjects = React.lazy(() => import("./components/Projects/Projects"));
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Certificates />
        <React.Suspense fallback="Loading....">
          <LazyProjects />
        </React.Suspense>

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
