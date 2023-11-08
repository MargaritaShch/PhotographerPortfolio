import React from "react";
import story1 from './ImgPage/photo-story1.jpg'
import story2 from "./ImgPage/photo-story2.jpg";
import story3 from "./ImgPage/photo-story3.jpg";
import story4 from "./ImgPage/photo-story4.jpg";
import story5 from "./ImgPage/photo-story5.jpg";
import story6 from "./ImgPage/photo-story6.jpg";
import "./Page.css";
import MenuForAlbum from "../MenuForAlbum/MenuForAlbum";

function LoveStoryPage() {
  return (
    <div>
      <div>
        <MenuForAlbum />
      </div>

      <div>
        <div className="slider">
          <div className="part1">
            <div>
              <p className="descr-name">Smith's famaly</p>
              <img src={story2} className="photo" alt="story" />
            </div>

            <div>
              <p className="descr-name">Tommy's day</p>
              <img src={story5} className="photo" alt="story" />
            </div>

            <div>
              <p className="descr-name">Sam & Maria</p>
              <img src={story3} className="photo" alt="story" />
            </div>
          </div>

          <div className="part2">
            <div>
              <p className="descr-name">July & Tomas</p>
              <img src={story4} className="photo" alt="story" />
            </div>

            <div>
              <p className="descr-name">Autumn walk</p>
              <img src={story1} className="photo" alt="story" />
            </div>

            <div>
              <p className="descr-name">Tim & Silly</p>
              <img src={story6} className="photo" alt="story" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveStoryPage;
