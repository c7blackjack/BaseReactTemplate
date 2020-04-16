import React, { Component } from "react";
import me from "../../img/profilePic.jpg";

class Form extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col contactImg">
            <img id="contactImg" src={me} alt="Profile pic"></img>
          </div>
          <div className="col contactInfo">
            <h1>Travis Lloyd</h1>
            <h2>
              <a href="mailto:travislloyd@lloyddm.com">
                Travislloyd@lloyddm.com
              </a>
            </h2>
            <h2>661-414-4027</h2>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Form;
