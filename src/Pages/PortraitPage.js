import React from "react";
import portrait1 from './ImgPage/photo-portrait1.jpg'
import portrait2 from "./ImgPage/photo-portrait2.jpg";
import portrait3 from "./ImgPage/photo-portrait3.jpg";
import portrait4 from "./ImgPage/photo-portrait4.jpg";
import portrait5 from "./ImgPage/photo-portrait5.jpg";
import portrait6 from "./ImgPage/photo-portrait6.jpg";
import "./Page.css";
import MenuForAlbum from "../MenuForAlbum/MenuForAlbum";

function PortraitPage() {
  return (
    <div>
      <div>
        <MenuForAlbum />
      </div>

      <div>
        <div className="slider">
          <div className="part1">
            <div>
              <p className="descr-name">Charlotte</p>
              <img src={portrait1} className="photo" alt="portrait" />
            </div>
            <div>
              <p className="descr-name">Christian</p>
              <img src={portrait2} className="photo" alt="portrait" />
            </div>
            <div>
              <p className="descr-name">Violleta</p>
              <img src={portrait3} className="photo" alt="portrait" />
            </div>
          </div>

          <div className="part2">
            <div>
              <p className="descr-name">Steave</p>
              <img src={portrait4} className="photo" alt="portrait" />
            </div>

            <div>
              <p className="descr-name">Jhonatan</p>
              <img src={portrait5} className="photo" alt="portrait" />
            </div>

            <div>
              <p className="descr-name">Nikcole</p>
              <img src={portrait6} className="photo" alt="portrait" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortraitPage;
