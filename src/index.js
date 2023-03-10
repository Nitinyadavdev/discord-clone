import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./MyComponent";
import Header from "../src/components/header";
import HeroSection from "../src/components/hero";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Footer from "./components/footer";

ReactDOM.render(
  <React.StrictMode>
    {/* <MyComponent /> */}
    <Header />
    <HeroSection />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
