import React from "react";
import wed1 from './ImgPage/photo-wed1.jpg';
import wed2 from "./ImgPage/photo-wed2.jpg";
import wed3 from "./ImgPage/photo-wed3.jpg";
import wed4 from "./ImgPage/photo-wed4.jpg";
import wed5 from "./ImgPage/photo-wed5.jpg";
import wed6 from "./ImgPage/photo-wed6.jpg";
import './Page.css'
import MenuForAlbum from "../MenuForAlbum/MenuForAlbum";


function WedPage() {
  return (
    <div>
      <div>
        <MenuForAlbum />
      </div>

      <div>
        <div className="slider">
          <div className="part1">
            <div>
              <p className="descr-name">Sam & Maria</p>
              <img src={wed1} className="photo" alt="wed" />
            </div>
            <div>
              <p className="descr-name">Jack & Sonya</p>
              <img src={wed5} className="photo" alt="wed" />
            </div>
            <div>
              <p className="descr-name">Mark & Miranda</p>
              <img src={wed3} className="photo" alt="wed" />
            </div>
          </div>

          <div className="part2">
            <div>
              <p className="descr-name">Jhon & Carla</p>
              <img src={wed4} className="photo" alt="wed" />
            </div>
            <div>
              <p className="descr-name">Phill & Jasmin</p>
              <img src={wed6} className="photo" alt="wed" />
            </div>
            <div>
              <p className="descr-name">Paul & Kerry</p>
              <img src={wed2} className="photo" alt="wed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WedPage;
