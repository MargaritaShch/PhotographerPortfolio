import React from "react";
import "./Cover.css";
import cover from './ImgCover/cover.webp';

function Cover() {
    const style={
        width:'100%',
        height:'50%'
        
    }
  return (<div className="image-slider">
    <img src={cover} style={style} alt='cover' className="cover"/>
  </div>);
}

export default Cover;
