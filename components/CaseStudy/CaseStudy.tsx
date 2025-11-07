import styles from "./CaseStudy.module.css";

const CASES = [
  {
    id: 1,
    title: "African copper supplier joins AxisTrade to digitise long-term offtake deals.",
    image: "/cases/case-1.jpg",
    date: "APR 12, 2024",
  },
  {
    id: 2,
    title: "Reducing contract risk with transparent shipment milestones and audit trails.",
    image: "/cases/case-2.jpg",
    date: "APR 12, 2024",
  },
  {
    id: 3,
    title: "Coordinating multi-mine sourcing on a single trading workspace.",
    image: "/cases/case-3.jpg",
    date: "APR 12, 2024",
  },
  {
    id: 4,
    title: "Automating document flows from pit to port for bulk commodities.",
    image: "/cases/case-4.jpg",
    date: "APR 12, 2024",
  },
  {
    id: 5,
    title: "Unlocking new buyers with verified supplier profiles and market access.",
    image: "/cases/case-5.jpg",
    date: "APR 12, 2024",
  },
  {
    id: 6,
    title: "Building trust in cross-border deals through end-to-end visibility.",
    image: "/cases/case-6.jpg",
    date: "APR 12, 2024",
  },
];

export default function CaseStudy() {
  return (
    <section id="case-studies" className={styles.wrap}>
      <div className={styles.inner}>
        {/* Header row */}
        <header className={styles.header}>
          <p className={styles.kicker}>CASE STUDIES</p>
          <button className={styles.headerCta}>
            Learn more <span className={styles.arrow}>➜</span>
          </button>
        </header>

        {/* 3x2 grid */}
        <div className={styles.grid}>
          {CASES.map((c) => (
            <article key={c.id} className={styles.card}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${c.image})` }}
                aria-hidden="true"
              />
              <div className={styles.cardBody}>
                <p className={styles.cardMeta}>
                  CASE STUDY &nbsp;·&nbsp; {c.date}
                </p>
                <h3 className={styles.cardTitle}>{c.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* Center button */}
        <div className={styles.centerCtaWrap}>
          <button className={styles.centerCta}>
            Learn more <span className={styles.arrow}>➜</span>
          </button>
        </div>
      </div>
    </section>
  );
}
