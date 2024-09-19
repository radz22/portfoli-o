import React from "react";
import "../about/About.css";
import profile from "../../assets/profile.png";
import dot from "../../assets/Rectangle 25.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="left-content">
            <img src={profile} />
          </div>
          <div className="right-content">
            <div>
              <h1>Aristoteles B Biadora Jr</h1>
            </div>
            <div className="paragraph">
              <p>
                Hello! I’m Aris, a passionate graphic designer and painter
                dedicated to blending creativity with purpose. My work spans the
                worlds of graphic design and fine art, allowing me to explore
                diverse forms of visual expression.
              </p>
            </div>

            <div className="paragraph">
              <p>
                In graphic design, I specialize in branding, web design, and
                print media, crafting compelling visuals that communicate and
                captivate. My approach is rooted in philosophy, clean aesthetics
                and strategic thinking, ensuring that each project not only
                looks stunning but also achieves its intended impact. In the
                realm of painting, I bring to life vibrant abstracts, serene
                landscapes, or intricate details. My artwork reflects a deep
                exploration of personal artistic focus, color, texture, and
                emotion, aiming to evoke thought and inspire.
              </p>
            </div>

            <div className="paragraph">
              <p>
                Whether you’re here to explore my graphic design work or my
                paintings, I invite you to delve into my portfolio and discover
                how my unique blend of skills and creativity can bring your
                vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="right-content">
          <div>
            <h1>Contact Details</h1>
          </div>

          <div className="p-content">
            <div>
              <img src={dot} />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Facilisi consequat ac
                suspendisse accumsan nisl nulla quam.{" "}
              </p>
            </div>
          </div>

          <div className="p-content">
            <div>
              <img src={dot} />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Facilisi consequat ac
                suspendisse accumsan nisl nulla quam.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="left-content">
          <div>
            <h1>Experiences</h1>
          </div>

          <div className="p-content">
            <div>
              <img src={dot} />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Facilisi consequat ac
                suspendisse accumsan nisl nulla quam. Lorem ipsum dolor sit amet
                consectetur. Facilisi consequat ac suspendisse accumsan nisl
                nulla quam.
              </p>
            </div>
          </div>

          <div className="p-content">
            <div>
              <img src={dot} />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Facilisi consequat ac
                suspendisse accumsan nisl nulla quam. Lorem ipsum dolor sit amet
                consectetur. Facilisi consequat ac suspendisse accumsan nisl
                nulla quam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="right-content">
          <div>
            <h1>Education</h1>
          </div>

          <div className="p-content">
            <div>
              <img src={dot} />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Facilisi consequat ac
                suspendisse accumsan nisl nulla quam.{" "}
              </p>
            </div>
          </div>

          <div className="p-content">
            <div>
              <img src={dot} />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Facilisi consequat ac
                suspendisse accumsan nisl nulla quam.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="left-content">
          <div>
            <h1>Hobbies</h1>
          </div>

          <div className="p-content">
            <div>
              <img src={dot} />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Facilisi consequat ac
                suspendisse accumsan nisl nulla quam. Lorem ipsum dolor sit amet
                consectetur. Facilisi consequat ac suspendisse accumsan nisl
                nulla quam.
              </p>
            </div>
          </div>

          <div className="p-content">
            <div>
              <img src={dot} />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Facilisi consequat ac
                suspendisse accumsan nisl nulla quam. Lorem ipsum dolor sit amet
                consectetur. Facilisi consequat ac suspendisse accumsan nisl
                nulla quam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="right-content">
          <div>
            <h1>Skills </h1>
          </div>

          <div className="p-content">
            <div>
              <img src={dot} />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Facilisi consequat ac
                suspendisse accumsan nisl nulla quam.{" "}
              </p>
            </div>
          </div>

          <div className="p-content">
            <div>
              <img src={dot} />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Facilisi consequat ac
                suspendisse accumsan nisl nulla quam.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
