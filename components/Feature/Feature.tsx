import styles from "./Feature.module.css";

export default function Feature() {
  return (
    <section className={styles.wrap} id="features">
      <div className="container">
        <div className={styles.head}>
          <span className={styles.kicker}>Reliable</span>
          <h2>Comprehensive mining<br />marketplace solutions</h2>
          <p>Transforming how mining businesses source and verify suppliers</p>
        </div>

        <div className={styles.grid}>
          {/* Card 1 — split text/media */}
          <article className={`${styles.card} ${styles.cardSplit}`}>
            <div className={styles.cardBody}>
              <span className={styles.tag}>Vetting</span>
              <h3>Rigorous supplier<br />verification process</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className={styles.link}>
                Verify <span>›</span>
              </a>
            </div>
            <div className={styles.cardMedia} aria-hidden>
              {/* <div className={styles.mediaIcon}>🖼️</div> */}
            </div>
          </article>

          {/* Card 2 — top content, bottom media */}
          <article className={`${styles.card} ${styles.cardStack}`}>
            <div className={styles.cardBody}>
              <span className={styles.tag}>Tagline</span>
              <h3>Short heading<br />here</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className={styles.link}>
                Explore <span>›</span>
              </a>
            </div>
            <div className={styles.cardStrip} aria-hidden>
              {/* <div className={styles.stripIcon}>🖼️</div> */}
            </div>
          </article>

          {/* Card 3 — top content, bottom media */}
          <article className={`${styles.card} ${styles.cardStack}`}>
            <div className={styles.cardBody}>
              <span className={styles.tag}>Tagline</span>
              <h3>Short heading<br />here</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className={styles.link}>
                Discover <span>›</span>
              </a>
            </div>
            <div className={styles.cardStrip} aria-hidden>
              {/* <div className={styles.stripIcon}>🖼️</div> */}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
