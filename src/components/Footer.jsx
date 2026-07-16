import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode , SiKaggle} from 'react-icons/si';

const Footer = () => (
  <footer id="contact" className="footer-section">
    <div className="container">
      <span className="footer-label">Let's collaborate</span>

      <h2 className="footer-big">
        let's&nbsp;<a href="mailto:vanshika.yadav2024@nst.rishihood.edu.in">talk.</a>
      </h2>

      <p className="footer-sub">
        Open to internships, freelance, and full-time AI/ML roles.
      </p>

      <div className="footer-socials" aria-label="Social links">
        <a
          href="mailto:vanshika.connects@gmail.com"
          className="footer-social-btn"
          id="footer-email-btn"
          aria-label="Send Email"
        >
          <FiMail /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/vanshika-y-a4702a304/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-btn"
          id="footer-linkedin-btn"
          aria-label="LinkedIn"
        >
          <FiLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/connectwithvanshika"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-btn"
          id="footer-github-btn"
          aria-label="GitHub"
        >
          <FiGithub /> GitHub
        </a>
        <a
          href="https://leetcode.com/u/vanshika_bytes/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-btn"
          id="footer-leetcode-btn"
          aria-label="LeetCode"
        >
          <SiLeetcode /> LeetCode
        </a>
        <a
            href="https://www.kaggle.com/crystalbaby"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            id="footer-kaggle-btn"
            aria-label="Kaggle"
          >
            <SiKaggle /> Kaggle
          </a>
      </div>

      <p className="footer-credit">
        © {new Date().getFullYear()} Vanshika Yadav · Built with React &amp; ♥
      </p>
    </div>
  </footer>
);

export default Footer;
