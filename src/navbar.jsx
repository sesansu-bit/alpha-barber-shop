import styles from "./navbar.module.css";
import { FaArrowTurnUp, FaBarsStaggered, FaBars } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Close mobile menu on link click
  const handleLinkClick = () => {
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
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
              <li><Link to="/home" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
              <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
              <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
              <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            </div>

            {/* Appointment Button (Desktop) */}
            <div className={styles.menu2}>
              <li className={styles.book}>
                <Link to="/contact" onClick={handleLinkClick}>Appointment</Link>
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
            <li><Link to="/home" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
            <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            <li className={styles.book}><Link to="/contact" onClick={handleLinkClick}>Appointment</Link></li>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

