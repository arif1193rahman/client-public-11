import React from "react";
import { Image } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    //         <div class="hero-image">
    //   <div class="hero-text">
    //     <h1 style={{fontSize:"50px"}}>I am John Doe</h1>
    //     <p>And I'm a Photographer</p>
    //     <button>Hire me</button>
    //   </div>
    // </div>
    <div>
      <div className="hero-image">
        <Image src="https://i.ibb.co/8dmHYQ4/maxresdefault-1.jpg" fluid />
        
      </div>
      <div className="hero-text">
          <h1 style={{ fontSize: "50px" }}>I am John Doe</h1>
          <p>And I'm a Photographer</p>
        </div>
    </div>
  );
};

export default Banner;
