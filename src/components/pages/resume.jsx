import React, { Component } from "react";
import Me from "../../img/profilePic.jpg";
import Lloyddm from "../../img/lloyddmThumb.png";
import Port from "../../img/portfolioShot.png";

import Card from "./imageCard";

//Favicon imports
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiHeroku } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";

export class resume extends Component {
  render() {
    return (
      <div className="container">
        <div className="grid">
          <div className="info">
            <img
              id="imageStyle"
              src={Me}
              alt="Travis Lloyd - Programmer/Developer/LifeLearner"
            />
            <h1>Contact Info</h1>
            <h2>
              <a href="tel:661-414-4027">Lets Chat!</a>
            </h2>
            <h2>
              <a href="mailto:TravisLloyd@Lloyddm.com?subject=Subject">
                TravisLloyd@Lloyddm.com
              </a>
            </h2>
          </div>
          <div className="summary">
            <div>
              <h1 id="testcss">Summary</h1>
            </div>
            <div>
              <p>
                I have been a long believer in life learning. There is always
                more to learn, no matter which direction life takes. This is
                especially true when it comes to web development (considering
                there are, what seems to be, an endless variety of languages,
                libraries, frameworks and API's). I am also a firm believer that
                no matter where you end up, you were meant to be there and to
                learn something from that. In my time at The Cheesecake factory,
                I have learned how to strive independently and as an intricate
                part of a team within a fast paced environment. From there, I
                have also learned how to own yourself in success and in failure
                and how to adapt and overcome those hurdles. Problem solving and
                streamlining processes to become a better team member and friend
                have been my greatest skillsets within the workplace.
              </p>
            </div>
          </div>
          <div className="skillTitle">
            <h1>Skills</h1>
          </div>
          <div className="skillsList">
            <div>
              <ul id="skillTree">
                <li>
                  <FaReact /> | React
                </li>
                <li>
                  <FaNode /> | Node
                </li>
                <li>
                  <FaSass /> | Sass
                </li>
                <li>
                  <FaBootstrap /> | Bootstrap
                </li>
                <li>
                  <FaWordpress /> | Wordpress
                </li>
                <li>
                  <FaGulp /> | Gulp
                </li>
              </ul>
            </div>
            <div className="list">
              <ul id="skillTree">
                <li>
                  <FaNpm /> | NPM
                </li>
                <li>
                  <FaGithub /> | Github
                </li>
                <li>
                  <DiHeroku /> | Heroku
                </li>
                <li>
                  <FaJsSquare /> | JS/ES6
                </li>
                <li>
                  <FaHtml5 /> | Html 5
                </li>
                <li>
                  <FaCss3Alt /> | Css3
                </li>
              </ul>
            </div>
          </div>
          <div className="expTitle">
            <h1>Experience</h1>
          </div>
          <div className="portfolioImg">
            <img
              src={Lloyddm}
              title="LloydDM.com"
              alt="A simple demonstration of JavaScript, Css, Bootstrap and the Parallax Effect"
            />
          </div>
          <div className="portfolioContent">
            <h2>LloydDm.com</h2>
            <p>
              This is one of my first websites I built for myself. The tools I
              used to build this site were: Html, Css, Bootstrap, JavaScript,
              Php, and a Parallax frameworks to bring depth to the site.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default resume;
