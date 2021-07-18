import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";
import { allProjectsData } from "../../DataManagement/DataManagement";
import { useHistory } from "react-router-dom";

const Portfolio = () => {
  const history = useHistory();

  const handleRoute = () => {
    history.push("./portfolioAll");
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="portfolio-section" id="portfolio">
        <div className="portfolio-project-container">
          <div className="portfolio-project-text">
            <h3>I have done at</h3>
            <h2>Projects</h2>
          </div>

          {allProjectsData.slice(0, 6).map((item) => {
            return (
              <>
                <div
                  className="card-container"
                  key={item.key}
                  data-aos="zoom-out-up"
                >
                  <div className="card u-clearfix">
                    <div className="screen">
                      <img src={item.image} alt={item.image} />
                    </div>

                    <div className="card-body">
                      <span className="card-number card-circle subtle">
                        {item.key}
                      </span>
                      <span className="card-author subtle">
                        Developer.OmarFaruk
                      </span>
                      <h2 className="card-title">{item.title}</h2>
                      <span className="card-description subtle">
                        {item.subTitle}
                      </span>
                      <div className="card-read">Also</div>
                      <div className="card-description subtle">
                        {item.tools}
                      </div>
                      <span className="card-tag subtle">
                        <a href={item.gitLink}>
                          <i className="fab fa-github card-icon"></i>
                        </a>

                        <a href={item.webLink}>
                          <i class="fab fa-chrome card-icon"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          <button className="hire-btn" data-aos="zoom-in" onClick={handleRoute}>
            <span>See All</span>
          </button>
        </div>

        <div className="all-footer-section">
          <h3> &copy; Developer.OmarFaruk 2021 | All right reserved.</h3>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
