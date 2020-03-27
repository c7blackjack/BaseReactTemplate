import React, { Component } from "react";
import Me from "../../img/profilePic.jpg";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* <div className="col-md-3 col-sm-6 col-xs-12 segment-one">
                <h3>| Travis Lloyd</h3>
                <p>Programmer | Developer </p>
                <img
                  id="imageStyle"
                  src={Me}
                  alt="Travis Lloyd - Programmer/Developer/LifeLearner"
                />
              </div> */}
              <div className="col-md-3 col-sm-6 col-xs-12 segment-two">
                <h2>Useful Links</h2>
                <ul>
                  <li>
                    <a href="#">About Me</a>
                  </li>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Particle Generator</a>
                  </li>
                  <li>
                    <a href="#">Employment</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 segment-three">
                <h2>Follow Me</h2>
                <p>
                  Please follow me on my Social Media Profile to keep in contact
                </p>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 segment-four">
                <h2>Contact Me</h2>
                <p>LloydTravis@gmail.com 661-414-4027</p>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-bottom-text">
          All Rights Reserved by &copy;Travis Lloyd 2020
        </p>
      </footer>
    );
  }
}

export default Footer;