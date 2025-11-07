import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <section id="contact" className={styles.wrap}>
      <div className={styles.inner}>
        {/* Top meta row */}
        <header className={styles.topRow}>
          <div className={styles.stepLabel}>
            {/* <span className={styles.stepIndex}>03</span> */}
            <span className={styles.stepText}>ONE PLATFORM, COUNTLESS INSIGHTS</span>
          </div>
          <button className={styles.topCta}>
            Learn more <span className={styles.arrow}>➜</span>
          </button>
        </header>

        {/* Main visual + headline */}
        <div className={styles.heroBlock}>
          <div className={styles.heroHeading}>
            <h2 className={styles.h2}>
              CONNECT YOUR ENTIRE
              <br />
              SUPPLY ECOSYSTEM
            </h2>
          </div>
          <div
            className={styles.heroImage}
            aria-hidden="true"
            style={{ backgroundImage: "url(/contact/axis-ecosystem.jpg)" }} // swap to your image
          />
        </div>

        {/* Process cards (how AxisTrade works) */}
        <div className={styles.processRow}>
          <article className={styles.processCard}>
            <h3 className={styles.processTitle}>MODULAR ONBOARDING</h3>
            <p className={styles.processBody}>
              Placeholder: Explain how suppliers and buyers are verified and onboarded into the AxisTrade
              network with standardized profiles and documentation.
            </p>
          </article>

          <article className={styles.processCard}>
            <h3 className={styles.processTitle}>SMART DEAL WORKFLOWS</h3>
            <p className={styles.processBody}>
              Placeholder: Describe how inquiries turn into structured offers, negotiated terms, and secure
              contracts on a single platform.
            </p>
          </article>

          <article className={styles.processCard}>
            <h3 className={styles.processTitle}>END-TO-END VISIBILITY</h3>
            <p className={styles.processBody}>
              Placeholder: Outline how shipments are tracked from pit to port, with real-time status and a
              full audit trail.
            </p>
          </article>
        </div>

        {/* Bottom quote + contact CTA */}
        <div className={styles.bottomRow}>
          <div className={styles.quoteBlock}>
            <p className={styles.quoteText}>
              “Placeholder quote about AxisTrade simplifying complex mining deals, bringing transparency to
              every transaction, and helping teams move faster with less risk.”
            </p>
            <p className={styles.quoteAuthor}>— Placeholder Customer, Title, Company</p>
          </div>

          <div className={styles.contactBlock}>
            <p className={styles.contactKicker}>Get in touch</p>
            <h3 className={styles.contactTitle}>Contact us</h3>
            <p className={styles.contactBody}>
              Share a bit about your supply chain or sourcing challenges and we’ll show you how AxisTrade
              can streamline your deals end-to-end.
            </p>
            <button className={styles.contactButton}>
              Try now <span className={styles.arrow}>➜</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
