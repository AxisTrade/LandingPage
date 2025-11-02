import styles from "./Solutions.module.css";

const items = [
  {
    tag: "Efficiency",
    title: "Reduce procurement time and complexity",
    copy:
      "Streamline supplier selection with verified industry partners.",
    img: "/images/benefits-collab.jpg",
    alt: "Colleagues collaborating on a laptop",
  },
  {
    tag: "Trust",
    title: "Comprehensive risk management for buyers",
    copy:
      "Mitigate risks through detailed supplier background checks.",
    img: "/images/benefits-dashboard.jpg",
    alt: "Laptop on table with procurement dashboard",
  },
];

export default function Solutions() {
  return (
    <section className={styles.wrap} id="benefits">
      <div className="container">
        <header className={styles.head}>
          <span className={styles.kicker}>Benefits</span>
          <h2>Empowering mining industry connections</h2>
          <p>Simplify procurement with transparent and secure trading solutions</p>
        </header>

        <div className={styles.grid}>
          {items.map((b) => (
            <article className={styles.card} key={b.tag}>
              <div className={styles.body}>
                <span className={styles.tag}>{b.tag}</span>
                <h3>{b.title}</h3>
                <p>{b.copy}</p>
                <a className={styles.link} href="#">
                  Learn more <span>›</span>
                </a>
              </div>

              <div className={styles.media}>
                <img src={b.img} alt={b.alt} />
                <div className={styles.fade} aria-hidden />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
