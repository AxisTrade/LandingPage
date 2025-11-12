import Link from "next/link";
import styles from "./Feature.module.css";

const FEATURES = [
  {
    id: 1,
    title: "ENABLE EASY ACCESS FOR EVERYONE",
    description:
      "Give your teams a single, intuitive place to discover verified mining suppliers, compare offers, and secure contracts with confidence.",
    image: "/features/feature-1.jpg",
    url: "/features/easy-access",
  },
  {
    id: 2,
    title: "UNDERSTAND THE FULL SUPPLY JOURNEY",
    description:
      "Track shipments from pit to port with real-time status, standardized documentation, and a complete audit trail for every transaction.",
    image: "/features/feature-2.jpg",
    url: "/features/supply-journey",
  },
  {
    id: 3,
    title: "TURN INSIGHTS INTO BETTER DEALS",
    description:
      "Use pricing history, performance metrics, and market data to negotiate smarter, reduce risk, and unlock new trading opportunities.",
    image: "/features/feature-3.jpg",
    url: "/features/insights-to-deals",
  },
];

export default function Feature() {
  return (
    <section id="features" className={styles.wrap}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>FEATURES</p>
          <h2 className={styles.title}>
            EXPLORE THE CORE FUNCTIONALITY
            <br />
            OF THE AXISTRADE PLATFORM.
          </h2>
        </header>

        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <article key={f.id} className={styles.card}>
              <div
                className={styles.cardBg}
                style={{ backgroundImage: `url(${f.image})` }}
                aria-hidden="true"
              />
              <div className={styles.cardOverlay} aria-hidden="true" />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardBody}>{f.description}</p>

                {/* Use Link, not button+href */}
                <Link href={f.url} className={styles.cardButton}>
                  Learn more <span className={styles.arrow}>➜</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
