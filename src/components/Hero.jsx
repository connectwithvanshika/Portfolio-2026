import { useRef, useEffect, useState } from 'react';
import { FiArrowDown, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

/* ── Falling Stars Canvas ───────────────────────────────── */
const StarCanvas = ({ active }) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    if (!active) {
      cancelAnimationFrame(rafRef.current);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starsRef.current = [];
      return;
    }

    const spawnStar = () => {
      starsRef.current.push({
        x: Math.random() * canvas.width,
        y: -12,
        size: Math.random() * 2.5 + 0.5,
        speedY: Math.random() * 2.5 + 1.2,
        speedX: (Math.random() - 0.5) * 0.6,
        opacity: 0.9,
        decay: Math.random() * 0.012 + 0.006,
        twinkle: Math.random() > 0.6,
        twinkleSpeed: Math.random() * 0.08 + 0.03,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    };

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (frame % 2 === 0) spawnStar();
      frame++;

      starsRef.current = starsRef.current.filter((s) => s.opacity > 0 && s.y < canvas.height + 20);

      starsRef.current.forEach((s) => {
        s.y += s.speedY;
        s.x += s.speedX;
        s.opacity -= s.decay;
        s.twinklePhase += s.twinkleSpeed;

        const alpha = s.twinkle
          ? s.opacity * (0.6 + 0.4 * Math.sin(s.twinklePhase))
          : s.opacity;

        ctx.save();
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.fillStyle = '#f0d0dc';

        // 4-pointed star shape
        const r = s.size;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y - r * 2.5);
        ctx.lineTo(s.x + r * 0.5, s.y - r * 0.5);
        ctx.lineTo(s.x + r * 2.5, s.y);
        ctx.lineTo(s.x + r * 0.5, s.y + r * 0.5);
        ctx.lineTo(s.x, s.y + r * 2.5);
        ctx.lineTo(s.x - r * 0.5, s.y + r * 0.5);
        ctx.lineTo(s.x - r * 2.5, s.y);
        ctx.lineTo(s.x - r * 0.5, s.y - r * 0.5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(rafRef.current);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starsRef.current = [];
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10,
        borderRadius: 'inherit',
      }}
    />
  );
};

/* ── Hero ───────────────────────────────────────────────── */
const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* ══ SECTION 1: Fullscreen — just photo + VANSHIKA ══ */}
      <section className="hero-splash" id="home" aria-label="Hero">
        {/* Giant VANSHIKA watermark — behind everything */}
        <div className="splash-name-watermark" aria-hidden="true">VANSHIKA</div>

        {/* Centered photo */}
        <div
          className={`splash-photo-wrap ${hovered ? 'hovered' : ''}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <StarCanvas active={hovered} />
          <img
            src="/profile.jpg"
            alt="Vanshika Yadav"
            className="splash-photo"
            onError={(e) => {
              e.target.src =
                'https://ui-avatars.com/api/?name=Vanshika+Yadav&size=600&background=2a2a2a&color=f0d0dc&bold=true&font-size=0.28';
            }}
          />
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
