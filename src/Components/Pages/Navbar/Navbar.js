import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Navbar.css";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";
import Achievement from "../Achievement/Achievement";
import Portfolio from "../Portfolio/Portfolio";
import PortfolioAll from "../Portfolio/PortfolioAll";
import { Link } from "react-scroll";
import Error from "../Error/Error";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const style = {
    borderBottom: "1px solid var(--Tomato)",
    color: "var(--Tomato)",
  };

  return (
    <>
      <Router>
        <nav className="navbar">
          <div className="navbar__text">
            <Link className="menu-icon" onClick={handleClick}>
              <i
                className={click ? "fas fa-ellipsis-v" : "fas fa-ellipsis-h"}
              />
            </Link>

            <ul className={click ? "nav-menu  active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/md-omar-faruk"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  activeStyle={style}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/resume"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  activeStyle={style}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Resume
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/achievement"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  activeStyle={style}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Achievement
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  activeStyle={style}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Portfolio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  activeStyle={style}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/md-omar-faruk" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/achievement" exact component={Achievement} />
          <Route path="/portfolioAll" exact component={PortfolioAll} />
          <Route path="*" exact component={Error} />
        </Switch>
      </Router>
    </>
  );
};

export default Navbar;
