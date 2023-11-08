import React from "react";
import "./Menu.css";



function Menu({ scrollToAboutMe, scrollToContact, scrollToPortfolio }) {
  return (
    <div className="gen-menu">
      <ul className="menu">
        <li className="li" onClick={scrollToPortfolio}>
          Portfolio
        </li>
        <li className="li" onClick={scrollToAboutMe}>
          About me
        </li>
        <li className="li" onClick={scrollToContact}>
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Menu;
