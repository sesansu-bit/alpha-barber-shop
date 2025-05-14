import styles from "./about.module.css";

const About = () => {

  return (
    <>
    <section>
     <div className={styles["aboutcover"]}>
     <div className={styles["abouttitle"]}>
     <div className={styles["abouttext"]}> About <span className={styles["alpha"]}> Alpha Barber Shop</span>
     </div>  
     <div className={styles["line"]}></div>
      </div>  
      <div className={styles["aboutcontentcover"]}>
      <div className={styles["aboutimagecover"]}>
          <div className={styles["aboutimage"]}><img src="./public/aboutimage.jpg"/></div>
          </div>

          <div className={styles["aboutcontenttext"]}>
          <div className={styles["aboutbackground"]}>
          <div className={styles["heading1"]}>At Alpha Barber Shop, Style is a Statement.</div>  
          <div className={styles["subheading1"]}>We’re not just about haircuts — we’re about confidence, craftsmanship, and character. From precision fades to classic trims, our expert barbers bring years of experience, creativity, and attention to detail with every cut.</div>  
         <div className={styles["heading3"]}>Why Choose Alpha?</div>  
          <div className={styles["subheading3"]}>
          <div >  ✅ Skilled & Certified Barbers </div>      
          <div >  ✅ Premium Grooming Products</div>      
          <div >  ✅ Hygienic & Comfortable Setup  </div>      
          <div>  ✅ Personalized Experience Every Time</div>      
</div>  
 

            </div>      
       </div>

          
          
          </div>  
      </div>  
</section>   
    </>
  );
};

export default About;