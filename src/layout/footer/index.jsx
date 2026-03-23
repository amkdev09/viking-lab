import React from "react";
import { FiMapPin, FiMail, FiPhone, FiArrowUpRight } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__newsletter-wrap">
        <div className="container">
          <section className="site-footer__newsletter flex h-[444px]">
            <div className="w-1/2 h-full">
              <figure
                className="site-footer__newsletter-image h-full"
              >
                <img
                  src="	https://recrute.vikinglab.agency/staffing-agency/wp-content/uploads/sites/3/2025/11/2147650999.png"
                  alt="Newsletter woman"
                />
              </figure>
            </div>
            <div className="site-footer__newsletter-content w-1/2">
              <h2>Ready to Power up your Savings and Reliability?</h2>
              <p>
                Feel free to customize this paragraph to better reflect the specific services offered by your IT
                solution and the unique
              </p>
              <form className="site-footer__newsletter-form" onSubmit={(event) => event.preventDefault()}>
                <input type="email" placeholder="Email Address" aria-label="Email Address" />
                <button type="submit">
                  <span>Subscribe Now</span>
                  <FiArrowUpRight aria-hidden="true" />
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      <div className="site-footer__main">
        <div className="container site-footer__grid">
          <div className="site-footer__about">
            <p>
              Our goal is to demystify the process, address your concerns, and empower you with the knowledge to embark.
            </p>
            <div className="site-footer__socials">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Direct Hire Solutions</a></li>
              <li><a href="#">Recruitment Expertise</a></li>
              <li><a href="#">Temp-to-Hire</a></li>
              <li><a href="#">Temporary Staffing</a></li>
              <li><a href="#">Executive Search</a></li>
              <li><a href="#">Contract Staffing</a></li>
            </ul>
          </div>

          <div>
            <h3>Explore</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Job Posts</a></li>
              <li><a href="#">Our Projects</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="site-footer__contact">
            <h3>Get In Touch</h3>
            <ul>
              <li>
                <FiMapPin aria-hidden="true" />
                <span>8708 Technology Forest Pl Suite 125 -G, The Woodlands</span>
              </li>
              <li>
                <FiMail aria-hidden="true" />
                <a href="mailto:Infoseo@gmail.com">Infoseo@gmail.com</a>
              </li>
              <li>
                <FiPhone aria-hidden="true" />
                <a href="tel:1234567890">123-456-7890</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="site-footer__bottom">
            <p>
              2024 recrute, All Rights Reserved. Design By VikingLab
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;