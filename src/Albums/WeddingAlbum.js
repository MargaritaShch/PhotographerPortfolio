import React from "react";
import "./Albums.css";
import wed from "./ImgAlbum/wed.webp";
import { Link } from "react-router-dom";


function WeddingAlbum(){
    return (
      <div className="gen-album">
        <p className="album">Wedding</p>
        <Link to ="/wedpage">
          <img src={wed} className="wedding" alt="Wedding" />
        </Link>
      </div>
    );
}

export default WeddingAlbum;