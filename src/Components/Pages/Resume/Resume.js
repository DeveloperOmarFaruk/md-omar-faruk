import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Resume.css";
import {
  educationData,
  skillAllData,
  skillProData,
  skillToolsData,
  skillLanguageData,
  skillSoftSkillData,
} from "../../DataManagement/DataManagement";

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [allData, setAllData] = useState([]);
  const [proData, setProData] = useState([]);
  const [toolsData, setToolsData] = useState([]);
  const [langData, setLangData] = useState([]);
  const [softData, setSoftData] = useState([]);
  const [deValue, setDeValue] = useState(skillAllData);

  const allHandleClick = () => {
    setAllData(skillAllData);
    setProData([]);
    setToolsData([]);
    setLangData([]);
    setDeValue([]);
    setSoftData([]);
  };

  const proHandleClick = () => {
    setProData(skillProData);
    setAllData([]);
    setToolsData([]);
    setLangData([]);
    setDeValue([]);
    setSoftData([]);
  };

  const toolsHandleClick = () => {
    setToolsData(skillToolsData);
    setAllData([]);
    setProData([]);
    setLangData([]);
    setDeValue([]);
    setSoftData([]);
  };

  const softHandleClick = () => {
    setSoftData(skillSoftSkillData);
    setAllData([]);
    setProData([]);
    setToolsData([]);
    setLangData([]);
    setDeValue([]);
  };

  const langHandleClick = () => {
    setLangData(skillLanguageData);
    setAllData([]);
    setProData([]);
    setToolsData([]);
    setDeValue([]);
    setSoftData([]);
  };
  return (
    <>
      <div className="resume-section" id="resume">
        <div className="resume-education-container">
          <div className="resume-education-container-text">
            <h3>Resume</h3>
            <h2>Education</h2>
          </div>

          <div className="resume-education-details" data-aos="fade-down">
            <div class="list-wrapper">
              <div class="red-line"></div>

              {educationData.map((item) => {
                return (
                  <>
                    <div class="list-item-wrapper">
                      <div class="list-bullet"></div>
                      <div className="list-item" key={item.key}>
                        <div class="list-title">{item.name}</div>
                        <div class="list-sub-title"> {item.year}</div>
                        <div class="list-text">
                          <p> {item.degree}</p>
                          <p> {item.result}</p>
                          <p> {item.extra}</p>{" "}
                        </div>
                      </div>
                      <div class="white-line"></div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="resume-skill-container">
          <div className="resume-skill-container-text">
            <h3>Professional</h3>
            <h2>Skill</h2>
          </div>

          <div className="resume-skill-container-btn" data-aos="zoom-in">
            <button className="skill-btn" onClick={allHandleClick}>
              <span>All</span>
            </button>
            <button className="skill-btn" onClick={proHandleClick}>
              <span>Programming</span>
            </button>
            <button className="skill-btn" onClick={softHandleClick}>
              <span>Soft Skill</span>
            </button>
            <button className="skill-btn" onClick={toolsHandleClick}>
              <span>Tools</span>
            </button>
            <button className="skill-btn" onClick={langHandleClick}>
              <span>Language</span>
            </button>
          </div>

          <div className="resume-skill-container-details">
            {deValue.slice(0, 6).map((item) => {
              return (
                <>
                  <div className="grid" key={item.key} data-aos="zoom-in-down">
                    <figure class="effect-milo">
                      <img src={item.image} alt={item.image} />
                      <figcaption>
                        <h1>{item.name}</h1>
                        <p>{item.category}</p>
                        <p>{item.per}</p>
                      </figcaption>
                    </figure>
                  </div>
                </>
              );
            })}

            {allData.map((item) => {
              return (
                <>
                  <div className="grid" key={item.key} data-aos="zoom-in-down">
                    <figure class="effect-milo">
                      <img src={item.image} alt={item.image} />
                      <figcaption>
                        <h1>{item.name}</h1>
                        <p>{item.category}</p>
                        <p>{item.per}</p>
                      </figcaption>
                    </figure>
                  </div>
                </>
              );
            })}

            {proData.map((item) => {
              return (
                <>
                  <div className="grid" key={item.key} data-aos="zoom-in-down">
                    <figure class="effect-milo">
                      <img src={item.image} alt={item.image} />
                      <figcaption>
                        <h1>{item.name}</h1>
                        <p>{item.category}</p>
                        <p>{item.per}</p>
                      </figcaption>
                    </figure>
                  </div>
                </>
              );
            })}

            {softData.map((item) => {
              return (
                <>
                  <div className="grid" key={item.key} data-aos="zoom-in-down">
                    <figure class="effect-milo">
                      <img src={item.image} alt={item.image} />
                      <figcaption>
                        <h1>{item.name}</h1>
                        <p>{item.category}</p>
                        <p>{item.per}</p>
                      </figcaption>
                    </figure>
                  </div>
                </>
              );
            })}

            {toolsData.map((item) => {
              return (
                <>
                  <div className="grid" key={item.key} data-aos="zoom-in-down">
                    <figure class="effect-milo">
                      <img src={item.image} alt={item.image} />
                      <figcaption>
                        <h1>{item.name}</h1>
                        <p>{item.category}</p>
                        <p>{item.per}</p>
                      </figcaption>
                    </figure>
                  </div>
                </>
              );
            })}

            {langData.map((item) => {
              return (
                <>
                  <div className="grid" key={item.key} data-aos="zoom-in-down">
                    <figure class="effect-milo">
                      <img src={item.image} alt={item.image} />
                      <figcaption>
                        <h1>{item.name}</h1>
                        <p>{item.category}</p>
                        <p>{item.per}</p>
                      </figcaption>
                    </figure>
                  </div>
                </>
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

export default Resume;
