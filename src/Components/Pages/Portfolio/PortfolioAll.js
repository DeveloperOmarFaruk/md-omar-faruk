import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";
import {
  allProjectsData,
  reactProjectsData,
  javascriptProjectsData,
  wordpressProjectsData,
  othersProjectsData,
} from "../../DataManagement/DataManagement";

const PortfolioAll = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [allData, setAllData] = useState(allProjectsData);
  const [visible, setVisible] = useState(4);
  const [react, setReact] = useState([]);
  const [js, setJs] = useState([]);
  const [word, setWord] = useState([]);
  const [other, setOther] = useState([]);
  const [all, setAll] = useState([]);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 4);
    setAll([]);
    setReact([]);
    setJs([]);
    setWord([]);
    setOther([]);
  };

  const allClick = () => {
    setAll(allProjectsData);
    setReact([]);
    setJs([]);
    setWord([]);
    setOther([]);
    setVisible([]);
  };

  const reactClick = () => {
    setReact(reactProjectsData);
    setJs([]);
    setWord([]);
    setOther([]);
    setVisible([]);
    setAll([]);
  };

  const javaClick = () => {
    setJs(javascriptProjectsData);
    setReact([]);
    setWord([]);
    setOther([]);
    setVisible([]);
    setAll([]);
  };

  const wordClick = () => {
    setWord(wordpressProjectsData);
    setReact([]);
    setJs([]);
    setOther([]);
    setVisible([]);
    setAll([]);
  };

  const otherClick = () => {
    setOther(othersProjectsData);
    setReact([]);
    setJs([]);
    setWord([]);
    setVisible([]);
    setAll([]);
  };

  return (
    <>
      <div className="portfolio-section">
        <div className="portfolio-project-container">
          <div className="portfolio-project-text">
            <h3>All Projects At</h3>
            <h2>Featured</h2>
          </div>

          <div className="resume-skill-container-btn" data-aos="zoom-in">
            <button className="skill-btn" onClick={allClick}>
              <span>All</span>
            </button>
            <button className="skill-btn" onClick={reactClick}>
              <span>React.js</span>
            </button>
            <button className="skill-btn" onClick={javaClick}>
              <span>JavaScript</span>
            </button>
            <button className="skill-btn" onClick={wordClick}>
              <span>Wordpress</span>
            </button>
            <button className="skill-btn" onClick={otherClick}>
              <span>Others</span>
            </button>
          </div>

          {allData.slice(0, visible).map((item) => {
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

          {all.map((item) => {
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

          {react.map((item) => {
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

          {js.map((item) => {
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

          {word.map((item) => {
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

          {other.map((item) => {
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

          {visible < allData.length ? (
            <button
              className="hire-btn"
              data-aos="zoom-in"
              onClick={showMoreItems}
            >
              <span>Load More</span>
            </button>
          ) : (
            <button className="hire-btn" data-aos="zoom-in">
              <span>No Content</span>
            </button>
          )}
        </div>

        <div className="all-footer-section">
          <h3> &copy; Developer.OmarFaruk 2021 | All right reserved.</h3>
        </div>
      </div>
    </>
  );
};

export default PortfolioAll;
