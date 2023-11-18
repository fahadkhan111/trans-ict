import React from "react";

import Prograss from "./components/skills";
import Testimonials from "./components/testimonials";
import Header from "./components/header";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Blogs from "./components/blogs";
import AboutUs from "./components/aboutUs";
import Pricing from "./components/pricing";
import Services from "./components/services";
import Partners from "./components/partners";
import Features from "./components/features";
import TextSlider from "./components/TextSlider";
import ChooseUs from "./components/choose-us";

function App() {
  return (
    <>
      
      <Header />
      <Hero />
      <ChooseUs />
      <AboutUs />
      <div className="bg-[#EFF2F8]">
        <Partners />
        <Features />
      </div>
      <Services />
      <TextSlider/>
      <Prograss />
      <Testimonials />
      <Pricing />
      <Contact />
      <Blogs />
      <Footer />
    </>
  );
}
export default App;
