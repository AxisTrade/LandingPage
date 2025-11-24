// app/contact/page.tsx
"use client";

import { useState } from "react";
import styles from "../../styles/Contact.module.css";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export default function ContactPage() {
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setState({ status: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Something went wrong");
      }

      setState({ status: "success" });
      form.reset();
    } catch (err: any) {
      setState({ status: "error", message: err.message || "Network error" });
    }
  }

  return (
    <main className={styles.wrap}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroFog} />
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Contact</p>
          <h1 className={styles.h1}>Talk to AxisTrade</h1>
          <p className={styles.sub}>
            Share a bit about your sourcing workflow or logistics challenges and we’ll
            show you how AxisTrade can streamline your deals end-to-end.
          </p>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className={styles.grid}>
        {/* LEFT: FORM */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Send us a message</h2>

          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.row}>
              <label className={styles.label}>
                First name
                <input name="firstName" required className={styles.input} />
              </label>
              <label className={styles.label}>
                Last name
                <input name="lastName" required className={styles.input} />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.label}>
                Work email
                <input
                  type="email"
                  name="email"
                  required
                  inputMode="email"
                  className={styles.input}
                />
              </label>
              <label className={styles.label}>
                Company
                <input name="company" className={styles.input} />
              </label>
            </div>

        <label className={styles.label}>
  Topic
  <select name="topic" className={`${styles.input} ${styles.select}`}>
    <option value="demo">Request a demo</option>
    <option value="pricing">Pricing & plans</option>
    <option value="integration">Integrations</option>
    <option value="general">General question</option>
  </select>
</label>


            <label className={styles.label}>
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your routes, volumes, or current blockers…"
                className={styles.textarea}
              />
            </label>

            <div className={styles.actions}>
              <button
                type="submit"
                className={styles.primary}
                disabled={state.status === "submitting"}
              >
                {state.status === "submitting" ? "Sending…" : "Send message"}
              </button>
              <a href="mailto:info@axistrade.co.za" className={styles.ghost}>
                Email us directly
              </a>
            </div>

            {state.status === "success" && (
              <p className={styles.success}>Thanks! We’ll be in touch shortly.</p>
            )}
            {state.status === "error" && (
              <p className={styles.error}>Error: {state.message}</p>
            )}
          </form>
        </div>

      </section>
    </main>
  );
}
