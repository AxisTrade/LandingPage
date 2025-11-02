"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrap}>
      <div className="container">
        <div className={styles.top}>
          {/* Brand + newsletter */}
          <div className={styles.brandCol}>
            <div>AxisTrade</div>
            <p>
              Stay informed about the latest mining marketplace insights and
              updates
            </p>

            <form
              className={styles.news}
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <input
                className={styles.input}
                type="email"
                placeholder="Email address"
                required
              />
              <button className={styles.submit} type="submit">Subscribe</button>
            </form>

            <small className={styles.small}>
              By subscribing, you agree to our privacy policy and consent to
              receive updates.
            </small>
          </div>

          {/* Link columns */}
          <div className={styles.cols}>
            <div>
              <h4>Company</h4>
              <a href="#">About us</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#contact">Contact</a>
              <a href="#">Services</a>
            </div>

            <div>
              <h4>Resources</h4>
              <a href="#">Blog</a>
              <a href="#">Guides</a>
              <a href="#">Webinars</a>
              <a href="#">Case studies</a>
              <a href="#">Support</a>
            </div>

            <div>
              <h4>Follow us</h4>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">X</a>
              <a href="#">LinkedIn</a>
              <a href="#">Youtube</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <small>© {new Date().getFullYear()} AxisTrade. All rights reserved.</small>
          <div className={styles.legal}>
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Cookie settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
