import React, { Component, useState } from "react";
import Particles from "react-particles-js";
import { useTrail, animated } from "react-spring";

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
    line_linked: {
      enable: true,
      color: "#c65039",
      opacity: 0.95,
      width: 3
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

const items = ["Welcome", "To", "My", "Portfolio"];
const config = { mass: 5, tension: 2000, friction: 200 };

class Homepage extends Component {
  render() {
    const [toggle, set] = useState(true);
    const trail = useTrail(items.length, {
      config,
      opacity: toggle ? 1 : 0,
      x: toggle ? 0 : 20,
      height: toggle ? 80 : 0,
      from: { opacity: 0, x: 20, height: 0 }
    });

    return (
      <div className="container">
        <div className="particles">
          <Particles params={particleParams} />
          {/* <h1>
                    Home Page Content
                </h1>

                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p> */}
        </div>
        <animated.div className="welcome">
          <h1>Welcome to my portfolio!</h1>
          <h1>This site was created using...</h1>
          <h1>Html5</h1>
          <h1>Sass</h1>
          <h1>JavaScript</h1>
          <h1>React</h1>
        </animated.div>
      </div>
    );
  }
}

export default Homepage;
