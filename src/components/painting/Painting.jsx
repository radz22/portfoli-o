import React from "react";
import painting1 from "../../assets/Painting1 1.png";
import painting2 from "../../assets/Painting2 1.png";
import painting3 from "../../assets/Painting3 1.png";
import painting4 from "../../assets/Painting4 1.png";
import painting5 from "../../assets/Painting5.png";
import painting6 from "../../assets/Painting6.png";
import painting7 from "../../assets/Painting7.png";
import painting8 from "../../assets/Painting8.png";
import "../painting/Painting.css";
const Painting = () => {
  return (
    <div className="painting">
      <div className="painting-container-1">
        <div>
          <h1>Paintings</h1>
        </div>
        <div className="painting-container-1-p">
          <p>
            Immerse yourself in a world of color and emotion with my collection
            of paintings. From vivid abstracts to evocative landscapes, my work
            explores bold expressionism, serene natural scenes, intricate
            details. Each piece is a journey into the interplay of light and
            shadow, the essence of fleeting moments.
          </p>
          <p className="second-p">
            Explore my portfolio to experience the depth and diversity of my
            artistic vision and discover how each painting tells its own unique
            story.
          </p>
        </div>
      </div>

      <div className="painting-container-2">
        <div className="painting-container-2-content">
          <div>
            <img src={painting1} />
          </div>

          <div>
            <img src={painting2} />
          </div>

          <div>
            <img src={painting3} />
          </div>

          <div>
            <img src={painting4} />
          </div>

          <div>
            <img src={painting5} />
          </div>

          <div>
            <img src={painting6} />
          </div>

          <div>
            <img src={painting7} />
          </div>

          <div>
            <img src={painting8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Painting;
