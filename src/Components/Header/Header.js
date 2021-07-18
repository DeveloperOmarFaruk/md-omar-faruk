import React, { useState, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./Header.css";
import Navbar from "../Pages/Navbar/Navbar";
import { UserContext } from "../../App";
import Particles from "react-particles-js";

let params = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#c311e7", "#b8e986", "#4dc9ff", "#ffd300", "#f68338"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 50,
        height: 50,
      },
    },
    opacity: {
      value: 0.9,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.5,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 30,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 10,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 125,
        duration: 1,
      },
      push: {
        particles_nb: 3,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  // *EE^WDte@VPnyi&o9vE5X@WbWNe*k5ka
};

const Header = () => {
  const [show, setShow] = useState(false);
  const [click, setClick] = useContext(UserContext);

  const handleClick = () => {
    setShow(!show);
    setClick(!show);
  };

  return (
    <>
      <div className="header-section">
        <div className={show ? "header-left active" : "header-left"}>
          <p>Developer.</p>
          <h3>OmarFaruk</h3>

          <div id="particles-js">
            <Particles
              className={show ? "particles active" : "particles"}
              params={params}
            />
          </div>

          <div className={show ? "social-icon active" : "social-icon"}>
            <a href="https://github.com/DeveloperOmarFaruk">
              <i class="fab fa-github s-icon" />
            </a>

            <a href="https://www.linkedin.com/in/omar-faruk-a16077190/">
              <i class="fab fa-linkedin-in s-icon" />
            </a>

            <a href="https://twitter.com/omarfaruk_181">
              <i class="fab fa-twitter s-icon" />
            </a>

            <a href="https://www.facebook.com/profile.php?id=100018059885354">
              <i class="fab fa-facebook-f s-icon" />
            </a>
            <i
              className={
                show
                  ? "fas fa-long-arrow-alt-left s-icon"
                  : "fas fa-long-arrow-alt-right s-icon"
              }
              onClick={handleClick}
            />
          </div>
        </div>

        <div className={show ? "header-right active" : "header-right"}>
          <Router>
            <Navbar />
          </Router>
        </div>
      </div>
    </>
  );
};

export default Header;
