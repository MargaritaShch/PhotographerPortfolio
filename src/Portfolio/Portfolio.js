import React, { forwardRef, useRef } from "react";
import './Portfolio.css'
import WeddingAlbum from "../Albums/WeddingAlbum";
import YourStoryAlbum from "../Albums/YourStoryAlbum";
import PortraitAlbum from "../Albums/PortraitAlbum";
import CommerceAlbum from "../Albums/CommerceAlbum";
import Cover from "../Cover/Cover";
import Description from "../Desription/Description";
import AboutMe from "../AboutMe/AboutMe";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Portfolio = forwardRef((props, ref) => {
   const portfolioRef = useRef(null);
   const scrollToPortfolio = () => {
     if (portfolioRef.current) {
       portfolioRef.current.scrollIntoView({ behavior: "smooth" });
     }
   };

   const contactRef = useRef(null);
   const scrollToContact = () => {
     if (contactRef.current) {
       contactRef.current.scrollIntoView({ behavior: "smooth" });
     }
   };

  const aboutMeRef = useRef(null);
  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
    return (
      <>
      
        <Menu
          scrollToAboutMe={scrollToAboutMe}
          scrollToContact={scrollToContact}
          scrollToPortfolio={scrollToPortfolio}
        />
        <Cover />
        <Description />
        <AboutMe ref={aboutMeRef} />
        <div className="gen-alb" ref={portfolioRef}>
          <p className="title-port">Portfolio</p>
          <div className="portfolio">
            <WeddingAlbum />
            <YourStoryAlbum />
            <PortraitAlbum />
            <CommerceAlbum />
          </div>
          <Contact ref={contactRef} />
         
        </div>
      </>
    );
})

export default Portfolio;