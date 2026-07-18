import { FiArrowDown, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiKaggle } from "react-icons/si";

const Hero = () => {
  return (
    <>
      {/* ══ SECTION 1: Fullscreen Magazine Cover ══ */}
      <section className="hero-splash" id="home" aria-label="Hero Cover">
        <div className="splash-magazine-frame">
          {/* Top metadata tags */}
          <div className="splash-meta-header">
            <span className="meta-tag">Creative Developer</span>
            <span className="meta-tag">AI/ML Analyst</span>
            <span className="meta-tag">Est. 2024</span>
          </div>

          {/* Giant Title "VANSHIKA" - layered behind the photo slightly */}
          <h1 className="splash-magazine-title">VANSHIKA</h1>

          {/* Centered vertical poster image */}
          <div className="splash-poster-container">
            <img
              src="/profile.jpg"
              alt="Vanshika Yadav"
              className="splash-poster-image"
              onError={(e) => {
                e.target.src =
                  'https://ui-avatars.com/api/?name=Vanshika+Yadav&size=800&background=161616&color=e8b4c8&bold=true&font-size=0.25';
              }}
            />
            {/* Custom overlay/badge inside photo */}
            <div className="poster-badge" aria-hidden="true">
              <span className="badge-dot"></span>
              <span className="badge-text">Explore my work</span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a href="#hero-info" className="scroll-cue" aria-label="Scroll down">
          <FiArrowDown />
        </a>
      </section>

      {/* ══ SECTION 2: Info — scrolls below the fold ══ */}
      <section className="hero-info" id="hero-info" aria-label="Introduction">
        <div className="container hero-info-inner">
          <p className="hero-label">Available for Freelancing and Project opportunities</p>

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
            <a
                    href="https://www.kaggle.com/crystalbaby"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                    id="hero-kaggle"
                    aria-label="Kaggle"
                  >
                    <SiKaggle />
                  </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3><span>10</span>+</h3>
              <p>ML Projects Shipped</p>
            </div>
            <div className="stat-item">
              <h3><span>16+</span></h3>
              <p>Open Source PRs merged during Hacktober Fest</p>
            </div>
            <div className="stat-item">
              <h3><span>8.2</span></h3>
              <p>SGPA at NST</p>
            </div>
            <div className="stat-item">
                <h3><span>3</span>+</h3>
                <p>Freelance Projects in Progress</p>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
