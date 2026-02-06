import React, { useState } from "react";
import "./Footer.css";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import sb_logo from "../assets/sb_logo2.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    emailjs
      .send(
        "service_x76t6i2",   // 👈 EmailJS service ID
        "template_nz0vst3",  // 👈 EmailJS template ID
        { user_email: email },
        "-wlr0mM4djiDpH8YM"    // 👈 EmailJS public key
      )
      .then(() => {
        alert("Subscribed successfully 🎉");
        setEmail("");
      })
      .catch((err) => {
        console.error(err);
        alert("Subscription failed ❌");
      })
      .finally(() => setLoading(false));
  };

  return (
    <footer className="sb-footer page-theme-footer">
      <div className="sb-container">
        <div className="sb-middle">

          {/* ABOUT */}
          <div className="sb-about">
            <a href="/" className="sb-logo-link">
              <img src={sb_logo} alt="Sustainable Bhava" className="sb-logo" />
            </a>

            <p className="sb-about-text">
              To empower communities through the art of storytelling, fostering
              a deep-rooted connection to sustainability and providing the tools
              for collective environmental stewardship.
            </p>

            <div className="sb-socials footer-socials-row">
              <a href="#" className="sb-social">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="sb-social">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/sustainablebhava"
                className="sb-social"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="sb-social">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="sb-links">
            <h3>Explore</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/aboutUs">About Us</a></li>
              <li><a href="/projects">Our Work</a></li>
              <li><a href="/OurServices">Our Services</a></li>
              <li><a href="/get-involved">Get Involved</a></li>
              <li><a href="/Blogs">Blog</a></li>
              <li><a href="/Resources">Resources</a></li>
              <li><a href="/Contact">Contact</a></li>
            </ul>
          </div>

          {/* ACTIONS */}
          <div className="sb-actions">
            <h3>Support the Movement</h3>
            <p className="small">
              Your contribution helps run community workshops and build
              open-source tools.
            </p>

            <div className="sb-cta-row">
              <a href="/donate" className="btn btn-primary">Donate</a>
              <a href="/volunteer" className="btn btn-outline">Volunteer</a>
            </div>

            {/* NEWSLETTER */}
            <div className="subscribe compact-subscribe">
              <h3>Subscribe to Our Newsletter</h3>

              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  type="submit"
                  className="subscribe-btn"
                  disabled={loading}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="sb-bottom themed-bottom">
          <p>
            © {new Date().getFullYear()} Sustainable Bhava — Building
            community-driven climate solutions.
          </p>

          <nav className="sb-bottom-nav">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
