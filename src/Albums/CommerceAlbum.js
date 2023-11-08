import React from "react";
import "./Albums.css";
import commerce from "./ImgAlbum/commerce.webp";
import { Link } from "react-router-dom";

function CommerceAlbum() {
  return (
    <div className="gen-album">
      <p className="album">Commerce</p>
      <Link to="/commerce">
        <img src={commerce} className="commerce" alt="commerce" />
      </Link>
    </div>
  );
}

export default CommerceAlbum;
