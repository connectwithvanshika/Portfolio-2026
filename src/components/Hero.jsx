import { FiArrowDown, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <>
      {/* ══ SECTION 1: Fullscreen — just photo + VANSHIKA text ══ */}
      <section className="hero-splash" id="home" aria-label="Hero">
        {/* Fullscreen background image */}
        <div className="splash-bg-container">
          <img
            src="/profile.jpg"
            alt="Vanshika Yadav"
            className="splash-bg-image"
            onError={(e) => {
              e.target.src =
                'https://ui-avatars.com/api/?name=Vanshika+Yadav&size=1200&background=111111&color=e8b4c8&bold=true&font-size=0.25';
            }}
          />
          {/* Subtle gradient overlay to blend into the dark theme and highlight text */}
          <div className="splash-overlay" aria-hidden="true" />
        </div>

        {/* Big name overlay - positioned near chest/bottom area to avoid face collision */}
        <div className="splash-name-container">
          <h1 className="splash-name-title">
            <span className="name-word-bg">VANSHIKA</span>
          </h1>
        </div>

        {/* Scroll cue */}
        <a href="#hero-info" className="scroll-cue" aria-label="Scroll down">
          <FiArrowDown />
        </a>
      </section>

      {/* ══ SECTION 2: Info — scrolls below the fold ══ */}
      <section className="hero-info" id="hero-info" aria-label="Introduction">
        <div className="container hero-info-inner">
          <p className="hero-label">Available for opportunities</p>

          <h1 className="hero-title">
            <span className="name-line">Vanshika</span>
            <span className="name-line dim">Yadav</span>
            <span className="role-line">AI/ML Enthusiast &amp; Data Analyst</span>
          </h1>

          <p className="hero-desc">
            Building intelligent AI systems with LLMs, RAG, LangChain &amp; AI Agents.
            Passionate about Analytics, Visualization &amp; AI‑Powered Applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" id="hero-view-work-btn" className="btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a href="#contact" id="hero-contact-btn" className="btn-outline">
              Get In Touch
            </a>
          </div>

          <div className="hero-socials" aria-label="Social links">
            <a href="https://github.com/connectwithvanshika" target="_blank" rel="noopener noreferrer" className="social-pill" id="hero-github" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/vanshika-y-a4702a304/" target="_blank" rel="noopener noreferrer" className="social-pill" id="hero-linkedin" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:vanshika.yadav2024@nst.rishihood.edu.in" className="social-pill" id="hero-email" aria-label="Email">
              <FiMail />
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3><span>5</span>+</h3>
              <p>ML Projects Shipped</p>
            </div>
            <div className="stat-item">
              <h3><span>16</span></h3>
              <p>Open Source PRs</p>
            </div>
            <div className="stat-item">
              <h3><span>7.7</span></h3>
              <p>GPA at NST</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
