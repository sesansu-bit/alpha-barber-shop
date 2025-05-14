import styles from "./hero.module.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section id="home">
        <div className={styles["herocover"]}>
          <div className={styles["herotext"]}>
            <div className={styles["herotext1"]}>
              Style begins with the right cut. Whether you're here for a fresh fade or a classic look.
            </div>
            <div className={styles["herotext2"]}>
              At Alpha, we believe a haircut is more than just grooming — it's an experience. Our skilled barbers specialize in precision fades, classic cuts, and modern styles.
            </div>

            <a href="#services" className={styles["service"]}>
              Our service <FaArrowRight className={styles["arrow"]} />
            </a>

    
            <a href="#contact" className={styles["book"]}>
              Book Now <FaArrowRight className={styles["arrow"]} />
            </a>
          </div>

          <div className={styles["heroimage"]}>
            <div className={styles["salonimage"]}>
          <img src="/heroimage.jpg" alt="Hero" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
