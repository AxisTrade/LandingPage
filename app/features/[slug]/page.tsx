import { notFound } from "next/navigation";
import Link from "next/link";
import { getFeatureBySlug, FEATURES } from "../../../lib/features";
import styles from "../../../styles/Features.module.css";


type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return FEATURES.map((f) => ({ slug: f.slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;               // <-- important fix
  const f = getFeatureBySlug(slug);
  if (!f) return notFound();

  return (
    <main className={styles.wrap}>
      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: `url(${f.image})` }}
          aria-hidden
        />
        <div className={styles.heroFog} />
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Feature</p>
          <h1 className={styles.h1}>{f.title}</h1>
          <p className={styles.sub}>{f.tagline}</p>
          {/* <div className={styles.ctas}>
            <Link href="/contact" className={styles.primary}>Request a demo</Link>
          </div> */}
        </div>
      </section>

      {/* BODY */}
      <section className={styles.body}>
        <div className={styles.lead}>
          <h2>What you get</h2>
          <p>{f.excerpt}</p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Capabilities</h3>
            <ul className={styles.list}>
              {f.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </article>

          <article className={styles.card}>
            <h3>Outcomes</h3>
            <div className={styles.outcomes}>
              {f.outcomes.map((o, i) => (
                <div key={i} className={styles.outcome}>
                  <strong>{o.value}</strong>
                  <span>{o.label}</span>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.card}>
            <h3>Integrations</h3>
            <p>
              AxisTrade connects with your ERP, TMS, and data lake. Use our APIs
              or pre-built connectors.
            </p>
            <div className={styles.badges}>
              <span>SAP</span><span>Oracle</span><span>Dynamics</span><span>Snowflake</span>
            </div>
          </article>
        </div>
      </section>

      {/* CTA BAND */}
      <section className={styles.band}>
        <div className={styles.bandInner}>
          <h2>Ready to try “{f.title}”?</h2>
          <p>Tell us about your routes and we’ll tailor a walkthrough.</p>
          <div className={styles.ctas}>
            <Link href="/contact" className={styles.primary}>Talk to us</Link>
            <Link href="/about" className={styles.ghost}>Learn about AxisTrade</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
