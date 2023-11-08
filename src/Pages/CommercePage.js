import React from "react";
import com1 from './ImgPage/photo-com1.jpg';
import com2 from "./ImgPage/photo-com2.jpg";
import com3 from "./ImgPage/photo-com3.jpg";
import com4 from "./ImgPage/photo-com4.jpg";
import com5 from "./ImgPage/photo-com5.jpg";
import com6 from "./ImgPage/photo-com6.jpg";
import "./Page.css";
import MenuForAlbum from "../MenuForAlbum/MenuForAlbum";

function CommercePage() {
  return (
    <div>
      <div>
        <MenuForAlbum />
      </div>

      <div>
        <div className="slider">
          <div className="part1">
            <div>
              <p className="descr-name">Lamp store</p>
              <img src={com1} className="photo" alt="com" />
            </div>
            <div>
              <p className="descr-name">Car</p>
              <img src={com2} className="photo" alt="com" />
            </div>
            <div>
              <p className="descr-name">Cafe "Romange"</p>
              <img src={com3} className="photo" alt="com" />
            </div>
          </div>

          <div className="part2">
            <div>
              <p className="descr-name">Antiques</p>
              <img src={com4} className="photo" alt="com" />
            </div>
            <div>
              <p className="descr-name">Tournament</p>
              <img src={com5} className="photo" alt="com" />
            </div>
            <div>
              <p className="descr-name">Bar "Palm"</p>
              <img src={com6} className="photo" alt="com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommercePage;
