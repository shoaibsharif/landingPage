import React from "react";
import backgroundImage from "assets/img/hero-bg.jpg";
import LogoText from "assets/img/logo-1.png";
import LogoText2 from "assets/img/logo-2.png";
const Header = () => {
  return (
    <>
      <div className="go-top">
        <span id="top">
          <i className="fa fa-angle-up"></i>
        </span>
      </div>
      <div
        className="header-top-sec"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="landing-logo-wrap d-flex justify-content-between align-items-center py-20">
                {/* logo left side */}
                <a href="/" className="logo-text">
                  <img src={`${LogoText}`} alt="logo" />
                </a>
                {/* logo right side */}
                <a href="/" className="logo-img">
                  <img src={`${LogoText2}`} alt="logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 mx-auto text-center">
              {/* hero-content */}
              <div className="hero-content">
                <h6>a recruiting agency powered by Artificial Intelligence</h6>
                <h1>
                  WE Match you with <br />
                  ready-to-hire candidates <br />
                  through AI
                </h1>
                <div className="mm-button pb-4">
                  <a
                    href="#"
                    className="btn btn-primary btn-large bg-transparent"
                  >
                    Learn more
                  </a>
                </div>
                <div className="scolltodown-icon">
                  <a href="#" className="down-arrow">
                    <i className="fa fa-angle-down" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
