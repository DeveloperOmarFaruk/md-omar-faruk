import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FsLightbox from "fslightbox-react";
import "./Achievement.css";
import {
  FrontendCertificateData,
  AllCertificateData,
  ReactCertificateData,
  JavaCertificateData,
  HtmlCssCertificateData,
  wordpressCertificateData,
  OthersCertificateData,
} from "../../DataManagement/DataManagement";
import Frontend from "../../../Images/fd1.jpg";
import LinkedInFrontend from "../../../Images/linkedInFronted.png";
import Frontend2 from "../../../Images/fd2.jpg";
import RJS1 from "../../../Images/rjs1.jpg";
import RJS2 from "../../../Images/rjs2.jpg";
import JS1 from "../../../Images/js1.jpg";
import JS2 from "../../../Images/js2.jpg";
import HTML1 from "../../../Images/html1.jpg";
import HTML2 from "../../../Images/html2.jpg";
import LinkedInHtml from "../../../Images/linkedInHtml.png";
import HTML3 from "../../../Images/html3.jpg";
import HTML4 from "../../../Images/html4.jpg";
import CSS1 from "../../../Images/css1.jpg";
import LinkedInCss from "../../../Images/linkedInCss.png";
import CSS2 from "../../../Images/css2.jpg";
import CSS3 from "../../../Images/css3.jpg";
import WORD1 from "../../../Images/word1.jpg";
import BOOTS1 from "../../../Images/boots1.jpg";
import JQ1 from "../../../Images/jq1.jpg";
import JQ2 from "../../../Images/jq2.jpg";
import LINUX1 from "../../../Images/linux1.jpg";
import GITHUB1 from "../../../Images/github1.jpg";
import VS from "../../../Images/vs-1.jpg";

