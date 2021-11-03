import React from "react";
import { Image } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="hero-image">
        <Image src="https://i.ibb.co/8dmHYQ4/maxresdefault-1.jpg" fluid />
      </div>
      <div className="hero-text">
        <h1 className="banner-text" style={{ fontSize: "50px" }}>
          I am Arif Rahman
        </h1>
        <p className="banner-second">And I'm a Your Guid</p>
      </div>
    </div>
  );
};

export default Banner;
