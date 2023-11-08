import React from "react";
import "./Load.css";
import load from "./ImgLoad/cover.png";

function Load() {
  const style = {
    width: "100%",
    height: "50%",
  };
  return (
    <div className="image-slider-load">
      <div>
        <h2 className="logo-load">_photographer_</h2>
        <p className="descr-log-load">Your photographer</p>
      </div>
      <img src={load} style={style} alt="load" className="load" />
    </div>
  );
}

export default Load;