const Achievement = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [toggler, setToggler] = useState(false);

  const [front, setFront] = useState([]);
  const [react, setReact] = useState([]);
  const [java, setJava] = useState([]);
  const [html, setHtml] = useState([]);
  const [word, setWord] = useState([]);
  const [others, setOthers] = useState([]);
  const [all, setAll] = useState([]);
  const [defValue, setDefValue] = useState(AllCertificateData);

  const allHandleClick = () => {
    setAll(AllCertificateData);
    setFront([]);
    setReact([]);
    setJava([]);
    setHtml([]);
    setWord([]);
    setOthers([]);
    setDefValue([]);
  };

  const frontHandleClick = () => {
    setFront(FrontendCertificateData);
    setReact([]);
    setJava([]);
    setHtml([]);
    setWord([]);
    setOthers([]);
    setAll([]);
    setDefValue([]);
  };

  const reactHandleClick = () => {
    setReact(ReactCertificateData);
    setFront([]);
    setJava([]);
    setHtml([]);
    setWord([]);
    setOthers([]);
    setAll([]);
    setDefValue([]);
  };

  const javaHandleClick = () => {
    setJava(JavaCertificateData);
    setFront([]);
    setReact([]);
    setHtml([]);
    setWord([]);
    setOthers([]);
    setAll([]);
    setDefValue([]);
  };

  const htmlHandleClick = () => {
    setHtml(HtmlCssCertificateData);
    setFront([]);
    setReact([]);
    setJava([]);
    setWord([]);
    setOthers([]);
    setAll([]);
    setDefValue([]);
  };

  const wordHandleClick = () => {
    setWord(wordpressCertificateData);
    setFront([]);
    setReact([]);
    setJava([]);
    setHtml([]);
    setOthers([]);
    setAll([]);
    setDefValue([]);
  };

  const othersHandleClick = () => {
    setOthers(OthersCertificateData);
    setFront([]);
    setReact([]);
    setJava([]);
    setHtml([]);
    setWord([]);
    setAll([]);
    setDefValue([]);
  };

  return (
    <div className="achievement-section" id="achievement">
      <div className="achievement-container">
        <div className="achievement-container-text">
          <h3>Take a look at</h3>
          <h2>Certificate</h2>
        </div>

        <div className="resume-skill-container-btn" data-aos="zoom-in">
          <button className="skill-btn" onClick={allHandleClick}>
            <span>All</span>
          </button>
          <button className="skill-btn" onClick={frontHandleClick}>
            <span>Front End Dev.</span>
          </button>
          <button className="skill-btn" onClick={reactHandleClick}>
            <span>React.js</span>
          </button>
          <button className="skill-btn" onClick={javaHandleClick}>
            <span>JavaScript</span>
          </button>
          <button className="skill-btn" onClick={htmlHandleClick}>
            <span>HTML & CSS</span>
          </button>
          <button className="skill-btn" onClick={wordHandleClick}>
            <span>Wordpress</span>
          </button>
          <button className="skill-btn" onClick={othersHandleClick}>
            <span>Others</span>
          </button>
        </div>

        <div class="achievement-container-image">
          {defValue.slice(0, 6).map((item) => {
            return (
              <>
                <div class="w3-card-4" key={item.key} data-aos="zoom-in-up">
                  <div class="container img-wrapper gallery-row">
                    <img src={item.image} alt={item.image} />
                    <div className="search">
                      <i
                        class="fas fa-search-plus"
                        onClick={() => setToggler(!toggler)}
                      />
                    </div>
                    <div class="overlay">
                      <div class="text">
                        <div class="quote">{item.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {all.map((item) => {
            return (
              <>
                <div class="w3-card-4" key={item.key} data-aos="zoom-in-up">
                  <div class="container img-wrapper gallery-row">
                    <img src={item.image} alt={item.image} />
                    <div className="search">
                      <i
                        class="fas fa-search-plus"
                        onClick={() => setToggler(!toggler)}
                      />
                    </div>
                    <div class="overlay">
                      <div class="text">
                        <div class="quote">{item.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {front.map((item) => {
            return (
              <>
                <div class="w3-card-4" key={item.key} data-aos="zoom-in-up">
                  <div class="container img-wrapper gallery-row">
                    <img src={item.image} alt={item.image} />
                    <div className="search">
                      <i
                        class="fas fa-search-plus"
                        onClick={() => setToggler(!toggler)}
                      />
                    </div>
                    <div class="overlay">
                      <div class="text">
                        <div class="quote">{item.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {react.map((item) => {
            return (
              <>
                <div class="w3-card-4" key={item.key} data-aos="zoom-in-up">
                  <div class="container img-wrapper gallery-row">
                    <img src={item.image} alt={item.image} />
                    <div className="search">
                      <i
                        class="fas fa-search-plus"
                        onClick={() => setToggler(!toggler)}
                      />
                    </div>
                    <div class="overlay">
                      <div class="text">
                        <div class="quote">{item.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {java.map((item) => {
            return (
              <>
                <div class="w3-card-4" key={item.key} data-aos="zoom-in-up">
                  <div class="container img-wrapper gallery-row">
                    <img src={item.image} alt={item.image} />
                    <div className="search">
                      <i
                        class="fas fa-search-plus"
                        onClick={() => setToggler(!toggler)}
                      />
                    </div>
                    <div class="overlay">
                      <div class="text">
                        <div class="quote">{item.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {html.map((item) => {
            return (
              <>
                <div class="w3-card-4" key={item.key} data-aos="zoom-in-up">
                  <div class="container img-wrapper gallery-row">
                    <img src={item.image} alt={item.image} />
                    <div className="search">
                      <i
                        class="fas fa-search-plus"
                        onClick={() => setToggler(!toggler)}
                      />
                    </div>
                    <div class="overlay">
                      <div class="text">
                        <div class="quote">{item.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {word.map((item) => {
            return (
              <>
                <div class="w3-card-4" key={item.key} data-aos="zoom-in-up">
                  <div class="container img-wrapper gallery-row">
                    <img src={item.image} alt={item.image} />
                    <div className="search">
                      <i
                        class="fas fa-search-plus"
                        onClick={() => setToggler(!toggler)}
                      />
                    </div>
                    <div class="overlay">
                      <div class="text">
                        <div class="quote">{item.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {others.map((item) => {
            return (
              <>
                <div class="w3-card-4" key={item.key} data-aos="zoom-in-up">
                  <div class="container img-wrapper gallery-row">
                    <img src={item.image} alt={item.image} />
                    <div className="search">
                      <i
                        class="fas fa-search-plus"
                        onClick={() => setToggler(!toggler)}
                      />
                    </div>
                    <div class="overlay">
                      <div class="text">
                        <div class="quote">{item.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <FsLightbox
        toggler={toggler}
        sources={[
          Frontend,
          LinkedInFrontend,
          Frontend2,
          RJS1,
          RJS2,
          JS1,
          JS2,
          HTML1,
          HTML2,
          LinkedInHtml,
          HTML3,
          HTML4,
          CSS1,
          LinkedInCss,
          CSS2,
          CSS3,
          WORD1,
          BOOTS1,
          JQ1,
          JQ2,
          LINUX1,
          GITHUB1,
          VS,
        ]}
      />

      <div className="all-footer-section">
        <h3> &copy; Developer.OmarFaruk 2021 | All right reserved.</h3>
      </div>
    </div>
  );
};

export default Achievement;
