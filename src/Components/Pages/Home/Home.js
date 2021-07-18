import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "react-typed";
import "./Home.css";
import { Data } from "../../DataManagement/DataManagement";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleRoute = () => {
    history.push("./contact");
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="home-section" id="home">
        <div className="home-container">
          <div className="about-text-header">
            <h3>Hello, I'm</h3>

            <h2>
              <Typed
                strings={["Md. Omar Faruk", "Md. Omar Faruk"]}
                typeSpeed={40}
              />
            </h2>
            <h3>
              <Typed
                strings={[
                  "Frontend Developer",
                  "React JS Developer",
                  "Wordpress Theme Customization",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </h3>
            <div
              className="about-text-header-p"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <p>
                Hi, My name is Omar Faruk. I am a Frontend Reactjs web
                developer.
              </p>
              <p>
                I enjoy creating thing that live on the internet, whether that
                be website, application or anything in between. My goal is to
                always build products that provide pixel-perfect experience.
              </p>
              <p>
                I am doing my graduation from &nbsp;
                <a
                  href="https://daffodilvarsity.edu.bd/"
                  className="hover-underline-animation"
                >
                  Daffodil International University.
                </a>
              </p>
            </div>
          </div>

          <div
            className="about-text-info"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="about-text-info-left">
              <p>
                Birthday:
                <a href="#">17 April 1998</a>
              </p>

              <p>
                Website:
                <a href="#">www.yourdomain.com</a>
              </p>

              <p>
                Phone:
                <a href="#">+880 1521404561</a>
              </p>
            </div>

            <div className="about-text-info-right">
              <p>
                Degree:
                <a href="https://cse.daffodilvarsity.edu.bd/program/undergraduate/day-program">
                  B.Sc. in CSE
                </a>
              </p>

              <p>
                Mail:
                <a href="#">developer.omarfaruk@gmail.com</a>
              </p>

              <p>
                LinkedIn:
                <a href="https://www.linkedin.com/in/omar-faruk-a16077190/">
                  /omar-faruk-a16077190
                </a>
              </p>
            </div>
          </div>

          <button
            className="hire-btn"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            onClick={handleRoute}
          >
            <span>Hire Me</span>
          </button>
        </div>

        <div className="service-container">
          <h3>What I Do</h3>
          <h2>Services</h2>

          <div className="service-card">
            {Data.map((item) => {
              return (
                <div className="sv-card" key={item.key} data-aos="zoom-in">
                  <img src={item.logo} alt={item.logo} />
                  <h1>{item.title}</h1>
                  <h3>{item.description}</h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className="all-footer-section">
          <h3> &copy; Developer.OmarFaruk 2021 | All right reserved.</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
