import React from "react";
import "../footer/Footer.css";
import abwhite from "../../assets/ablogowhite 1.png";
import logo2 from "../../assets/logo 2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="abwhite-images">
          <img src={abwhite} className="images" />
        </div>

        <div className="social-contact">
          <div className="contact">
            <div>
              <h1>Contact</h1>
              <div className="border"></div>
            </div>
            <div className="contact-p">
              <p>Phone no.: +12 1236 4789</p>
              <p>Email: aris@gmail.com</p>
            </div>
          </div>
          <div className="social">
            <div className="social-content">
              <h1>Socials</h1>
              <div className="border"></div>
            </div>
            <div>
              <div className="icons">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="icon"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="icon"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <div>
            <h1>Contact</h1>
            <div className="border"></div>
          </div>
          <div className="contact-p">
            <p>Phone no.: +12 1236 4789</p>
            <p>Email: aris@gmail.com</p>
          </div>
        </div>
        <div className="social">
          <div className="social-content">
            <h1>Socials</h1>
            <div className="border"></div>
          </div>
          <div>
            <div className="icons">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="icon"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="icon"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={logo2} className="logo2" />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright @ 2023 Aris Biadora. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
