import styles from "./navbar.module.css";
import { FaArrowTurnUp, FaBarsStaggered, FaBars } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <nav>
        {/* Top Banner */}
        <div className={styles.navtop}>
          Elevate your look with expert cuts and timeless style
          <FaArrowTurnUp className={styles.arrow} />
        </div>

        {/* Main Navbar */}
        <div className={styles.navcover}>
          <div className={styles.navinner}>
            {/* Logo */}
            <div className={styles.logo}>
              <div className={styles.alpha}>Alpha</div>
              <div className={styles.barber}>barber shop</div>
            </div>

            {/* Desktop Menu */}
            <div className={styles.menu}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </div>

            {/* Appointment Button (Desktop) */}
            <div className={styles.menu2}>
              <li className={styles.book}>
                <a href="#contact">Appointment</a>
              </li>
            </div>

            {/* Mobile Icon Toggle */}
            <div className={styles.mobileIcon} onClick={toggleMobileMenu}>
              {showMobileMenu ? <FaBars /> : <FaBarsStaggered />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className={styles.mobileMenu}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className={styles.book}><a href="#contact">Appointment</a></li>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
