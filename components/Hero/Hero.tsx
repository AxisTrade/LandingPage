import styles from "./Hero.module.css";

type Props = {
  bgSrc?: string;
};

export default function Hero({ bgSrc = "/images/hero-mine.jpg" }: Props) {
  return (
    <section className={styles.wrap} aria-label="Hero">
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${bgSrc})` }}
        aria-hidden
      />

      <div className={styles.vignette} aria-hidden />
      <div className={styles.fog} aria-hidden />

      <div className={`container ${styles.frame}`}>
        {/* Left copy */}
        <div className={styles.left}>
          <h1 className={styles.h1}>
            Streamline mining
            <br />
            supply chains with
            <br />
            trusted
            <br />
            verification
          </h1>

          <div className={styles.ctas}>
            <a className={styles.ctaPrimary} href="#explore">Explore</a>
            <a className={styles.ctaGhost} href="#learn">Learn</a>
          </div>
        </div>
        <p className={styles.caption}>
          AxisTrade connects mining buyers and sellers through rigorous supplier
          vetting. We transform complex procurement into simple, secure
          transactions.
        </p>
      </div>
    </section>
  );
}
