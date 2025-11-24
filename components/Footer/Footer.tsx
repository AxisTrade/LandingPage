import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrap}>
      <div className={styles.inner}>
        {/* Logo row */}
        <div className={styles.logoRow}>
          <div className={styles.brand}>
            <Image
              src="/images/navBarLogo.png"
              alt="AxisTrade logo"
              width={28}
              height={28}
              className={styles.markImg}
              priority
            />
            <span className={styles.word}>
              Axis<span>Trade</span>
            </span>
          </div>
        </div>

        {/* Links row */}
        <div className={styles.linksRow}>
          <div className={styles.column}>
            <p className={styles.colIndex}>01 -</p>
            <ul className={styles.list}>
              <li>Privacy policy</li>
              <li>Terms of use</li>
              <li>Cookies policy</li>
              <li>Platform security</li>
              <li>Supplier code of conduct</li>
              <li>Get in touch</li>
            </ul>
          </div>

          <div className={styles.column}>
            <p className={styles.colIndex}>02 -</p>
            <ul className={styles.list}>
              <li>About us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Case studies</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className={styles.column}>
            <p className={styles.colIndex}>03 -</p>
            <ul className={styles.list}>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Copyright row */}
        <div className={styles.bottomRow}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} AxisTrade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
