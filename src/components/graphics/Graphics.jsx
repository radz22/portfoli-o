import React from "react";
import portfolio1 from "../../assets/Portfolio2_0006_pg15 1.png";
import portfolio2 from "../../assets/Portfolio2_0007_pg14 1.png";
import portfolio3 from "../../assets/Portfolio2_0008_pg13 1.png";
import portfolio4 from "../../assets/PortfolioMerge_0002_pg10 1.png";
import portfolio5 from "../../assets/PortfolioMerge_0003_pg9 1.png";
import portfolio6 from "../../assets/PortfolioMerge_0004_pg8 1.png";
import portfolio7 from "../../assets/PortfolioMerge_0005_pg7 1.png";
import portfolio8 from "../../assets/PortfolioMerge_0006_pg6 1.png";
import portfolio9 from "../../assets/PortfolioMerge_0007_pg5 1.png";
import portfolio10 from "../../assets/PortfolioMerge_0008_pg 4 1.png";

import "../graphics/Graphics.css";
const Graphics = () => {
  return (
    <div className="graphics">
      <div className="graphics-container-1">
        <div>
          <h1>Graphic Design</h1>
        </div>
        <div className="graphics-container-1-p">
          <p>
            Dive into a diverse array of graphic design projects, from striking
            branding and engaging web design to impactful print media. My work
            is defined by bold visuals, and a strategic approachthat ensures
            each design not only stands out but also communicates effectively.
          </p>
          <p className="second-p">
            I’m passionate about creating designs that resonate with audiences
            and elevate brands. Browse through my portfolio to see how my
            creative solutions can bring your vision to life with both flair and
            precision.
          </p>
        </div>
      </div>

      <div className="graphics-container-2">
        <div className="graphics-container-2-content">
          <div>
            <img src={portfolio10} />
          </div>

          <div>
            <img src={portfolio9} />
          </div>

          <div>
            <img src={portfolio8} />
          </div>

          <div>
            <img src={portfolio7} />
          </div>

          <div>
            <img src={portfolio6} />
          </div>

          <div>
            <img src={portfolio5} />
          </div>

          <div>
            <img src={portfolio4} />
          </div>

          <div>
            <img src={portfolio3} />
          </div>

          <div>
            <img src={portfolio2} />
          </div>

          <div>
            <img src={portfolio1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphics;
