import styles from "./Footer.module.css";

const footerLinks = [
  "Audio and Subtitles",
  "Media Center",
  "Privacy",
  "Contact Us",
  "Audio Description",
  "Investor Relations",
  "Legal Notices",
  "Help Center",
  "Gift Cards",
  "Jobs",
  "Cookie Preferences",
  "Account",
  "Terms of Use",
  "Ways to Watch",
  "Corporate Information",
  "Only on Netflix",
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialIcons} aria-label="Netflix social media">
          <a
            href="https://www.facebook.com/netflix"
            aria-label="Netflix on Facebook"
          >
            f
          </a>
          <a
            href="https://www.instagram.com/netflix"
            aria-label="Netflix on Instagram"
          >
            ◎
          </a>
          <a href="https://twitter.com/netflix" aria-label="Netflix on X">
            𝕏
          </a>
          <a
            href="https://www.youtube.com/netflix"
            aria-label="Netflix on YouTube"
          >
            ▶
          </a>
        </div>
        <nav className={styles.linksGrid} aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>
        <button className={styles.serviceCode} type="button">
          Service Code
        </button>
        <p className={styles.copyright}>© 1997–2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
