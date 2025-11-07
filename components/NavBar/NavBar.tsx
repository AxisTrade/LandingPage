import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <header className={styles.wrap} role="banner">
        <div className={styles.nav} aria-label="Primary navigation">
          <div className={styles.inner}>
            <div className={styles.brand}>
              {/* <span className={styles.mark} aria-hidden /> */}
              {/* <span className={styles.word}>
                Axis<span>Trade</span>
              </span> */}
            </div>

            <nav className={styles.menu} aria-label="Main">
              <button className={styles.menuItem}>
                Solution 
              </button>
              <button className={styles.menuItem}>
                Product 
              </button>
              <button className={styles.menuItem}>About Us</button>
              <button className={styles.menuItem}>Contact Us</button>
            </nav>

            {/* <div className={styles.right}>
              <a className={styles.cta} href="#contact">
                Contact us <span className={styles.arrow}>➜</span>
              </a>
            </div> */}
          </div>
        </div>
      </header>


      <div className={styles.spacer} aria-hidden />
    </>
  );
}
