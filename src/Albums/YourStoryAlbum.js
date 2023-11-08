import React from "react";
import "./Albums.css";
import lovestory from "./ImgAlbum/lovestory1.webp";
import { Link } from "react-router-dom";

function YourStoryAlbum() {
  return (
    <div className="gen-album">
      <p className="album">Your story</p>
      <Link to="/lovestorypage">
        <img src={lovestory} className="love-story" alt="love-story" />
      </Link>
    </div>
  );
}

export default YourStoryAlbum;
