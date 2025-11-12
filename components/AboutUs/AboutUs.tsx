import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section id="about" className={styles.wrap}>
      <div className={styles.inner}>
        {/* LEFT: label + title */}
        <div className={styles.left}>
          <p className={styles.kicker}>ABOUT</p>
          <h2 className={styles.heading}>WHY AXISTRADE?</h2>
        </div>

        {/* RIGHT: copy + CTAs */}
        <div className={styles.right}>
          {/* top accent line */}
          <div className={styles.accentTop} aria-hidden="true" />

          <p className={styles.body}>
            AxisTrade connects verified mining suppliers and buyers on a single,
            trusted platform. We simplify complex global deals with transparent
            pricing, secure transactions, and real-time visibility across the
            entire supply chain. By combining industry expertise with modern
            technology, we help partners reduce risk, unlock new markets, and
            move commodities with confidence.
          </p>

          <div className={styles.actions}>
         <a href="/about" className={styles.primary}>
  Learn more <span className={styles.arrow}>➜</span>
</a>

          </div>
          <div className={styles.accentBottom} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
