import styles from "./gallery.module.css";
import { FaArrowRight } from "react-icons/fa";

const Gallery = () => {

  return (
    <>
    <section>
     <div className={styles["gallerycover"]}>
    <div className={styles["gallerytitle"]}>
                 <div className={styles["gallerytext"]}> gallery<span className={styles["alpha"]}> of Alpha Barber</span>
                 </div>  
                 <div className={styles["line"]}></div>
                  </div> 

  <div className={styles["gallerycontentcover"]}>
  <div className={styles["galaryimage"]}>
    <img src="./public/gallery1.jpg"/>
    <div className={styles["galaryshadow1"]}>
    <div className={styles["border1"]}>
    "Get the perfect look with our expert haircutting services. From trendy fades to timeless styles, also our  highly skilled barbers craft each cut with more precision and attention to detail."
    </div>
    </div>

    </div>


  <div className={styles["galaryimage"]}>
      <img src="./public/gallery2.jpg"/>
  
    <div className={styles["galaryshadow"]}>
    <div className={styles["border"]}>
    "Step into style even before you walk through our doors. Alpha Barber Shop welcomes you with a sleek, modern exterior that reflects our commitment to sharp looks and clean lines"
    </div>
    </div>
    </div>
  <div className={styles["galaryimage"]}>
       <img src="./public/gallery3.jpg"/>
   <div className={styles["galaryshadow"]}>
    <div className={styles["border"]}>
        "At Alpha Barber Shop, our dedication to precision and style has earned us the “Best Local Barber Experience” Award 2024. This recognition reflects our passion for delivering grooming services "
    </div>
    </div>
  </div>
 </div> 

      </div>  
      </section>   
    </>
  );
};

export default Gallery;
/**/