import styles from './Activity1.module.css';

function Activity1() {
  return (
    <div className={styles.activity1}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navBrand}>MCCJ.</div>
        <div className={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Header Section */}
      <section id="home" className={styles.header}>
        <h1>Welcome to Our Site</h1>
        <p>Simple, clean, and effective landing page for your business.</p>
        <button className={styles.btnPrimary}>Get Started</button>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <h2>About Us</h2>
        <p>We create beautiful and functional websites that help businesses grow. Our team is dedicated to delivering quality work with a focus on user experience.</p>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>Easy to Use</h3>
          <p>Simple interface that anyone can navigate.</p>
        </div>
        <div className={styles.feature}>
          <h3>Fast Performance</h3>
          <p>Optimized for speed and reliability.</p>
        </div>
        <div className={styles.feature}>
          <h3>24/7 Support</h3>
          <p>We're here when you need us.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <h2>Contact Us</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit" className={styles.btnPrimary}>Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2026 MCCJ. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Activity1;