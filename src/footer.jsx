import styles from "./footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footercover}>
        <div className={styles.footercontent}>
          {/* Left Section */}
          <div className={styles.left}>
            <h2>Alpha Barber</h2>
            <p>Precision. Style. Confidence. Book your appointment today and transform your look.</p>
            <div className={styles.socials}>
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          {/* Center Nav Links */}
          <div className={styles.center}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Right Subscribe Section */}
          <div className={styles.right}>
            <h3>Subscribe</h3>
            <div className={styles.subscribe}>
              <input type="email" placeholder="Enter your email" />
              <button><FaArrowRight /></button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          © 2025 Alpha Barber. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
