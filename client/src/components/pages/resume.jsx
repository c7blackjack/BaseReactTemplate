import React, { Component } from "react";
//import Me from "../../img/profilePic.jpg";
import Lloyddm from "../../img/lloyddmThumb.png";
import Heroku from "../../img/Heroku_landing.jpeg";
import Developer from "../../img/selfie.jpg";

//import Card from "./imageCard";

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
import { AiFillCalculator } from "react-icons/ai";
import { IoIosAlarm } from "react-icons/io";
import { IoIosContacts } from "react-icons/io";
import { IoIosMove } from "react-icons/io";
import { IoIosChatboxes } from "react-icons/io";
import { IoMdNavigate } from "react-icons/io";
import { IoMdAnalytics } from "react-icons/io";
import { IoMdGitNetwork } from "react-icons/io";
import { IoIosMedal } from "react-icons/io";
import { IoIosPin } from "react-icons/io";
import { GoLaw } from "react-icons/go";
import { GoChecklist } from "react-icons/go";

export class resume extends Component {
  render() {
    return (
      <div className="container">
        <div className="grid">
          <div className="hero">
            <img src={Developer} alt="Developer of this website" />
          </div>
          <div className="summary">
            <div>
              <h1 id="testcss">Summary</h1>
            </div>
            <div>
              <p>
                I am a strong believer in lifelong learning. I majored in
                mathematics and minored in computer science because I enjoy that
                type of abstract thinking. The languages of web development are
                similar to mathematics in that you have a problem to solve and
                you solve it cryptically using mathematical functions. I am
                continually learning new web development skills (languages,
                libraries, frameworks and APIs) to stay current in the
                technology field as a small side business. As an employee, I am
                a loyal team player having worked for the same company since
                2005 until COVID-19 shut down the services industry. Working in
                the services industry, I developed transferable skills of
                responsibility for management, team coordination, interpersonal
                communication, and problem-solving in a fast-paced environment.
                Problem solving and streamlining processes are my greatest
                skillsets within the workplace. With the current economic
                environment, it is the perfect time to transfer my development
                and workplace skills into a technology-related field.
              </p>
            </div>
          </div>
          <div className="skillTitle">
            <h1>Hard Skills</h1>
          </div>
          <div className="skillsList">
            <div>
              <ul id="skillTree">
                <li>
                  <FaReact color="#c65039" /> | React
                </li>
                <li>
                  <FaNode color="#c65039" /> | Node
                </li>
                <li>
                  <FaSass color="#c65039" /> | Sass
                </li>
                <li>
                  <FaBootstrap color="#c65039" /> | Bootstrap
                </li>
                <li>
                  <FaWordpress color="#c65039" /> | Wordpress
                </li>
                <li>
                  <FaGulp color="#c65039" /> | Gulp
                </li>
              </ul>
            </div>
            <div>
              <ul id="skillTree">
                <li>
                  <FaNpm color="#c65039" /> | NPM
                </li>
                <li>
                  <FaGithub color="#c65039" /> | Github
                </li>
                <li>
                  <DiHeroku color="#c65039" /> | Heroku
                </li>
                <li>
                  <FaJsSquare color="#c65039" /> | JS/ES6
                </li>
                <li>
                  <FaHtml5 color="#c65039" /> | Html 5
                </li>
                <li>
                  <FaCss3Alt color="#c65039" /> | Css3
                </li>
              </ul>
            </div>
          </div>

          <div className="skillTitle">
            <h1>Soft Skills</h1>
          </div>
          <div className="skillsList">
            <div>
              <ul id="skillTree">
                <li>
                  <AiFillCalculator color="#c65039" /> | Mathematics
                </li>
                <li>
                  <IoIosMedal color="#c65039" /> | Driven
                </li>
                <li>
                  <IoIosChatboxes color="#c65039" /> | Communication
                </li>
                <li>
                  <IoIosAlarm color="#c65039" /> | Dependability
                </li>
                <li>
                  <IoMdGitNetwork color="#c65039" /> | Collaborative
                </li>
                <li>
                  <IoIosPin color="#c65039" /> | Troubleshooting
                </li>
              </ul>
            </div>
            <div className="list">
              <ul id="skillTree">
                <li>
                  <IoIosContacts color="#c65039" /> | Teamwork
                </li>
                <li>
                  <IoIosMove color="#c65039" /> | Adaptive
                </li>
                <li>
                  <GoLaw color="#c65039" /> | Work Ethic
                </li>
                <li>
                  <IoMdNavigate color="#c65039" /> | Leadership
                </li>
                <li>
                  <IoMdAnalytics color="#c65039" /> | Analytics
                </li>
                <li>
                  <GoChecklist color="#c65039" /> | Time Management
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
            <a href="https://www.lloyddm.com">
              <h2>LloydDm.com</h2>
            </a>
            <p>
              This is one of my first websites I built for myself. The tools I
              used to build this site were: Html, Css, Bootstrap, JavaScript,
              Php, and a Parallax frameworks to bring depth to the site.
            </p>
          </div>

          <div className="portfolioImg">
            <img
              src={Heroku}
              title="LloydDM.com"
              alt="A simple demonstration of JavaScript, Css, Bootstrap and the Parallax Effect"
            />
          </div>
          <div className="portfolioContent">
            <a href="https://github.com/c7blackjack">
              <h2>Heroku/Git Projects</h2>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default resume;
