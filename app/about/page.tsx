import styles from "../../styles/History.module.css";
import Image from "next/image";
type TimelineItem = {
  year: string;
  title: string;
  body: string;
};

const TIMELINE: TimelineItem[] = [
  { year: "2019", title: "Idea & Pilot",
    body: "Initial concept: a trusted workspace for mining buyers and suppliers; pilot with two regional partners." },
  { year: "2020", title: "First Trades",
    body: "Executed first digital offtake agreements; introduced verified supplier profiles and escrow flows." },
  { year: "2022", title: "Global Routing & Tracking",
    body: "Added pit-to-port visibility, milestone tracking, and standardized document packs." },
  { year: "2024", title: "AxisTrade Platform 2.0",
    body: "Analytics, pricing history, and API integrations with ERPs and logistics partners." },
  { year: "Today", title: "Scale & Partnerships",
    body: "Expanding market access, compliance tooling, and risk insights across commodities." },
];

export default function History() {
  return (
    <main className={styles.wrap}>
      {/* Top hero */}
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.heroInner}>
          <p className={styles.kicker}>About</p>
          <h1 className={styles.h1}>The AxisTrade Story</h1>
          <p className={styles.sub}>
            From a simple idea—reduce risk and friction in cross-border mineral deals—
            to a platform connecting verified suppliers and buyers worldwide.
          </p>
        </div>
      </section>
      <section className={styles.snapshot}>
        <div className={styles.snapInner}>
          <div className={styles.snapText}>
            <h2>Our mission</h2>
            <p>
              To bring transparency, trust, and speed to commodity trading.
              AxisTrade standardizes onboarding, secures transactions, and
              provides real-time visibility across the supply chain.
            </p>
            <div className={styles.stats}>
              <div><strong>40+</strong><span>verified partners</span></div>
              <div><strong>12</strong><span>countries</span></div>
              <div><strong>100%</strong><span>escrowed trades</span></div>
            </div>
          </div>
             <div className={styles.snapMedia} aria-hidden>
            <Image
              src="/images/aboutis.jpg"
              alt="AxisTrade pit-to-port routing network"
              className={styles.mediaImg}
              width={640}
              height={360}
            />
        </div>
        </div>  
      </section>




      <section className={styles.values}>
        <h2>What we stand for</h2>
        <div className={styles.valuesGrid}>
          <article>
            <h3>Verification first</h3>
            <p>Trust begins with identity, documentation, and track record.</p>
          </article>
          <article>
            <h3>Transparency</h3>
            <p>Clear pricing, visible milestones, and audit trails by default.</p>
          </article>
          <article>
            <h3>Speed with control</h3>
            <p>Faster cycles without compromising compliance or risk.</p>
          </article>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaBox}>
          <h2>See AxisTrade in action</h2>
          <p>Tell us about your sourcing workflow and we’ll tailor a demo.</p>
          <div className={styles.ctaRow}>
            <a className={styles.primary} href="/contact">Book a demo</a>
          </div>
        </div>
      </section>
    </main>
  );
}
