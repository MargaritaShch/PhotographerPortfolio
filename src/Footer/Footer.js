import React from "react";
import './Footer.css'
import facebook from './ImgFooter/facebook.webp'
import instagram from "./ImgFooter/instagram.webp";

function Footer(){
    return (
      <div className="footer">
        <div>
          <a href="mailto:yoursphotographer@gmail.com" className="link">
            yoursphotographer@gmail.com
          </a>

          <p>
            <a href="tel:+9950000000" className="link">
              +995 000 00 00
            </a>{" "}
            <br />
            (WhatsApp, Telegram)
          </p>
        </div>

        <div className="media">
          <p>Follow me</p>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="instagram" className="icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="facebook" className="icon" />
          </a>
        </div>
      </div>
    );
}

export default Footer;