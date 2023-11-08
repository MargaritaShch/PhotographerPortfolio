import React from "react";
import "./Albums.css";
import portrait from "./ImgAlbum/portrait.webp";
import { Link } from "react-router-dom";

function PortraitAlbum() {
  return (
    <div className="gen-album">
      <p className="album">Portrait</p>
      <Link to="/portrait">
        <img src={portrait} className="portrait" alt="portrait" />
      </Link>
    </div>
  );
}

export default PortraitAlbum;
