import React, { Component } from "react";
import Me from "../../img/profilePic.jpg";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="follow">
          <h1>Follow me</h1>
        </div>
        <div className="social">
          <a href="https://www.facebook.com/travis.lloyd.1232">
            <i className="fa fa-facebook" />
          </a>
          <a href="https://twitter.com/RKS_Foundation">
            <i className="fa fa-twitter" />
          </a>
          <a href="https://www.linkedin.com/in/travis-lloyd-b121ba133/">
            <i className="fa fa-linkedin" />
          </a>
          <a href="https://www.instagram.com/Travis_Lloyd_WebDever/">
            <i className="fa fa-instagram" />
          </a>
        </div>
        <div id="rights">
          <p>All Rights Reserved by &copy;Travis Lloyd 2020</p>
        </div>
      </div>
    );
  }
}

export default Footer;
