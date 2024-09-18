import React from "react";
import "../home/Home.css";
import logo1 from "../../assets/logo 2.png";
const Home = () => {
  return (
    <div className="home-container">
      <div className="images">
        <img src={logo1} />
      </div>
      <div className="h1-name">
        <h1>Aris’ Designs and Arts</h1>
      </div>
      <div className="p-container">
        <div className="p">
          <p>
            Welcome to my creative haven, where imagination meets artistry.
            Explore a diverse portfolio that blends graphic design and
            expressive beauty of painting. Each piece is a reflection of my
            passion for visual storytelling, crafted to inspire and evoke
            emotion. Whether you’re here to browse. connect, or collaborate, I
            invite you to immerse yourself in a world of color, creativity, and
            innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
