import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn,} from '@fortawesome/free-brands-svg-icons'
import sb_logo from "../assets/sb_logo2.png"; // Ensure you have a logo image in the specified path

export default function Footer() {
  return (
    <footer className="sb-footer page-theme-footer">
      <div className="sb-container">
        <div className="sb-middle">
          <div className="sb-about">
            <a
              href="/"
              className="sb-logo-link"
              aria-label="Sustainable Bhava home"
            >
              <img src={sb_logo} alt="Sustainable Bhava" className="sb-logo" />
            </a>
            <p className="sb-about-text">
              To empower communities through the art of storytelling, fostering
              a deep-rooted connection to sustainability and providing the tools
              for collective environmental stewardship. This is the path we walk
              every single day.
            </p>
          <div
              className="sb-socials footer-socials-row"
              aria-label="social links"
            >
              <a href="#" aria-label="facebook" className="sb-social">
                {" "}
                <FontAwesomeIcon icon={faFacebookF} />{" "}
              </a>
              <a href="#" aria-label="twitter" className="sb-social">
                {" "}
                <FontAwesomeIcon icon={faTwitter} />{" "}
              </a>
              <a href="https://www.instagram.com/sustainablebhava" aria-label="instagram" className="sb-social">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />{" "}
              </a>
              <a href="#" aria-label="linkedin" className="sb-social">
                {" "}
                <FontAwesomeIcon icon={faLinkedinIn} />{" "}
              </a>
            </div>
          </div>

          <div className="sb-links">
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="/aboutUs">About Us</a>
              </li>
               <li><a href="/#">Home</a></li>
              <li>
                <a href="/projects">Our Work</a>
              </li>
               <li><a href="/OurServices">Our Services</a></li>
              <li>
                <a href="/get-involved">Get Involved</a>
              </li>
              <li><a href="/Blogs">Blog</a></li>
              <li>
                <a href="/Resources">Resources</a>
              </li>
              <li><a href="/Contact">Contact</a></li>
              <li>
                <a href="/Blogs">Stories</a>
              </li>
              <li><a href="/aboutUs">About Us</a></li>
            </ul>
          </div>

          <div className="sb-actions">
            <h3>Support the Movement</h3>
            <p className="small">
              Your contribution helps run community workshops and build
              open-source tools.
            </p>
            <div className="sb-cta-row">
              <a href="/donate" className="btn btn-primary">
                Donate
              </a>
              <a href="/volunteer" className="btn btn-outline">
                Volunteer
              </a>
            </div>

            <div className="subscribe compact-subscribe">
              <h3>Subscribe to Our Newsletter</h3>
              <label htmlFor="sb-email" className="sr-only">
                Subscribe to newsletter
              </label>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  id="sb-email"
                  type="email"
                  placeholder="Your email"
                  aria-label="email"
                />
                <button type="submit" className="subscribe-btn">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="sb-bottom themed-bottom">
          <p>
            © {new Date().getFullYear()} Sustainable Bhava — Building
            community-driven climate solutions.
          </p>
          <nav className="sb-bottom-nav" aria-label="footer navigation">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
        {/* <div className="made-with-sb">
          <p>Made with ❤️ by the Sustainable Bhava team</p>
        </div> */}
      </div>
    </footer>
  );
}