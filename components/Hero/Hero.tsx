import styles from "./Hero.module.css";

type Props = {
  bgSrc?: string;
};

export default function Hero({ bgSrc = "/hero/heroimage.jpg" }: Props) {
  return (
    // heroTuck is optional – use it if you want the nav pill to overlap the hero
    <section className={`${styles.wrap} ${styles.heroTuck}`}>
      <img src={bgSrc} alt="Hero Background" className={styles.bg} />
      <div className={styles.vignette} />
      <div className={styles.fog} />

      {/* Content frame */}
      <div className={styles.frame}>
        <div className={styles.left}>
          <h1 className={styles.h1}>
            CONNECTING MINING SUPPLIERS & BUYERS
            <br />
            ON <span className={styles.highlight}>ONE PLATFORM</span>
          </h1>

          <div className={styles.ctas}>
            <a  href="/about" className={styles.ctaPrimary}>Learn More</a>
  
          </div>
        </div>
      </div>
    </section>
  );
}
