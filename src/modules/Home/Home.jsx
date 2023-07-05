import React, { useEffect } from "react";
import { About } from "./_components/About/About";
import { Main } from "./_components/Main";
import { Portfolio } from "./_components/Portfolio";
import { Services } from "./_components/Services";
import TestAbout from "./_components/TestAbout/TestAbout";

const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.screen.width > 500) {
        document.getElementById("mouseToggle").style.opacity = "1";
        document.getElementById("header").style.top = "-100px";
      }
    }
  });
  return (
    <div className="overflow-hidden">
      <Main />
      <TestAbout />
      <About />
      <Portfolio />
      <Services />
    </div>
  );
};

export default Home;
