import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <header className={styles.wrap} role="banner">
        <div className={styles.nav} aria-label="Primary navigation">
          <div className={styles.inner}>
            <div className={styles.brand}>{/* logo etc. */}</div>

            <nav className={styles.menu} aria-label="Main">
     <a className={styles.menuItem} href="#about">
                About Us
              </a>
              <a className={styles.menuItem} href="#features">
                Features
              </a>
            
              <a className={styles.menuItem} href="#contact">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className={styles.spacer} aria-hidden />
    </>
  );
}
