import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="contact-section" id="contact">
        {/* ===============Location Area =================*/}
        <div className="contact-location-container">
          <div className="contact-location-container-text">
            <h3>Location</h3>
            <h2>Contact Me</h2>
          </div>

          <p className="p" data-aos="zoom-in">
            If you'd like to talk about a project, my work or anything else then
            get in touch.
          </p>

          <div className="location-text-info" data-aos="zoom-in-up">
            <p>
              Phone:
              <a href="#">+880 1521404561</a>
            </p>

            <p>
              Mail:
              <a href="#">developer.omarfaruk@gmail.com</a>
            </p>

            <p>
              Address:
              <a href="#">Daffodil Smart City, Ashulia, Dhaka Bangladesh.</a>
            </p>

            <p>
              Map:
              <a href="#">Via Google Maps.</a>
            </p>
          </div>
        </div>
        {/* ===============From Area =================*/}
        <div className="contact-form-container">
          <div className="contact-form-container-text">
            <h3>Say Hello</h3>
            <h2>Get In Touch</h2>
          </div>

          <div className="contactForm" data-aos="zoom-out">
            <form action="">
              <div className="inputGroup inputGroup1">
                <input
                  className="inputGroup__textfield"
                  type="text"
                  name=""
                  placeholder="Firstname*"
                  required
                  data-value-missing="Please fill out this field."
                />
              </div>

              <div className="inputGroup inputGroup2">
                <input
                  className="inputGroup__textfield"
                  type="text"
                  name=""
                  placeholder="Lastname*"
                  required
                  data-value-missing="Please fill out this field."
                />
              </div>

              <div className="inputGroup inputGroup3">
                <input
                  className="inputGroup__textfield"
                  type="text"
                  name=""
                  placeholder="Email*"
                  required
                  data-value-missing="Please fill out this field."
                />
              </div>

              <div className="inputGroup inputGroup4">
                <input
                  className="inputGroup__textfield"
                  type="text"
                  name=""
                  placeholder="Phone*"
                  required
                  data-value-missing="Please fill out this field."
                />
              </div>

              <div className="inputGroup inputGroup6">
                <textarea
                  className="inputGroup__textfield"
                  name="name"
                  rows="8"
                  placeholder="Your Message*"
                  required
                  data-value-missing="Please fill out this field."
                ></textarea>
              </div>

              <div className="inputGroup inputGroup7">
                <button className="hire-btn">
                  <span>Say Hello</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ===============Google Map Area =================*/}
        <div className="contact-map-container">
          <div className="contact-map-container-text">
            <h3>Location</h3>
            <h2>Google Map</h2>
          </div>

          <div className="map-container" data-aos="zoom-out-down">
            <GoogleMap />
          </div>
        </div>

        <div className="all-footer-section">
          <h3> &copy; Developer.OmarFaruk 2021 | All right reserved.</h3>
        </div>
      </div>
    </>
  );
};

export default Contact;
