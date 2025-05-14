import styles from "./service.module.css";

const Service = () => {

  return (
    <>
    <section>
     <div className={styles["servicecover"]}>
         <div className={styles["servicetitle"]}>
             <div className={styles["servicetext"]}> Services <span className={styles["alpha"]}> By Alpha Barber</span>
             </div>  
             <div className={styles["line"]}></div>
              </div> 
      <div className={styles["servicecontentcover"]}>
      <div className={styles["service1"]}>
    <div className={styles["serviceimage"]}>
    <img src="./public/service1.jpg"/>
      </div>
    <div className={styles["servicedetails"]}>
    <div className={styles["servicetype"]}>HairCuts</div>
    <div className={styles["serviceabout"]}>At Alpha Barber Shop, every haircut starts with a personal consultation, followed by precise cutting using sanitized tools tailored to your style. We finish with premium styling products and a warm towel for a clean, polished look.</div>
    </div>
      </div>
      <div className={styles["service2"]}>
      <div className={styles["serviceimage"]}>
 <img src="./public/service2.jpg"/>        </div>
    <div className={styles["servicedetails2"]}>
    <div className={styles["servicetype2"]}>Beard Service</div>
    <div className={styles["serviceabout"]}>At Alpha Barber Shop, beard grooming is more than just a trim — it's a ritual. Our expert barbers sculpt and shape your beard with precision,ensuring a clean, sharp look that complements your face shape and personal style.</div>
    </div>
      </div>
      <div className={styles["service2"]}>
      <div className={styles["serviceimage"]}>
 <img src="./public/service3.jpg"/>        </div>
    <div className={styles["servicedetails2"]}>
    <div className={styles["servicetype2"]}>Quality Service</div>
    <div className={styles["serviceabout"]}>Transform your look with our premium hair color services at Alpha Barber Shop. Whether you're going for bold highlights, full coverage, or a subtle shade upgrade, we use top-quality products to ensure rich, vibrant, and long-lasting color.</div>
    </div>
      </div>

      </div>
    
      </div>  
      </section>   
    </>
  );
};

export default Service;