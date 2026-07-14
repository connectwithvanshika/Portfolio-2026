import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="social-links">
          <a href="mailto:vanshika.yadav2024@nst.rishihood.edu.in" target="_blank" rel="noopener noreferrer">
            <FiMail />
          </a>
          <a href="https://www.linkedin.com/in/vanshika-y-a4702a304/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
          <a href="https://github.com/connectwithvanshika" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Vanshika Yadav. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
