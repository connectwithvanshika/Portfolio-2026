import { useEffect, useRef, useState } from 'react';

/**
 * Loader — award-winning cinematic underwater intro
 * - Full-screen deep-ocean background
 * - SVG whale swims across in ~2.5s
 * - Bubble particles float up
 * - Loading percentage counts to 100%
 * - Fades out after 3.5s, then unmounts
 */
export default function Loader({ onComplete }) {
  const [pct, setPct] = useState(0);
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Count 0 → 100 over ~3s
    const start = Date.now();
    const duration = 3000;
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(Math.round((elapsed / duration) * 100), 100);
      setPct(p);
      if (p >= 100) clearInterval(interval);
    }, 30);

    // Start fade at 3.5s
    const fadeTimer = setTimeout(() => setFading(true), 3500);

    // Unmount after fade completes
    const doneTimer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  // Bubble positions (static, CSS animated)
  const bubbles = [
    { left: '10%', delay: '0s',   size: 12, dur: '3.2s' },
    { left: '20%', delay: '0.4s', size: 8,  dur: '2.8s' },
    { left: '35%', delay: '0.8s', size: 16, dur: '3.8s' },
    { left: '50%', delay: '1.2s', size: 10, dur: '3s'   },
    { left: '65%', delay: '0.2s', size: 14, dur: '3.5s' },
    { left: '78%', delay: '0.6s', size: 7,  dur: '2.6s' },
    { left: '88%', delay: '1s',   size: 11, dur: '3.3s' },
    { left: '55%', delay: '1.5s', size: 9,  dur: '2.9s' },
    { left: '25%', delay: '1.8s', size: 6,  dur: '3.1s' },
    { left: '72%', delay: '0.3s', size: 13, dur: '3.6s' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'linear-gradient(180deg, #051018 0%, #0a2030 40%, #061520 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: fading ? 0 : 1,
        transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {/* Light ray behind whale */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '40%',
        width: '20%',
        height: '70%',
        background: 'linear-gradient(180deg, rgba(100,200,255,0.1) 0%, transparent 100%)',
        transform: 'skewX(-8deg)',
        pointerEvents: 'none',
        animation: 'loaderRayPulse 3s ease-in-out infinite',
      }} />

      {/* Whale SVG swimming across */}
      <div style={{
        position: 'absolute',
        top: '30%',
        animation: 'loaderWhaleSwim 4s ease-in-out forwards',
        pointerEvents: 'none',
      }}>
        <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
          {/* Whale body */}
          <ellipse cx="100" cy="42" rx="78" ry="28" fill="rgba(30,74,100,0.9)" />
          {/* Head */}
          <ellipse cx="168" cy="44" rx="20" ry="16" fill="rgba(25,65,90,0.9)" />
          {/* Tail */}
          <path d="M22 42 C10 30, 2 22, 5 18 C8 14, 18 28, 22 42Z" fill="rgba(25,65,88,0.85)" />
          <path d="M22 42 C10 54, 2 62, 5 66 C8 70, 18 56, 22 42Z" fill="rgba(25,65,88,0.85)" />
          {/* Dorsal fin */}
          <path d="M105 14 C115 6, 130 10, 130 20 L105 20Z" fill="rgba(20,58,82,0.9)" />
          {/* Pectoral fin */}
          <path d="M130 54 C150 70, 160 68, 155 55 C145 50, 135 50, 130 54Z" fill="rgba(20,55,80,0.8)" />
          {/* Eye */}
          <circle cx="160" cy="38" r="3" fill="rgba(150,220,255,0.8)" />
          <circle cx="160" cy="38" r="1.2" fill="white" opacity="0.9" />
          {/* Water spray */}
          <path d="M172 28 C174 18, 180 12, 178 8 M176 26 C180 16, 188 14, 186 8 M180 30 C184 20, 190 18, 192 12"
                stroke="rgba(120,200,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Belly highlight */}
          <ellipse cx="100" cy="58" rx="55" ry="10" fill="rgba(50,100,140,0.3)" />
        </svg>
      </div>

      {/* Bubbles */}
      {bubbles.map((b, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: b.left,
            width: b.size,
            height: b.size,
            borderRadius: '50%',
            border: '1.5px solid rgba(100,200,255,0.4)',
            background: 'rgba(100,200,255,0.08)',
            animation: `loaderBubbleRise ${b.dur} ${b.delay} ease-in infinite`,
          }}
        />
      ))}

      {/* Particle sparkles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={`spark-${i}`} style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: 2,
          height: 2,
          borderRadius: '50%',
          background: 'rgba(196,128,154,0.8)',
          animation: `loaderSparkle ${1.5 + Math.random() * 2}s ${Math.random() * 3}s ease-in-out infinite`,
        }} />
      ))}

      {/* Center content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Name */}
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          color: '#ffffff',
          marginBottom: '0.5rem',
          opacity: 0.95,
        }}>
          VANSHIKA YADAV
        </div>
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#c4809a',
          marginBottom: '3rem',
        }}>
          AI / ML Enthusiast
        </div>

        {/* Wave loading bar */}
        <div style={{
          width: 'min(320px, 80vw)',
          height: '2px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '2px',
          position: 'relative',
          margin: '0 auto 1.5rem',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #c4809a, #7ecfda)',
            borderRadius: '2px',
            transition: 'width 0.1s linear',
            boxShadow: '0 0 12px rgba(196,128,154,0.8)',
          }} />
        </div>

        {/* Percentage */}
        <div style={{
          fontFamily: "'Space Grotesk', monospace",
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.4)',
          letterSpacing: '0.15em',
        }}>
          {pct}%
        </div>
      </div>

      {/* CSS keyframes injected inline */}
      <style>{`
        @keyframes loaderWhaleSwim {
          0%   { transform: translateX(-130vw) translateY(0px); opacity: 0; }
          8%   { opacity: 1; }
          45%  { transform: translateX(-20vw) translateY(-15px); }
          55%  { transform: translateX(0vw) translateY(5px); }
          90%  { opacity: 0.8; }
          100% { transform: translateX(130vw) translateY(-10px); opacity: 0; }
        }
        @keyframes loaderBubbleRise {
          0%   { transform: translateY(0) scale(1); opacity: 0.6; }
          70%  { opacity: 0.4; }
          100% { transform: translateY(-100vh) scale(1.4); opacity: 0; }
        }
        @keyframes loaderSparkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50%       { opacity: 1; transform: scale(1.5); }
        }
        @keyframes loaderRayPulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
