import React,  {forwardRef} from "react";
import author from './ImgAboutMe/author.webp';
import "./AboutMe.css";


const AboutMe = forwardRef((props, ref) => {
 
  return (
    <div className="about-me" ref={ref}>
      <div>
        <img src={author} className="author" alt="author" />
      </div>

      <div className="descr-aut">
        <p className="start">About me</p>
        <p className="text1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non
          urna vel justo bibendum cursus sed vel velit. Duis dictum id metus nec
          laoreet. Sed consequat justo et eros fermentum, nec volutpat justo
          interdum. Nunc ut est in tortor venenatis scelerisque. Vivamus in
          augue vitae leo interdum tempus vel ut arcu. Nulla facilisi. Cras
          malesuada tellus a ligula facilisis, at varius enim fermentum. Donec
          consectetur arcu nec magna tincidunt, in dictum urna cursus. Nunc
          imperdiet libero eu lectus dictum, eu bibendum dui gravida. Maecenas
          ut ultrices sapien. Ut nec convallis nisi. Vivamus ac metus sed nisl
          vulputate blandit. In ac urna nec lectus congue fringilla. Curabitur
          at libero sit amet quam volutpat hendrerit vitae ac odio
        </p>
        <p className="caption">Yours photographer</p>
      </div>
    </div>
  );
})

export default AboutMe;
