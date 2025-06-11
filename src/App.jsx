import React from "react";
import Header from "@/components/header";
import GridBackground from "@/components/grid-background";
import BackToTop from "@/components/back-to-top";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";
import Contact from "@/sections/contact";

const App = () => {
  return (
    <div className="App flex flex-col items-center">
      <Header />
      <GridBackground />
      <main className="container overflow-x-hidden lg:px-28">
        <Hero />
        <div className="mb-28"></div>
        <Skills />
        <div className="mb-28"></div>
        <Projects />
        <div className="mb-28"></div>
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
};

export default App;
