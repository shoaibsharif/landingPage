import React from "react";

const Footer = () => {
  return (
    <div className="footer-sec section-padding">
      <div className="container">
        <div className="row footer-inner-sec">
          {/* single footer widget */}
          <div className="col-md-6 col-sm-6 col-lg-4">
            <div className="footer-widget">
              <span className="footer-title">GET IN TOUCH</span>
              <div className="address-text">
                <address>
                  info@talentscript.com
                  <br />
                  2226-0028 (+956)
                  <br />
                  Mazaya Tower 2, Floor 26
                  <br />
                  Khalid Ibn Waleed St
                  <br />
                  Kuwait City
                </address>
              </div>
            </div>
          </div>
          {/* single footer widget */}
          <div className="col-md-6 col-sm-6 col-lg-4">
            <div className="footer-widget follow-us">
              <span className="footer-title">FOLLOW US</span>
              <div className="social-icon">
                <a href="/">
                  <i className="fa fa-facebook" />
                </a>
                <a href="/">
                  <i className="fa fa-twitter" />
                </a>
                <a href="/">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="/">
                  <i className="fa fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          {/* single footer widget */}
          <div className="col-md-6 col-sm-6 col-lg-4">
            <div className="footer-widget">
              <div className="sub-btn">
                <a
                  href="/"
                  className="btn btn-primary btn-large bg-transparent"
                >
                  Submit CV
                </a>
                <a href="/" className="btn btn-secondary btn-large">
                  Job Requisition
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* copy right sec */}
        <div className="row">
          <div className="col-md-12">
            <div className="footer-cr text-center">
              <ul className="footer-menu">
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Terms Of Service</a>
                </li>
              </ul>
              <p>©2019 Talentscript. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
