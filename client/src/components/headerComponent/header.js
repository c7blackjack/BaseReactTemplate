import React, { Component } from "react";
import { Link } from "react-router-dom";
import Me from "../../img/profilePic.jpg";

// import Logo from "../../Logo2.png";

// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");

//   burger.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");
//   });
// };
// navSlide();

class Header extends Component {
  clickHandler() {
    const navLinks = document.querySelectorAll(".nav-links li");
    const nav = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");

    //Mobile Menu Toggler
    nav.classList.toggle("nav-active");

    //Link Animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        console.log("Testy1");
        link.style.animation = "";
      } else {
        console.log("Testy2");
        link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
      console.log(link);
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  }

  render() {
    return (
      <header>
        <div className="logo">
          <h1>Travis Lloyd</h1>
          <p> Developer | Life Learner</p>
          {/*<img src={Logo} />*/}
        </div>

        <nav className="nav">
          <ul className="nav-links" onClick={this.clickHandler}>
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li className="last">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <div className="burger" onClick={this.clickHandler}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
