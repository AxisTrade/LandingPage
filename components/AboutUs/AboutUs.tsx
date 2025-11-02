import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={styles.shell}>
      <div className="container">
        <div className={styles.frame}>
          {/* left column */}
          <div className={styles.left}>
            <h2 className={styles.title}>
              About <span>AxisTrade</span>
            </h2>
            <p className={styles.blurb}>
              We’re a South African mining ecommerce platform connecting buyers with verified
              suppliers. Our marketplace blends compliance checks, digital quotes and escrow so
              procurement is faster, safer and transparent.
            </p>

            <div className={styles.kpis}>
              <div>
                <strong>250+</strong>
                <span>Verified suppliers</span>
              </div>
              <div>
                <strong>3k+</strong>
                <span>Catalogue SKUs</span>
              </div>
              <div>
                <strong>48h</strong>
                <span>Avg. fulfilment</span>
              </div>
            </div>

            <div className={styles.actions}>
              <a className={styles.btn} href="#">Company Profile ↓</a>
              <a className={`${styles.btn} ${styles.ghost}`} href="#">Sustainability</a>
            </div>
          </div>

          {/* right column visual */}
          <div className={styles.right} aria-hidden>
            <div className={styles.mosaic}>
              <div /><div /><div /><div /><div /><div />
            </div>
            <div className={styles.caption}>Local supply • KYC • Escrow • Logistics</div>
          </div>

          <div className={styles.divider} />
        </div>
      </div>
    </section>
  );
}
