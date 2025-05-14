import styles from "./testimonial.module.css";

const Testimonial = () => {

  return (
    <>
    <section>
    <div className={styles["Testimonialcover"]}>
        <div className={styles["Testimonialtitle"]}>
                 <div className={styles["Testimonialtext"]}> <span className={styles["alpha"]}> Testimonial</span>
                     </div>  
                     <div className={styles["line"]}></div>
                      </div> 
      <div className={styles["Testimonialcontentcover"]}>
  <div className={styles["Testimonialimage"]}>
  <div className={styles["name"]}> Rahul Mehra ⭐4.9 </div>
  <div className={styles["review"]}>"Alpha Barber is my go-to place every month, and honestly, no other salon comes close. The staff is not only incredibly friendly but also highly skilled they understand my preferences even before I finish explaining every visit feels like a luxury grooming experience. it's a moment of self-care and confidence boost."</div>

  </div>
  <div className={styles["Testimonialimage"]}>
  <div className={styles["name"]}> Sneha Verma ⭐4.8 </div>
  <div className={styles["review"]}>"The ambiance at Alpha Barber is exceptionally clean, modern, and calming – it instantly makes you feel at ease. I recently went for their premium hair coloring service, and the results were way beyond my expectations. The shades were vibrant, the blending was flawless,and tips they shared  helped maintain the look. </div>
 
  </div>
  <div className={styles["Testimonialimage"]}>
  <div className={styles["name"]}>Aarav Khanna ⭐5.0 </div>
  <div className={styles["review"]}>"I was honestly nervous about getting a completely new hairstyle for the first time, but the team at Alpha Barber made me feel super comfortable from the moment I walked in. The barber patiently understood what I was looking for and even suggested subtle tweaks that suited my face better."</div>
  </div>
 
      </div>
         </div>
   
      </section>   
    </>
  );
};

export default Testimonial;