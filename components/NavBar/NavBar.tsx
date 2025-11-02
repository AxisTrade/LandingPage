import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <header className={styles.wrap} role="banner">
        <div className="container">
          <div className={styles.pill} aria-label="Primary navigation">
            <div className={styles.brand}>
              <span className={styles.mark} aria-hidden />
              <span className={styles.word}>Axis<span>Trade</span></span>
            </div>

            <nav className={styles.links} aria-label="Main">
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#features">Features</a>
            </nav>

            <div className={styles.actions}>
              <a className={styles.signin} href="#">Sign in</a>
              <a className={styles.cta} href="#contact">Get Started</a>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer: if you want the hero to appear UNDER the pill, set this to 0 in CSS (see Section 2). */}
      <div className={styles.spacer} aria-hidden />
    </>
  );
}
