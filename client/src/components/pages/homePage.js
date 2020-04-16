import React, { Component } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
//import { useTrail, animated } from "react-spring";

const particleParams = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#c65039"
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: false,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      color: "#c65039",
      opacity: 0.95,
      width: 2
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      repulse: {
        distance: 50,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  }
};

class Homepage extends Component {
  render() {
    return (
      //<div className="container">
      <div className="particles">
        <h1>Hi! I am a Web Developer</h1>
        <h2>Want to chat or collaborate?</h2>
        <button type="button" className="btn btn-info">
          <Link to="/Contact">Get In Touch</Link>
        </button>
        <Particles params={particleParams} />
      </div>
      //</div>
    );
  }
}

export default Homepage;
