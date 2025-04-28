import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <h2 className={styles.welcome}>WELCOME TO PIXOVA LITE</h2>
      <div className={styles.line}></div>
      <h1 className={styles.title}>Free & Modern One-Page Parallax<br />WordPress Theme</h1>
      <p className={styles.subtitle}>
        Your cool business headline here. You can even 
        <a href="#"> insert HTML here & images</a>. Lorem ipsum dolor sit amet lorem dolor sit amet.
      </p>
      <div className={styles.buttons}>
        <button className={styles.learnMore}>LEARN MORE</button>
        <button className={styles.contactUs}>CONTACT US</button>
      </div>
    </section>
  );
};

export default Banner;