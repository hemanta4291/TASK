import React from "react";
import Herobg from "../assets/images/hero.jpg";

const Hero = ({
  bgImg = Herobg,
  title = "Your Hero Banner Title",
  subDec = "Add Your Content",
}) => {
  return (
    <section
      className="relative flex items-center justify-center h-[350px] md:h-[600px] bg-cover bg-center text-center after:content-[''] after:w-full after:h-full after:bg-bgRGB after:left-0 after:top-0 after:absolute"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}>
      <div className="container">
        <div className="text-white relative z-[1] ">
          <h1 className="text-3xl md:text-5xl leading-normal pb-6">{title}</h1>
          <p className="text-xl md:text-2xl leading-8 md:px-20 max-[1200px] mx-auto">
            {subDec}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
