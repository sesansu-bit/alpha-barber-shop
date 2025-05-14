import styles from "./form.module.css";

const Form = () => {

  return (
    <>
    <section>
    <div className={styles["gallerycover"]}>
        <div className={styles["gallerytitle"]}>
                 <div className={styles["gallerytext"]}> <span className={styles["alpha"]}> Contact Us</span>
                     </div>  
                     <div className={styles["line"]}></div>
                      </div> 
      <div className={styles["gallerycontentcover"]}>
      <div className={styles["address"]}>
      <div className={styles["addresscover"]}>Address</div>
      <div className={styles["realaddress"]}>518 Acme St unit 101, Denton, TX 76205, United States</div>

      <div className={styles["phonecover"]}>Phone</div>
      <div className={styles["realcover"]}>+19408081569</div>

      <div className={styles["timecover"]}>Business Hours</div>
      <div className={styles["realtime"]}>Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM, Sun: Closed</div>


      </div>
      <div className={styles["formdatacover"]}>
      <form>

      <div className={styles["formname"]}>Your Name</div>
      <div className={styles["inputname"]}><input type="text" placeholder="Enter Your Name" required/></div>
      <div className={styles["formname"]}>Your Number</div>
      <div className={styles["inputname"]}><input type="number"placeholder="Enter Your Number" required/></div>
      <div className={styles["formname"]}>Service Interseted</div>
      <div className={styles["inputname"]}><input type="text" placeholder="Enter Your Interest" required/></div>
      <div className={styles["formname"]}>Prefered date</div>
      <div className={styles["inputnamedate"]}><input type="date" required/></div>
      <div className={styles["formname"]}>Message</div>
      <div className={styles["textareadata"]}> <textarea placeholder="Tell Something About Which Style You Like"/></div> 
      <button type="submit"className={styles["submit"]}>Submit</button>
      </form>

      </div>
   
      </div>
         </div>
   
      </section>   
    </>
  );
};

export default Form;