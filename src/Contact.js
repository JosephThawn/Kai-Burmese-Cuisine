import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer">
          <ul>
            <li className="nav-item">
              <a href="#about">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#testimonials">Menu</a>
            </li>
            <li className="nav-item">
              <a href="#demo">Contact</a>
            </li>
          </ul>
        </div>
        <div className="address">
          <h2>Our Address</h2>
          <div className="underline"> </div>

          <h3>
            6912 S Lewis Ave,
            <br />
            Tulsa, Ok 74136
          </h3>
        </div>
        <div className="contact">
          <i className="fa fa-phone">(918) 559-7899</i>
          <br />
          <i className="fa fa-envelope-o"> kaiburmese@gmail.com</i>
        </div>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="social_icons">
          <a
            href="/"
            className="btn btn-social-icon btn-twitter"
            target="_blank"
          >
            <span className="fa-stack fa-lg">
              <i className="fa fa-square-o fa-stack-2x"></i>
              <i className="fa fa-facebook fa-stack-1x"></i>
            </span>
          </a>
          <a
            href="/"
            className="btn btn-social-icon btn-instagram"
            target="_blank"
          >
            <span className="fa-stack fa-lg">
              <i className="fa fa-square-o fa-stack-2x"></i>
              <i className="fa fa-instagram fa-stack-1x"></i>
            </span>
          </a>
          <a
            href="/"
            className="btn btn-social-icon btn-youtube"
            target="_blank"
          >
            <span className="fa-stack fa-lg">
              <i className="fa fa-square-o fa-stack-2x"></i>
              <i className="fa fa-youtube-square fa-stack-1x"></i>
            </span>
          </a>
          <a
            href="/"
            className="btn btn-social-icon btn-twitter"
            target="_blank"
          >
            <span className="fa-stack fa-lg">
              <i className="fa fa-square-o fa-stack-2x"></i>
              <i className="fa fa-twitter-square fa-stack-1x"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
