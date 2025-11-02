import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <section className={styles.wrap} id="get-started">
      <div className="container">
        <div className={styles.card}>
          {/* background photo */}
          {/* <div
            className={styles.bg}
            style={{ backgroundImage: 'url(/images/cta-laptop.jpg)' }}
            aria-hidden
          /> */}
          {/* soft blur/frosted overlay */}
          <div className={styles.glass} aria-hidden />

          <div className={styles.content}>
            <h2>Ready to transform your mining procurement?</h2>
            <p>
              Join AxisTrade and unlock a network of verified suppliers and seamless
              trading solutions for the mining industry.
            </p>

            <div className={styles.actions}>
              <a className={styles.btn} href="#contact">Sign up</a>
              <a className={styles.btnGhost} href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
