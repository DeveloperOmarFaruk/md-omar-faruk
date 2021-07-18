import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  const location = useLocation();

  const history = useHistory();

  const handleRoute = () => {
    history.push("./md-omar-faruk");
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", margin: "0rem 0rem" }}>
        <div class="flex-container">
          <div class="text-center">
            <h2 style={{ color: "black" }}>
              No match for <cade>{location.pathname}</cade>
            </h2>
            <h1>
              <span class="fade-in" id="digit1">
                4
              </span>
              <span class="fade-in" id="digit2">
                0
              </span>
              <span class="fade-in" id="digit3">
                4
              </span>
            </h1>
            <h3 class="fadeIn">PAGE NOT FOUND</h3>
            <button
              className="hire-btn"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              onClick={handleRoute}
            >
              <span>Go to Home</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
