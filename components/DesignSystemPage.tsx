import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface DesignSystemPageProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  images: Record<string, string>;
  onNavigateHome: () => void;
  onNavigate: (page: string) => void;
}

const DS_CSS = `/* Cabeceira Design System — Colors & Type tokens
 * Lifted 1:1 from the production tailwind config and Plus Jakarta Sans usage
 * in the cabeceira-site codebase (index.html + components/*).
 */

/* ---------------------------------------------------------------- */
/* FONTS                                                            */
/* The site loads Plus Jakarta Sans + Material Symbols Outlined     */
/* + Material Icons Round directly from Google Fonts.               */
/* ---------------------------------------------------------------- */
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons+Round");
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap");

:root {
  /* ————————————————————————————————————————————————————————— */
  /* BRAND COLORS (tailwind.config)                              */
  /* ————————————————————————————————————————————————————————— */
  --primary:          #013220;   /* deep forest green — brand anchor */
  --accent:           #F89D93;   /* warm coral / "café cereja" — accents, calls-to-action on dark */
  --bg-light:         #FAFAF8;   /* page background, light mode */
  --bg-dark:          #0A120E;   /* page background, dark mode */

  /* Soft tints derived from primary/accent (used with opacity in-code) */
  --primary-05:       rgba(1, 50, 32, 0.05);
  --primary-10:       rgba(1, 50, 32, 0.10);
  --primary-20:       rgba(1, 50, 32, 0.20);
  --accent-10:        rgba(248, 157, 147, 0.10);
  --accent-20:        rgba(248, 157, 147, 0.20);

  /* ————————————————————————————————————————————————————————— */
  /* NEUTRAL SCALE — tailwind slate, used everywhere for text/ui  */
  /* ————————————————————————————————————————————————————————— */
  --slate-50:   #f8fafc;
  --slate-100:  #f1f5f9;
  --slate-200:  #e2e8f0;
  --slate-300:  #cbd5e1;
  --slate-400:  #94a3b8;
  --slate-500:  #64748b;
  --slate-600:  #475569;
  --slate-700:  #334155;
  --slate-800:  #1e293b;
  --slate-900:  #0f172a;

  /* ————————————————————————————————————————————————————————— */
  /* SEMANTIC COLOR TOKENS                                        */
  /* ————————————————————————————————————————————————————————— */
  --fg-1:             var(--slate-800);   /* body text, light */
  --fg-2:             var(--slate-600);   /* secondary text */
  --fg-3:             var(--slate-500);   /* muted captions */
  --fg-muted:         var(--slate-400);   /* eyebrow, disabled */
  --fg-on-primary:    #ffffff;
  --fg-on-accent:     var(--primary);

  --heading:          var(--primary);     /* big display headings, light */
  --heading-dark:     #ffffff;            /* big display headings, dark */

  --border:           var(--slate-200);
  --border-dark:      var(--slate-800);
  --surface:          #ffffff;
  --surface-alt:      var(--slate-50);
  --surface-dark:     var(--slate-800);
  --surface-dark-alt: var(--slate-900);

  --link:             var(--primary);
  --link-dark:        var(--accent);

  /* ————————————————————————————————————————————————————————— */
  /* TYPOGRAPHY                                                   */
  /* ————————————————————————————————————————————————————————— */
  --font-sans:    "Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system,
                  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-display: var(--font-sans);        /* same family, heavier weights */
  --font-icon:    "Material Icons Round", "Material Symbols Outlined";

  /* Weights actually used across the codebase */
  --fw-light:     300;
  --fw-regular:   400;
  --fw-medium:    500;  /* nav links */
  --fw-semibold:  600;
  --fw-bold:      700;  /* section headings, buttons */
  --fw-extrabold: 800;  /* hero + section display headings */
  --fw-black:     900;  /* hero CTA */

  /* Scale — tailwind defaults matched to how components use them */
  --fs-xs:   0.75rem;   /* 12px — eyebrow uppercase */
  --fs-sm:   0.875rem;  /* 14px — small captions */
  --fs-base: 1rem;      /* 16px — body */
  --fs-lg:   1.125rem;  /* 18px — lead paragraph */
  --fs-xl:   1.25rem;   /* 20px */
  --fs-2xl:  1.5rem;    /* 24px — card headings h3 */
  --fs-3xl:  1.875rem;  /* 30px — section h2 (mobile) */
  --fs-4xl:  2.25rem;   /* 36px — section h2 */
  --fs-5xl:  3rem;      /* 48px — big section h2 / hero (mobile) */
  --fs-6xl:  3.75rem;   /* 60px — About h2 */
  --fs-7xl:  4.5rem;    /* 72px — hero h1 (desktop) */

  --lh-tight:   1.1;    /* hero headings leading-[1.1] */
  --lh-snug:    1.25;
  --lh-normal:  1.5;
  --lh-relaxed: 1.625;  /* body paragraphs */

  --tracking-tight:  -0.025em;
  --tracking-normal: 0;
  --tracking-wider:  0.05em;
  --tracking-widest: 0.1em;  /* eyebrow uppercase */

  /* ————————————————————————————————————————————————————————— */
  /* RADII — default tailwind override is 12px; site stacks big   */
  /* pills (2rem, 2.5rem, 3rem, 4rem) on cards + hero frames.     */
  /* ————————————————————————————————————————————————————————— */
  --radius-sm:    0.375rem;  /* 6px */
  --radius:       0.75rem;   /* 12px — tailwind DEFAULT override */
  --radius-lg:    1rem;      /* 16px */
  --radius-xl:    1.25rem;   /* 20px — dropdown menus */
  --radius-2xl:   1.5rem;    /* 24px — buttons, small cards */
  --radius-3xl:   2rem;      /* 32px — testimonial cards */
  --radius-4xl:   2.5rem;    /* 40px — service cards */
  --radius-5xl:   3rem;      /* 48px — hero image frames, CTA block */
  --radius-6xl:   4rem;      /* 64px — vision image frame */
  --radius-full:  9999px;    /* pills, badges, avatars */

  /* ————————————————————————————————————————————————————————— */
  /* SHADOWS — tailwind defaults + tinted brand shadows on CTAs   */
  /* ————————————————————————————————————————————————————————— */
  --shadow-sm:  0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow:     0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl:  0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-primary-20: 0 20px 30px -10px rgba(1, 50, 32, 0.20);  /* brand CTA lift */
  --shadow-accent-10:  0 20px 30px -10px rgba(248, 157, 147, 0.10);

  /* Glass card effect (used over hero imagery) */
  --glass-bg:     rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur:   blur(8px);

  /* ————————————————————————————————————————————————————————— */
  /* SPACING — tailwind scale (8pt baseline)                      */
  /* ————————————————————————————————————————————————————————— */
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;   /* standard section vertical padding */

  --container-max: 80rem;    /* max-w-7xl = 1280px */
  --container-px:  1rem;     /* sm: 1.5rem, lg: 2rem */
}

/* ---------------------------------------------------------------- */
/* DARK MODE overrides — site uses class="dark" on <html>           */
/* ---------------------------------------------------------------- */
.dark {
  --fg-1:        var(--slate-100);
  --fg-2:        var(--slate-300);
  --fg-3:        var(--slate-400);
  --fg-muted:    var(--slate-500);
  --heading:     #ffffff;
  --border:      var(--slate-800);
  --surface:     var(--slate-800);
  --surface-alt: var(--slate-900);
  --link:        var(--accent);
}

/* ---------------------------------------------------------------- */
/* SEMANTIC TYPE — ready-made classes mirroring in-code usage       */
/* ---------------------------------------------------------------- */

.h-display {
  font-family: var(--font-display);
  font-weight: var(--fw-extrabold);
  font-size: clamp(3rem, 6vw, var(--fs-7xl));
  line-height: var(--lh-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--heading);
}
.h1 {
  font-weight: var(--fw-extrabold);
  font-size: clamp(2.25rem, 4.5vw, var(--fs-6xl));
  line-height: var(--lh-tight);
  color: var(--heading);
}
.h2 {
  font-weight: var(--fw-extrabold);
  font-size: clamp(1.875rem, 3.5vw, var(--fs-5xl));
  line-height: var(--lh-snug);
  color: var(--heading);
}
.h3 {
  font-weight: var(--fw-bold);
  font-size: var(--fs-2xl);
  line-height: var(--lh-snug);
  color: var(--heading);
}
.eyebrow {
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--accent);
}
.lead {
  font-size: var(--fs-lg);
  line-height: var(--lh-relaxed);
  color: var(--fg-2);
}
.body {
  font-size: var(--fs-base);
  line-height: var(--lh-relaxed);
  color: var(--fg-2);
}
.caption {
  font-size: var(--fs-sm);
  color: var(--fg-3);
}
.badge-pill {
  display: inline-flex; align-items: center; gap: .5rem;
  background: var(--accent-20);
  color: var(--primary);
  font-weight: var(--fw-bold);
  font-size: var(--fs-sm);
  padding: .375rem 1rem;
  border-radius: var(--radius-full);
}

/* Material Icons helpers (mirroring codebase) */
.material-icons-round, .material-symbols-outlined { font-family: var(--font-icon); font-weight: normal; font-style: normal; line-height: 1; letter-spacing: normal; text-transform: none; display: inline-block; white-space: nowrap; word-wrap: normal; direction: ltr; -webkit-font-feature-settings: 'liga'; font-feature-settings: 'liga'; -webkit-font-smoothing: antialiased; }

/* -----------------------------------------------------------
     Page-local layout. All visuals use tokens from cabeceira-tokens.css.
     ----------------------------------------------------------- */
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    font-family: var(--font-sans);
    background: var(--bg-light);
    color: var(--fg-1);
    -webkit-font-smoothing: antialiased;
    transition: background-color .3s ease, color .3s ease;
    text-wrap: pretty;
  }
  html.dark body { background: var(--bg-dark); color: var(--fg-1); }

  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }

  .container {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  @media (min-width: 640px) { .container { padding: 0 var(--space-6); } }
  @media (min-width: 1024px) { .container { padding: 0 var(--space-8); } }

  section { padding: var(--space-24) 0; }
  @media (max-width: 720px) { section { padding: var(--space-16) 0; } }

  /* ============ NAVBAR ============ */
  .nav {
    position: sticky; top: 0; z-index: 50;
    background: rgba(250, 250, 248, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }
  html.dark .nav {
    background: rgba(10, 18, 14, 0.8);
    border-bottom-color: var(--border-dark);
  }
  .nav-inner {
    display: flex; align-items: center; justify-content: space-between;
    height: 80px;
  }
  .brand { display: flex; align-items: center; gap: .75rem; }
  .brand img { height: 40px; width: auto; }
  .brand span {
    font-size: var(--fs-xl); font-weight: var(--fw-extrabold);
    color: var(--primary); letter-spacing: var(--tracking-tight);
  }
  html.dark .brand span { color: var(--accent); }
  .nav-links { display: none; gap: var(--space-8); align-items: center; }
  @media (min-width: 900px) { .nav-links { display: flex; } }
  .nav-links a {
    font-weight: var(--fw-medium); color: var(--fg-1);
    transition: color .2s ease; cursor: pointer;
  }
  .nav-links a:hover { color: var(--primary); }
  html.dark .nav-links a:hover { color: var(--accent); }
  .nav-actions { display: flex; align-items: center; gap: var(--space-3); }
  .icon-btn {
    appearance: none; background: transparent; border: 0;
    width: 40px; height: 40px; border-radius: var(--radius-full);
    display: inline-flex; align-items: center; justify-content: center;
    color: var(--slate-700); cursor: pointer; transition: background-color .2s ease;
  }
  .icon-btn:hover { background: var(--slate-100); }
  html.dark .icon-btn { color: var(--accent); }
  html.dark .icon-btn:hover { background: var(--slate-800); }

  /* ============ HERO ============ */
  .hero { position: relative; padding-top: var(--space-20); padding-bottom: var(--space-24); overflow: hidden; }
  .hero-bg {
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
  }
  .hero-bg::before, .hero-bg::after {
    content: ''; position: absolute; border-radius: 9999px;
    filter: blur(80px);
  }
  .hero-bg::before {
    width: 520px; height: 520px; left: -120px; top: -80px;
    background: var(--primary-05);
  }
  .hero-bg::after {
    width: 420px; height: 420px; right: -80px; top: 80px;
    background: var(--accent-20);
  }
  html.dark .hero-bg::before { background: rgba(1, 50, 32, 0.25); }
  html.dark .hero-bg::after  { background: rgba(248, 157, 147, 0.10); }

  .hero-grid {
    position: relative; z-index: 1;
    display: grid; grid-template-columns: 1fr; gap: var(--space-16);
    align-items: center;
  }
  @media (min-width: 1024px) {
    .hero-grid { grid-template-columns: 7fr 5fr; gap: var(--space-20); }
  }
  .hero h1 {
    margin: 0;
    font-weight: var(--fw-extrabold);
    font-size: clamp(2.5rem, 6vw, var(--fs-7xl));
    line-height: var(--lh-tight);
    letter-spacing: var(--tracking-tight);
    color: var(--heading);
  }
  .hero h1 .accent { color: var(--accent); }
  .hero p.lead {
    margin-top: var(--space-6);
    max-width: 36rem;
    font-size: var(--fs-xl);
    color: var(--fg-2);
    line-height: var(--lh-relaxed);
  }
  .hero-cta { display: flex; flex-wrap: wrap; gap: var(--space-4); margin-top: var(--space-10); }

  /* Glass panel on the right of hero */
  .hero-frame {
    position: relative;
    border-radius: var(--radius-5xl);
    background: var(--primary);
    overflow: hidden;
    border: 4px solid #fff;
    box-shadow: var(--shadow-2xl);
    aspect-ratio: 4 / 5;
  }
  html.dark .hero-frame { border-color: var(--slate-800); }
  .hero-frame .pattern {
    position: absolute; inset: 0;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(255,255,255,0.06) 0 1px, transparent 1.5px),
      radial-gradient(circle at 70% 60%, rgba(255,255,255,0.05) 0 1px, transparent 1.5px),
      radial-gradient(circle at 40% 80%, rgba(255,255,255,0.04) 0 1px, transparent 1.5px);
    background-size: 64px 64px, 96px 96px, 80px 80px;
    opacity: .9;
  }
  .hero-frame .stamp {
    position: absolute; left: 24px; top: 24px;
    display: inline-flex; align-items: center; gap: .5rem;
    padding: .5rem .9rem;
    border-radius: var(--radius-full);
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    color: #fff;
    font-size: var(--fs-sm); font-weight: var(--fw-bold);
  }
  .hero-frame .stamp .material-symbols-outlined { font-size: 18px; color: var(--accent); }
  .hero-frame .center-mark {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.92);
  }
  .hero-frame .center-mark svg { width: 60%; height: auto; }
  .hero-frame .caption {
    position: absolute; left: 24px; right: 24px; bottom: 24px;
    display: flex; align-items: center; justify-content: space-between;
    color: #fff;
  }
  .hero-frame .caption .label {
    font-size: var(--fs-xs);
    text-transform: uppercase;
    letter-spacing: var(--tracking-widest);
    color: var(--accent);
    font-weight: var(--fw-bold);
  }
  .hero-frame .caption .meta {
    font-size: var(--fs-sm); color: rgba(255,255,255,0.8);
  }

  /* ============ BUTTONS ============ */
  .btn {
    display: inline-flex; align-items: center; gap: .5rem;
    padding: 1.125rem 2rem;
    font-weight: var(--fw-bold);
    font-size: var(--fs-lg);
    border-radius: var(--radius-2xl);
    border: 1px solid transparent;
    cursor: pointer;
    transition: transform .25s ease, box-shadow .25s ease, background-color .2s ease, color .2s ease;
    font-family: inherit;
  }
  .btn:hover { transform: translateY(-2px) scale(1.02); }
  .btn .material-icons-round, .btn .material-symbols-outlined { font-size: 20px; }

  .btn-primary {
    background: var(--primary); color: #fff;
    box-shadow: var(--shadow-primary-20);
  }
  html.dark .btn-primary { background: var(--accent); color: var(--primary); }

  .btn-secondary {
    background: transparent;
    color: var(--fg-1);
    border-color: var(--border);
  }
  .btn-secondary:hover { background: var(--surface); }
  html.dark .btn-secondary { color: var(--fg-1); border-color: var(--border-dark); }
  html.dark .btn-secondary:hover { background: var(--slate-800); }

  .btn-ghost {
    background: rgba(255,255,255,0.10);
    color: #fff;
    border-color: rgba(255,255,255,0.18);
  }
  .btn-ghost:hover { background: rgba(255,255,255,0.18); }

  /* ============ COMMON SECTION HEADER ============ */
  .eyebrow {
    font-size: var(--fs-sm); font-weight: var(--fw-bold);
    letter-spacing: var(--tracking-widest); text-transform: uppercase;
    color: var(--accent);
    display: inline-block;
  }
  .section-head { max-width: 56rem; margin-bottom: var(--space-16); }
  .section-head h2 {
    margin: var(--space-4) 0 var(--space-6);
    font-weight: var(--fw-extrabold);
    font-size: clamp(2rem, 4.2vw, var(--fs-6xl));
    line-height: var(--lh-tight);
    letter-spacing: var(--tracking-tight);
    color: var(--heading);
  }
  .section-head h2 .accent { color: var(--accent); }
  .section-head p {
    margin: 0;
    font-size: var(--fs-lg);
    color: var(--fg-2);
    line-height: var(--lh-relaxed);
    max-width: 44rem;
  }

  /* ============ COLORS ============ */
  .swatch-grid {
    display: grid; grid-template-columns: repeat(2, minmax(0,1fr));
    gap: var(--space-6);
  }
  @media (min-width: 720px) { .swatch-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } }

  .swatch {
    border-radius: var(--radius-4xl);
    overflow: hidden;
    background: var(--surface);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
    transition: transform .25s ease, box-shadow .25s ease;
  }
  html.dark .swatch { background: var(--surface-dark); border-color: var(--border-dark); }
  .swatch:hover { transform: translateY(-4px); box-shadow: var(--shadow-2xl); }

  .swatch .chip { height: 160px; }
  .swatch .meta {
    padding: var(--space-6) var(--space-8) var(--space-6);
  }
  .swatch .meta .name {
    font-weight: var(--fw-bold); color: var(--heading);
    font-size: var(--fs-lg);
  }
  .swatch .meta .desc {
    margin-top: .25rem; font-size: var(--fs-sm); color: var(--fg-3);
  }
  .swatch .meta .hex {
    margin-top: var(--space-3);
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: var(--fs-sm); color: var(--fg-2);
    letter-spacing: .04em;
  }

  .neutrals {
    margin-top: var(--space-12);
    display: grid; grid-template-columns: repeat(5, minmax(0,1fr));
    gap: var(--space-3);
  }
  @media (min-width: 720px) { .neutrals { grid-template-columns: repeat(10, minmax(0,1fr)); } }
  .neutral {
    border-radius: var(--radius-2xl);
    overflow: hidden; border: 1px solid var(--border);
    background: var(--surface);
  }
  html.dark .neutral { border-color: var(--border-dark); background: var(--surface-dark); }
  .neutral .chip { height: 84px; }
  .neutral .lbl {
    padding: .625rem .75rem;
    display: flex; flex-direction: column; gap: 2px;
    font-size: var(--fs-xs);
  }
  .neutral .lbl b { color: var(--heading); font-weight: var(--fw-bold); }
  .neutral .lbl span { color: var(--fg-3); font-family: ui-monospace, monospace; }

  /* ============ TYPOGRAPHY ============ */
  .type-grid {
    display: grid; grid-template-columns: 1fr; gap: var(--space-8);
  }
  @media (min-width: 900px) {
    .type-grid { grid-template-columns: 1fr 1fr; gap: var(--space-12); }
  }
  .type-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-3xl);
    padding: var(--space-10);
  }
  html.dark .type-card { background: var(--surface-dark); border-color: var(--border-dark); }
  .type-card .label {
    display: flex; gap: var(--space-4); align-items: baseline;
    font-size: var(--fs-xs); color: var(--fg-3);
    text-transform: uppercase; letter-spacing: var(--tracking-widest);
    font-weight: var(--fw-bold);
    margin-bottom: var(--space-6);
  }
  .type-card .label b { color: var(--accent); font-weight: var(--fw-bold); }
  .type-card .specimen { color: var(--heading); margin: 0; }

  .specimen-display {
    font-weight: var(--fw-extrabold);
    font-size: clamp(2.5rem, 5.5vw, 4rem);
    line-height: var(--lh-tight);
    letter-spacing: var(--tracking-tight);
  }
  .specimen-h1 {
    font-weight: var(--fw-extrabold);
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: var(--lh-tight);
  }
  .specimen-h2 {
    font-weight: var(--fw-extrabold);
    font-size: clamp(1.5rem, 2.6vw, 2.25rem);
    line-height: var(--lh-snug);
  }
  .specimen-h3 {
    font-weight: var(--fw-bold);
    font-size: var(--fs-2xl);
  }
  .specimen-body {
    font-size: var(--fs-lg);
    line-height: var(--lh-relaxed);
    color: var(--fg-2);
    font-weight: var(--fw-regular);
  }
  .specimen-eyebrow {
    text-transform: uppercase;
    letter-spacing: var(--tracking-widest);
    font-weight: var(--fw-bold);
    color: var(--accent);
    font-size: var(--fs-sm);
  }
  .weights {
    display: flex; flex-wrap: wrap; gap: var(--space-4);
    margin-top: var(--space-8);
    padding-top: var(--space-6);
    border-top: 1px dashed var(--border);
  }
  html.dark .weights { border-top-color: var(--border-dark); }
  .weight-pill {
    padding: .5rem .9rem;
    border-radius: var(--radius-full);
    background: var(--surface-alt);
    color: var(--fg-1);
    font-size: var(--fs-sm);
  }
  html.dark .weight-pill { background: var(--surface-dark-alt); }
  .weight-pill code { color: var(--fg-3); font-size: 12px; margin-left: .35rem; }

  /* ============ ICONOGRAPHY ============ */
  .icon-grid {
    display: grid; grid-template-columns: repeat(2, minmax(0,1fr));
    gap: var(--space-4);
  }
  @media (min-width: 540px) { .icon-grid { grid-template-columns: repeat(3, minmax(0,1fr)); } }
  @media (min-width: 900px) { .icon-grid { grid-template-columns: repeat(6, minmax(0,1fr)); } }
  .icon-tile {
    display: flex; flex-direction: column; align-items: center; gap: .75rem;
    padding: var(--space-6);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-3xl);
    transition: transform .2s ease, box-shadow .2s ease;
  }
  html.dark .icon-tile { background: var(--surface-dark); border-color: var(--border-dark); }
  .icon-tile:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
  .icon-chip {
    width: 56px; height: 56px;
    border-radius: var(--radius-2xl);
    background: var(--accent-20);
    display: inline-flex; align-items: center; justify-content: center;
    color: var(--primary);
  }
  html.dark .icon-chip { background: rgba(248,157,147,0.18); color: var(--accent); }
  .icon-chip .material-symbols-outlined { font-size: 28px; }
  .icon-tile .name {
    font-size: var(--fs-sm);
    font-family: ui-monospace, monospace;
    color: var(--fg-3);
  }

  /* ============ COMPONENTS ============ */
  .components-grid {
    display: grid; grid-template-columns: 1fr; gap: var(--space-8);
  }
  @media (min-width: 900px) {
    .components-grid { grid-template-columns: 1fr 1fr; gap: var(--space-10); }
  }

  .component-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-3xl);
    padding: var(--space-10);
    display: flex; flex-direction: column; gap: var(--space-6);
  }
  html.dark .component-card { background: var(--surface-dark); border-color: var(--border-dark); }
  .component-card h3 {
    margin: 0;
    font-size: var(--fs-2xl);
    font-weight: var(--fw-bold);
    color: var(--heading);
  }
  .component-card p { margin: 0; color: var(--fg-2); }

  .component-stage {
    margin-top: var(--space-3);
    padding: var(--space-8);
    border-radius: var(--radius-3xl);
    background: var(--surface-alt);
    display: flex; flex-wrap: wrap; gap: var(--space-4); align-items: center; justify-content: center;
    min-height: 180px;
  }
  html.dark .component-stage { background: var(--surface-dark-alt); }

  .component-stage.dark-stage {
    background:
      radial-gradient(120% 90% at 30% 20%, rgba(248,157,147,0.18), transparent 60%),
      var(--primary);
    color: #fff;
    position: relative;
    overflow: hidden;
  }
  .component-stage.dark-stage::after {
    content: '';
    position: absolute; inset: 0;
    background-image:
      radial-gradient(circle at 25% 35%, rgba(255,255,255,0.05) 0 1px, transparent 1.5px),
      radial-gradient(circle at 70% 65%, rgba(255,255,255,0.05) 0 1px, transparent 1.5px);
    background-size: 80px 80px, 100px 100px;
    pointer-events: none;
  }
  .component-stage > * { position: relative; z-index: 1; }

  /* Service-card sample */
  .service-card {
    width: 280px;
    border-radius: var(--radius-4xl);
    background: var(--surface);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    transition: box-shadow .3s ease, transform .3s ease;
    border: 1px solid transparent;
  }
  html.dark .service-card { background: var(--surface-dark); border-color: var(--border-dark); }
  .service-card:hover { box-shadow: var(--shadow-2xl); transform: translateY(-4px); }
  .service-card .photo {
    height: 140px; overflow: hidden;
    background:
      linear-gradient(160deg, rgba(1,50,32,0.85), rgba(1,50,32,0.55)),
      radial-gradient(120% 100% at 30% 30%, rgba(248,157,147,0.5), transparent 60%);
    position: relative;
  }
  .service-card .photo::after {
    content: '';
    position: absolute; inset: 0;
    background-image:
      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06) 0 1.5px, transparent 2px),
      radial-gradient(circle at 70% 60%, rgba(255,255,255,0.05) 0 1.5px, transparent 2px);
    background-size: 40px 40px, 56px 56px;
  }
  .service-card .body {
    padding: var(--space-6);
    display: flex; flex-direction: column; gap: var(--space-3);
  }
  .service-card .icon-chip-sm {
    width: 48px; height: 48px;
    border-radius: var(--radius-2xl);
    background: var(--accent-20);
    display: inline-flex; align-items: center; justify-content: center;
    color: var(--primary);
  }
  html.dark .service-card .icon-chip-sm { background: rgba(248,157,147,0.18); color: var(--accent); }
  .service-card h4 {
    margin: 0; color: var(--heading);
    font-weight: var(--fw-bold); font-size: var(--fs-xl);
  }
  .service-card .desc {
    color: var(--fg-2); font-size: var(--fs-sm); line-height: var(--lh-relaxed); margin: 0;
  }

  /* Testimonial sample */
  .testimonial {
    width: 100%; max-width: 460px;
    background: var(--surface-alt);
    border: 1px solid var(--border);
    border-radius: var(--radius-3xl);
    padding: var(--space-8);
    display: flex; flex-direction: column; gap: var(--space-5);
  }
  html.dark .testimonial { background: var(--surface-dark); border-color: var(--border-dark); }
  .testimonial .quote {
    color: var(--fg-1);
    font-size: var(--fs-lg);
    line-height: var(--lh-relaxed);
    margin: 0;
  }
  .testimonial .author { display: flex; align-items: center; gap: var(--space-4); }
  .testimonial .avatar {
    width: 48px; height: 48px; border-radius: 9999px;
    background: linear-gradient(135deg, var(--accent), var(--primary));
    color: #fff; font-weight: var(--fw-bold);
    display: inline-flex; align-items: center; justify-content: center;
  }
  .testimonial .author .who {
    color: var(--heading); font-weight: var(--fw-bold);
  }
  .testimonial .author .where {
    color: var(--fg-3); font-size: var(--fs-sm);
  }

  /* Badges */
  .badge-row { display: flex; flex-wrap: wrap; gap: var(--space-3); }
  .pill {
    display: inline-flex; align-items: center; gap: .5rem;
    padding: .5rem 1rem;
    border-radius: var(--radius-full);
    font-size: var(--fs-sm); font-weight: var(--fw-bold);
  }
  .pill-accent { background: var(--accent-20); color: var(--primary); }
  html.dark .pill-accent { background: rgba(248,157,147,0.18); color: var(--accent); }
  .pill-primary { background: var(--primary-10); color: var(--primary); }
  html.dark .pill-primary { background: rgba(255,255,255,0.08); color: #fff; }
  .pill-glass {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    color: #fff;
  }
  .pill .dot {
    width: 8px; height: 8px; border-radius: 9999px;
    background: var(--accent);
    animation: pulse 1.6s ease-in-out infinite;
  }
  .pill-primary .dot { background: var(--primary); }
  .pill-glass .dot { background: var(--accent); }
  @keyframes pulse {
    0%,100% { opacity: 1; transform: scale(1); }
    50% { opacity: .55; transform: scale(.85); }
  }

  /* Radii showcase */
  .radii-grid {
    display: grid; grid-template-columns: repeat(2, minmax(0,1fr));
    gap: var(--space-8);
  }
  @media (min-width: 720px) { .radii-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } }
  .radii-tile {
    display: flex; flex-direction: column; align-items: center; gap: var(--space-3);
  }
  .radii-tile .shape {
    width: 100%;
    aspect-ratio: 5 / 4;
    background: var(--primary);
  }
  html.dark .radii-tile .shape { background: var(--accent); }
  .radii-tile .name {
    font-weight: var(--fw-bold);
    font-size: var(--fs-base);
    color: var(--heading);
    margin-top: var(--space-2);
  }
  .radii-tile .px {
    font-size: var(--fs-xs);
    color: var(--fg-3);
    font-family: ui-monospace, monospace;
    text-align: center;
  }

  /* Voice */
  .voice-grid {
    display: grid; grid-template-columns: 1fr; gap: var(--space-6);
  }
  @media (min-width: 900px) { .voice-grid { grid-template-columns: repeat(3, minmax(0,1fr)); } }
  .voice-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 4px solid var(--accent);
    border-radius: var(--radius-2xl);
    padding: var(--space-6) var(--space-8);
  }
  html.dark .voice-card { background: var(--surface-dark); border-color: var(--border-dark); border-left-color: var(--accent); }
  .voice-card .label {
    font-size: var(--fs-xs); text-transform: uppercase;
    letter-spacing: var(--tracking-widest); font-weight: var(--fw-bold);
    color: var(--fg-3); margin-bottom: var(--space-3);
  }
  .voice-card blockquote {
    margin: 0; font-size: var(--fs-lg); color: var(--heading);
    line-height: var(--lh-relaxed); font-weight: var(--fw-medium);
  }
  .voice-card .meta {
    margin-top: var(--space-4);
    font-size: var(--fs-sm); color: var(--fg-3);
  }

  /* Final CTA */
  .cta-block {
    position: relative; overflow: hidden;
    background: var(--primary);
    border-radius: var(--radius-5xl);
    padding: var(--space-20) var(--space-10);
    text-align: center;
    box-shadow: var(--shadow-2xl);
  }
  @media (min-width: 1024px) { .cta-block { padding: 5rem var(--space-20); } }
  .cta-block::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(255,255,255,0.06) 0 1px, transparent 1.5px),
      radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0 1px, transparent 1.5px);
    background-size: 80px 80px, 96px 96px;
    pointer-events: none;
  }
  .cta-block::after {
    content: '';
    position: absolute; right: -120px; top: -120px;
    width: 400px; height: 400px; border-radius: 9999px;
    background: var(--accent-20);
    filter: blur(80px);
    pointer-events: none;
  }
  .cta-block > * { position: relative; z-index: 1; }
  .cta-block .eyebrow { color: var(--accent); }
  .cta-block h2 {
    margin: var(--space-4) 0 var(--space-6);
    color: #fff;
    font-weight: var(--fw-extrabold);
    font-size: clamp(2rem, 4.4vw, var(--fs-6xl));
    line-height: var(--lh-tight);
    letter-spacing: var(--tracking-tight);
  }
  .cta-block h2 .accent { color: var(--accent); }
  .cta-block p {
    margin: 0 auto;
    color: rgba(255,255,255,0.78);
    max-width: 36rem;
    font-size: var(--fs-lg);
    line-height: var(--lh-relaxed);
  }
  .cta-actions { margin-top: var(--space-10); display: flex; flex-wrap: wrap; gap: var(--space-4); justify-content: center; }
  .cta-btn-accent {
    background: var(--accent);
    color: var(--primary);
    box-shadow: var(--shadow-accent-10);
  }

  /* Footer */
  footer.foot {
    border-top: 1px solid var(--border);
    padding: var(--space-16) 0 var(--space-12);
    color: var(--fg-2);
  }
  html.dark footer.foot { border-top-color: var(--border-dark); }
  .foot-grid {
    display: grid; grid-template-columns: 1fr; gap: var(--space-10);
  }
  @media (min-width: 720px) {
    .foot-grid { grid-template-columns: 2fr 1fr 1fr 1fr; }
  }
  .foot-col h4 {
    color: var(--heading);
    font-size: var(--fs-sm);
    text-transform: uppercase; letter-spacing: var(--tracking-widest);
    font-weight: var(--fw-bold);
    margin: 0 0 var(--space-4);
  }
  .foot-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--space-2); }
  .foot-col a { color: var(--fg-2); transition: color .2s ease; }
  .foot-col a:hover { color: var(--primary); }
  html.dark .foot-col a:hover { color: var(--accent); }
  .foot-bottom {
    margin-top: var(--space-12);
    padding-top: var(--space-8);
    border-top: 1px solid var(--border);
    display: flex; justify-content: space-between; flex-wrap: wrap; gap: var(--space-4);
    color: var(--fg-3);
    font-size: var(--fs-sm);
  }
  html.dark .foot-bottom { border-top-color: var(--border-dark); }

  /* Anchor offset to clear sticky nav */
  section[id] { scroll-margin-top: 96px; }

  /* Token chip helper used inside copy */
  .token {
    display: inline-block;
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 0.85em;
    background: var(--surface-alt);
    color: var(--primary);
    padding: .1em .5em;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border);
  }
  html.dark .token { background: var(--surface-dark-alt); color: var(--accent); border-color: var(--border-dark); }

  /* Stat row beneath hero */
  .stats {
    display: grid; grid-template-columns: repeat(2, minmax(0,1fr));
    gap: var(--space-6);
    margin-top: var(--space-16);
    padding-top: var(--space-10);
    border-top: 1px solid var(--border);
  }
  html.dark .stats { border-top-color: var(--border-dark); }
  @media (min-width: 720px) { .stats { grid-template-columns: repeat(4, minmax(0,1fr)); } }
  .stat .num {
    font-size: clamp(2rem, 3vw, var(--fs-5xl));
    font-weight: var(--fw-extrabold);
    color: var(--heading);
    letter-spacing: var(--tracking-tight);
    line-height: 1;
  }
  .stat .num .accent { color: var(--accent); }
  .stat .lbl {
    margin-top: .5rem;
    color: var(--fg-3);
    font-size: var(--fs-sm);
    text-transform: uppercase;
    letter-spacing: var(--tracking-widest);
    font-weight: var(--fw-bold);
  }

  /* Shadow showcase */
  .shadow-grid {
    display: grid; grid-template-columns: repeat(2, minmax(0,1fr));
    gap: var(--space-8);
  }
  @media (min-width: 900px) { .shadow-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } }
  .shadow-tile {
    display: flex; flex-direction: column; align-items: center; gap: var(--space-3);
    min-width: 0;
  }
  .shadow-tile .swatch-box {
    width: 100%;
    aspect-ratio: 5 / 4;
    background: var(--surface);
    border-radius: var(--radius-3xl);
    border: 1px solid var(--border);
  }
  html.dark .shadow-tile .swatch-box { background: var(--surface-dark); border-color: var(--border-dark); }
  .shadow-tile .name {
    font-weight: var(--fw-bold);
    color: var(--heading);
    font-size: var(--fs-base);
    margin-top: var(--space-2);
  }
  .shadow-tile .token {
    font-size: 11px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sh-md .swatch-box { box-shadow: var(--shadow-md); }
  .sh-lg .swatch-box { box-shadow: var(--shadow-lg); }
  .sh-2xl .swatch-box { box-shadow: var(--shadow-2xl); }
  .sh-primary .swatch-box { box-shadow: var(--shadow-primary-20); }

  /* ============ TYPE SCALE TABLE ============ */
  .type-scale {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-3xl);
    overflow: hidden;
  }
  html.dark .type-scale { background: var(--surface-dark); border-color: var(--border-dark); }
  .ts-row {
    display: grid;
    grid-template-columns: 1.4fr 0.5fr 0.6fr 1.6fr 2fr;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-5) var(--space-6);
    border-bottom: 1px solid var(--border);
  }
  html.dark .ts-row { border-bottom-color: var(--border-dark); }
  .ts-row:last-child { border-bottom: 0; }
  .ts-head {
    background: var(--surface-alt);
    font-size: var(--fs-xs);
    text-transform: uppercase;
    letter-spacing: var(--tracking-widest);
    font-weight: var(--fw-bold);
    color: var(--fg-3);
  }
  html.dark .ts-head { background: var(--surface-dark-alt); }
  .ts-px, .ts-rem {
    font-family: ui-monospace, monospace;
    font-size: var(--fs-sm);
    color: var(--fg-2);
  }
  .ts-use { font-size: var(--fs-sm); color: var(--fg-2); }
  .ts-sample {
    color: var(--heading);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  @media (max-width: 720px) {
    .ts-row { grid-template-columns: 1fr 0.5fr 1fr; }
    .ts-head .ts-rem, .ts-head .ts-use, .ts-row .ts-rem, .ts-row .ts-use { display: none; }
    .ts-sample { grid-column: 1 / -1; }
  }

  /* ============ LOGO ============ */
  .logo-grid {
    display: grid; grid-template-columns: 1fr; gap: var(--space-6);
  }
  @media (min-width: 720px) { .logo-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1100px) { .logo-grid { grid-template-columns: repeat(3, 1fr); } }
  .logo-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-3xl);
    overflow: hidden;
    display: flex; flex-direction: column;
  }
  html.dark .logo-card { background: var(--surface-dark); border-color: var(--border-dark); }
  .logo-card--wide { grid-column: 1 / -1; }
  .logo-stage {
    min-height: 200px;
    padding: var(--space-10);
    display: flex; align-items: center; justify-content: center;
    background:
      linear-gradient(var(--surface-alt), var(--surface-alt)),
      repeating-linear-gradient(45deg, var(--border) 0 1px, transparent 1px 12px);
    background-blend-mode: multiply;
  }
  html.dark .logo-stage { background: var(--surface-dark-alt); }
  .logo-stage.logo-dark {
    background: var(--bg-dark);
  }
  .logo-meta {
    padding: var(--space-6);
    border-top: 1px solid var(--border);
  }
  html.dark .logo-meta { border-top-color: var(--border-dark); }
  .logo-name { font-weight: var(--fw-bold); color: var(--heading); font-size: var(--fs-lg); }
  .logo-desc { margin-top: .25rem; color: var(--fg-2); font-size: var(--fs-sm); line-height: var(--lh-relaxed); }
  .logo-hex { margin-top: var(--space-3); font-size: var(--fs-sm); color: var(--fg-3); }

  .lockup { display: flex; align-items: center; gap: var(--space-3); }
  .lockup-v {
    display: flex; flex-direction: column; align-items: center; gap: var(--space-3);
  }
  .lockup-word {
    font-weight: var(--fw-extrabold);
    font-size: 36px;
    letter-spacing: var(--tracking-tight);
  }
  .lockup-tag {
    font-size: var(--fs-sm);
    text-transform: uppercase;
    letter-spacing: var(--tracking-widest);
    font-weight: var(--fw-bold);
    color: var(--slate-500);
  }

  .size-spec { display: flex; flex-direction: column; align-items: center; gap: var(--space-3); }
  .size-lbl { text-align: center; }
  .size-lbl b { display: block; color: var(--heading); font-weight: var(--fw-bold); font-size: var(--fs-base); }
  .size-lbl span { color: var(--fg-3); font-size: var(--fs-xs); text-transform: uppercase; letter-spacing: var(--tracking-wider); font-weight: var(--fw-bold); }

  .dont { display: flex; flex-direction: column; gap: var(--space-3); align-items: center; }
  .dont-frame {
    width: 120px; height: 120px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-2xl);
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
    position: relative;
  }
  html.dark .dont-frame { background: var(--surface-dark); border-color: var(--border-dark); }
  .dont-frame::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, transparent calc(50% - 1px), rgba(207,34,34,0.5) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px));
    pointer-events: none;
  }
  .dont-x {
    display: inline-flex; align-items: center; gap: .35rem;
    font-size: var(--fs-sm); font-weight: var(--fw-bold);
    color: #cf2222;
  }
  .dont-x .material-icons-round { font-size: 18px; }`;

const DS_BODY = `<!-- ===================== HERO ===================== -->
<section class="hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="container">
    <div class="hero-grid">
      <div>
        <span class="pill pill-accent">
          <span class="dot"></span>
          Sistema de Design · v1.0
        </span>
        <h1 style="margin-top: var(--space-6);">
          Da <span class="accent">terra viva</span> à tela:<br />
          o sistema de design da Cabeceira.
        </h1>
        <p class="lead">
          Um conjunto de tokens, tipografia e componentes que une o conhecimento ancestral
          do café ao rigor do produto digital. Cada cor, cada raio e cada palavra foi
          escolhida para soar como a marca: técnica, calorosa e enraizada.
        </p>
        <div class="hero-cta">
          <a href="#ds-cores" class="btn btn-primary">
            Explorar o sistema
            <span class="material-icons-round">arrow_forward</span>
          </a>
          <a href="#ds-voz" class="btn btn-secondary">
            Ler o manual de voz
          </a>
        </div>

        <div class="stats">
          <div class="stat">
            <div class="num"><span class="accent">2</span> cores</div>
            <div class="lbl">de marca</div>
          </div>
          <div class="stat">
            <div class="num">10 <span class="accent">tons</span></div>
            <div class="lbl">de neutros</div>
          </div>
          <div class="stat">
            <div class="num">11 raios</div>
            <div class="lbl">do agudo ao orgânico</div>
          </div>
          <div class="stat">
            <div class="num">1 família</div>
            <div class="lbl">Plus Jakarta Sans</div>
          </div>
        </div>
      </div>

      <div>
        <div class="hero-frame" role="img" aria-label="Marca da Cabeceira aplicada sobre fundo verde">
          <div class="pattern"></div>
          <span class="stamp">
            <span class="material-symbols-outlined">verified</span>
            Certificado de Regeneração
          </span>
          <div class="center-mark">
            <!-- Brand symbol (official) -->
            <svg viewBox="0 0 576 720" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#F89D93" d="M162 0C72.5299 0 0 72.5299 0 162V558C0 647.47 72.5299 720 162 720H265.5V0H162ZM310.499 720V477.286C310.996 453.648 339.723 441.955 356.584 458.817L547.525 649.758C518.314 692.186 469.405 720 413.999 720H310.499ZM575.999 558V382.5H409.09C385.036 382.5 372.99 411.583 389.999 428.592L568.444 607.038C573.351 591.569 575.999 575.093 575.999 558ZM575.999 162C575.999 144.28 573.154 127.224 567.895 111.264L387.751 291.408C370.742 308.417 382.789 337.5 406.843 337.5H575.999V162ZM310.499 0V240.467C310.996 264.105 339.723 275.797 356.584 258.936L546.603 68.9166C517.291 27.2362 468.826 0 413.999 0H310.499Z"/>
            </svg>
          </div>
          <div class="caption">
            <span class="label">Símbolo · 01</span>
            <span class="meta">#F89D93 sobre #013220</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== FUNDAMENTOS ===================== -->
<section id="ds-fundamentos">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Quem é a cabeceira?</span>
      <h2>Um sistema enraizado. Um produto que <span class="accent">cresce com a lavoura.</span></h2>
      <p>
        A Cabeceira nasceu da necessidade de unir o conhecimento ancestral da terra com
        a precisão da tecnologia moderna. Este sistema de design é a tradução visual
        dessa promessa: ferramentas honestas, tipografia clara, cores que vêm do café.
      </p>
    </div>

    <div class="voice-grid">
      <div class="voice-card">
        <div class="label">Princípio · 01</div>
        <blockquote>
          “A cor da maturação. O verde do solo vivo.”<br />
          Paleta enxuta, fotografia calorosa, zero gradientes coloridos.
        </blockquote>
        <div class="meta">Visual</div>
      </div>
      <div class="voice-card">
        <div class="label">Princípio · 02</div>
        <blockquote>
          Falamos com o produtor por “você”. Frases curtas, declarativas,
          que terminam com um ponto final.
        </blockquote>
        <div class="meta">Voz</div>
      </div>
      <div class="voice-card">
        <div class="label">Princípio · 03</div>
        <blockquote>
          Uma família de letra (Plus Jakarta Sans). Uma família de ícones
          (Material). Nenhum emoji.
        </blockquote>
        <div class="meta">Sistema</div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== CORES ===================== -->
<section id="ds-cores" style="background: var(--surface-alt);">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Paleta</span>
      <h2>Duas cores de marca, dez de <span class="accent">terra batida.</span></h2>
      <p>
        O verde é a âncora; o coral é a maturação. Sob essas duas cores estende-se o
        cinza-ardósia (slate) que carrega o texto, as bordas e as superfícies. Sem
        gradientes coloridos. Sem desvios.
      </p>
    </div>

    <div class="swatch-grid">
      <div class="swatch">
        <div class="chip" style="background: #013220;"></div>
        <div class="meta">
          <div class="name">Primary · Verde Cabeceira</div>
          <div class="desc">Âncora da marca. Títulos, botões e blocos escuros.</div>
          <div class="hex">#013220 · <span class="token">--primary</span></div>
        </div>
      </div>
      <div class="swatch">
        <div class="chip" style="background: #F89D93;"></div>
        <div class="meta">
          <div class="name">Accent · Café Cereja</div>
          <div class="desc">Destaque. Pílulas, eyebrows e CTAs no escuro.</div>
          <div class="hex">#F89D93 · <span class="token">--accent</span></div>
        </div>
      </div>
      <div class="swatch">
        <div class="chip" style="background: #FAFAF8; border-bottom: 1px solid var(--border);"></div>
        <div class="meta">
          <div class="name">Bone · Fundo Claro</div>
          <div class="desc">Marfim quente, repouso visual no modo claro.</div>
          <div class="hex">#FAFAF8 · <span class="token">--bg-light</span></div>
        </div>
      </div>
      <div class="swatch">
        <div class="chip" style="background: #0A120E;"></div>
        <div class="meta">
          <div class="name">Mata · Fundo Escuro</div>
          <div class="desc">Verde quase preto. Imersivo, sem azul.</div>
          <div class="hex">#0A120E · <span class="token">--bg-dark</span></div>
        </div>
      </div>
    </div>

    <h3 style="margin: var(--space-16) 0 var(--space-6); font-size: var(--fs-2xl); font-weight: var(--fw-bold); color: var(--heading);">
      Neutros · escala slate
    </h3>
    <p class="body" style="margin: 0 0 var(--space-6); max-width: 38rem;">
      Texto, bordas e superfícies usam a escala <span class="token">slate-50 → slate-900</span>.
      É o "tecido" entre as duas cores de marca.
    </p>
    <div class="neutrals">
      <!-- 50..900 -->
      <div class="neutral"><div class="chip" style="background:#f8fafc"></div><div class="lbl"><b>50</b><span>#f8fafc</span></div></div>
      <div class="neutral"><div class="chip" style="background:#f1f5f9"></div><div class="lbl"><b>100</b><span>#f1f5f9</span></div></div>
      <div class="neutral"><div class="chip" style="background:#e2e8f0"></div><div class="lbl"><b>200</b><span>#e2e8f0</span></div></div>
      <div class="neutral"><div class="chip" style="background:#cbd5e1"></div><div class="lbl"><b>300</b><span>#cbd5e1</span></div></div>
      <div class="neutral"><div class="chip" style="background:#94a3b8"></div><div class="lbl"><b>400</b><span>#94a3b8</span></div></div>
      <div class="neutral"><div class="chip" style="background:#64748b"></div><div class="lbl"><b>500</b><span>#64748b</span></div></div>
      <div class="neutral"><div class="chip" style="background:#475569"></div><div class="lbl"><b>600</b><span>#475569</span></div></div>
      <div class="neutral"><div class="chip" style="background:#334155"></div><div class="lbl"><b>700</b><span>#334155</span></div></div>
      <div class="neutral"><div class="chip" style="background:#1e293b"></div><div class="lbl"><b>800</b><span>#1e293b</span></div></div>
      <div class="neutral"><div class="chip" style="background:#0f172a"></div><div class="lbl"><b>900</b><span>#0f172a</span></div></div>
    </div>
  </div>
</section>

<!-- ===================== TIPOGRAFIA ===================== -->
<section id="ds-tipografia">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Tipografia</span>
      <h2>Uma só família. Pesos que <span class="accent">trabalham na lavoura.</span></h2>
      <p>
        Plus Jakarta Sans cobre toda a hierarquia — do display extra-bold ao corpo de
        16px. Ela é leve o bastante para parágrafos e tem a presença necessária para
        manchetes que terminam com ponto final.
      </p>
    </div>

    <div class="type-grid">
      <div class="type-card">
        <div class="label"><b>Display</b><span>72 / 800 / leading 1.1</span></div>
        <p class="specimen specimen-display">Da terra viva.</p>
        <p class="body" style="margin-top: var(--space-6);">
          Manchetes de hero. Letras com substantivos-chave em <span style="color: var(--accent); font-weight: var(--fw-extrabold);">accent</span>.
        </p>
        <div class="weights">
          <span class="weight-pill">Light <code>300</code></span>
          <span class="weight-pill">Regular <code>400</code></span>
          <span class="weight-pill">Medium <code>500</code></span>
          <span class="weight-pill">SemiBold <code>600</code></span>
          <span class="weight-pill">Bold <code>700</code></span>
          <span class="weight-pill">ExtraBold <code>800</code></span>
        </div>
      </div>

      <div class="type-card">
        <div class="label"><b>H2 · Seção</b><span>48 / 800 / leading 1.25</span></div>
        <p class="specimen specimen-h1">Entenda de verdade como está sua terra.</p>
        <hr style="border:0; border-top: 1px dashed var(--border); margin: var(--space-6) 0;" />
        <div class="label"><b>H3 · Cartão</b><span>24 / 700</span></div>
        <p class="specimen specimen-h3">Diagnóstico em até 48 horas.</p>
        <hr style="border:0; border-top: 1px dashed var(--border); margin: var(--space-6) 0;" />
        <div class="label"><b>Eyebrow</b><span>14 / 700 / 0.1em</span></div>
        <p class="specimen-eyebrow">Quem é a Cabeceira?</p>
      </div>

      <div class="type-card" style="grid-column: 1 / -1;">
        <div class="label"><b>Corpo</b><span>18 / 400 / leading 1.625</span></div>
        <p class="specimen-body">
          Produzir alimento de qualidade não precisa custar a saúde do planeta.
          A tecnologia deve ser a ferramenta que nos reconecta aos ciclos da natureza.
          Não entregamos apenas serviços; construímos parcerias de longo prazo para
          garantir que cada hectare seja um legado de abundância para as próximas gerações.
        </p>
      </div>
    </div>

    <!-- Type scale table -->
    <h3 style="margin: var(--space-16) 0 var(--space-3); font-size: var(--fs-2xl); font-weight: var(--fw-bold); color: var(--heading);">
      Escala tipográfica
    </h3>
    <p class="body" style="margin: 0 0 var(--space-8); max-width: 38rem;">
      Onze tamanhos cobrem do legendado de 12px ao display de 72px. A coluna
      <span class="token">token</span> é o que você importa.
    </p>
    <div class="type-scale">
      <div class="ts-row ts-head">
        <div class="ts-name">Token</div>
        <div class="ts-px">px</div>
        <div class="ts-rem">rem</div>
        <div class="ts-use">Uso</div>
        <div class="ts-sample">Amostra</div>
      </div>
      <div class="ts-row">
        <div class="ts-name"><span class="token">--fs-xs</span></div>
        <div class="ts-px">12</div><div class="ts-rem">0.75</div>
        <div class="ts-use">Eyebrow uppercase</div>
        <div class="ts-sample" style="font-size: var(--fs-xs);">Diagnóstico Digital para Cafezais</div>
      </div>
      <div class="ts-row">
        <div class="ts-name"><span class="token">--fs-sm</span></div>
        <div class="ts-px">14</div><div class="ts-rem">0.875</div>
        <div class="ts-use">Legenda, badge</div>
        <div class="ts-sample" style="font-size: var(--fs-sm);">Diagnóstico Digital para Cafezais</div>
      </div>
      <div class="ts-row">
        <div class="ts-name"><span class="token">--fs-base</span></div>
        <div class="ts-px">16</div><div class="ts-rem">1.000</div>
        <div class="ts-use">Corpo padrão</div>
        <div class="ts-sample" style="font-size: var(--fs-base);">Diagnóstico Digital para Cafezais</div>
      </div>
      <div class="ts-row">
        <div class="ts-name"><span class="token">--fs-lg</span></div>
        <div class="ts-px">18</div><div class="ts-rem">1.125</div>
        <div class="ts-use">Lead paragraph</div>
        <div class="ts-sample" style="font-size: var(--fs-lg);">Diagnóstico Digital para Cafezais</div>
      </div>
      <div class="ts-row">
        <div class="ts-name"><span class="token">--fs-xl</span></div>
        <div class="ts-px">20</div><div class="ts-rem">1.250</div>
        <div class="ts-use">Brand wordmark, lead</div>
        <div class="ts-sample" style="font-size: var(--fs-xl);">Diagnóstico Digital</div>
      </div>
      <div class="ts-row">
        <div class="ts-name"><span class="token">--fs-2xl</span></div>
        <div class="ts-px">24</div><div class="ts-rem">1.500</div>
        <div class="ts-use">H3 · cartões</div>
        <div class="ts-sample" style="font-size: var(--fs-2xl); font-weight: var(--fw-bold);">Diagnóstico Digital</div>
      </div>
      <div class="ts-row">
        <div class="ts-name"><span class="token">--fs-3xl</span></div>
        <div class="ts-px">30</div><div class="ts-rem">1.875</div>
        <div class="ts-use">H2 mobile</div>
        <div class="ts-sample" style="font-size: var(--fs-3xl); font-weight: var(--fw-extrabold);">Diagnóstico</div>
      </div>
      <div class="ts-row">
        <div class="ts-name"><span class="token">--fs-4xl</span></div>
        <div class="ts-px">36</div><div class="ts-rem">2.250</div>
        <div class="ts-use">H2 padrão</div>
        <div class="ts-sample" style="font-size: var(--fs-4xl); font-weight: var(--fw-extrabold);">Diagnóstico</div>
      </div>
      <div class="ts-row">
        <div class="ts-name"><span class="token">--fs-5xl</span></div>
        <div class="ts-px">48</div><div class="ts-rem">3.000</div>
        <div class="ts-use">H2 grande / hero mobile</div>
        <div class="ts-sample" style="font-size: var(--fs-5xl); font-weight: var(--fw-extrabold); line-height: 1.05;">Cabeceira</div>
      </div>
      <div class="ts-row">
        <div class="ts-name"><span class="token">--fs-6xl</span></div>
        <div class="ts-px">60</div><div class="ts-rem">3.750</div>
        <div class="ts-use">About h2</div>
        <div class="ts-sample" style="font-size: var(--fs-6xl); font-weight: var(--fw-extrabold); line-height: 1; letter-spacing: var(--tracking-tight);">Terra viva</div>
      </div>
      <div class="ts-row">
        <div class="ts-name"><span class="token">--fs-7xl</span></div>
        <div class="ts-px">72</div><div class="ts-rem">4.500</div>
        <div class="ts-use">Hero h1 desktop</div>
        <div class="ts-sample" style="font-size: var(--fs-7xl); font-weight: var(--fw-extrabold); line-height: 1; letter-spacing: var(--tracking-tight); color: var(--heading);">Café</div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== MARCA / LOGO ===================== -->
<section id="ds-marca">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Marca · Logotipo</span>
      <h2>Um símbolo. Quatro <span class="accent">aplicações.</span></h2>
      <p>
        O símbolo coral da Cabeceira nasce do desenho do grão. Ele anda sozinho, ou
        em lockup com o wordmark Plus Jakarta ExtraBold. Sempre em coral sobre claro,
        ou em coral sobre verde-mata. Nunca tingido de outras cores.
      </p>
    </div>

    <div class="brand-downloads" style="display: flex; flex-wrap: wrap; gap: var(--space-3); justify-content: center; margin: 0 auto var(--space-12); max-width: 720px;">
      <a class="btn cta-btn-accent" href="/design-system/brand/cabeceira-brand.zip" download="cabeceira-brand.zip">
        <span class="material-icons-round">download</span>
        Baixar pacote de logotipos (.zip)
      </a>
      <a class="btn btn-secondary" href="/design-system/brand/svg/cabeceira-symbol.svg" download="cabeceira-symbol.svg">
        Só o símbolo (SVG)
      </a>
      <a class="btn btn-secondary" href="/design-system/brand/png/cabeceira-symbol-1024.png" download="cabeceira-symbol-1024.png">
        Símbolo 1024px (PNG)
      </a>
    </div>
    <p class="body" style="text-align: center; margin: calc(-1 * var(--space-8)) auto var(--space-12); max-width: 640px; color: var(--fg-2); font-size: var(--fs-sm);">
      O <span class="token">.zip</span> traz: <strong>3 SVGs</strong> (símbolo + lockup claro + lockup escuro)
      e <strong>7 PNGs</strong> (símbolo em 64/128/256/512/1024 px, lockup claro e escuro em @2x), além de README com cores oficiais e regras de uso.
    </p>

    <div class="logo-grid">
      <!-- Símbolo isolado -->
      <div class="logo-card">
        <div class="logo-stage">
          <img src="/design-system/assets/logo_cabeceira.svg" alt="Símbolo Cabeceira" style="height: 120px;" />
        </div>
        <div class="logo-meta">
          <div class="logo-name">Símbolo</div>
          <div class="logo-desc">A marca isolada. Para favicons, avatars e selos.</div>
          <div class="logo-hex"><span class="token">#F89C96</span> · 5:6.25 ratio</div>
        </div>
      </div>

      <!-- Lockup horizontal claro -->
      <div class="logo-card">
        <div class="logo-stage">
          <div class="lockup">
            <img src="/design-system/assets/logo_cabeceira.svg" alt="" style="height: 56px;" />
            <span class="lockup-word" style="color: var(--primary);">Cabeceira</span>
          </div>
        </div>
        <div class="logo-meta">
          <div class="logo-name">Lockup horizontal · claro</div>
          <div class="logo-desc">Símbolo + wordmark verde. Aplicação primária no modo claro.</div>
          <div class="logo-hex"><span class="token">#013220</span> + <span class="token">#F89C96</span></div>
        </div>
      </div>

      <!-- Lockup horizontal escuro -->
      <div class="logo-card">
        <div class="logo-stage logo-dark">
          <div class="lockup">
            <img src="/design-system/assets/logo_cabeceira.svg" alt="" style="height: 56px;" />
            <span class="lockup-word" style="color: var(--accent);">Cabeceira</span>
          </div>
        </div>
        <div class="logo-meta">
          <div class="logo-name">Lockup horizontal · escuro</div>
          <div class="logo-desc">Sobre verde-mata, o wordmark vira coral. Não inverter.</div>
          <div class="logo-hex"><span class="token">#0A120E</span> + <span class="token">#F89D93</span></div>
        </div>
      </div>

      <!-- Lockup vertical -->
      <div class="logo-card">
        <div class="logo-stage">
          <div class="lockup-v">
            <img src="/design-system/assets/logo_cabeceira.svg" alt="" style="height: 88px;" />
            <span class="lockup-word" style="color: var(--primary); font-size: 28px;">Cabeceira</span>
            <span class="lockup-tag">Cooperativa Agroecológica</span>
          </div>
        </div>
        <div class="logo-meta">
          <div class="logo-name">Lockup vertical com tagline</div>
          <div class="logo-desc">Para capa de documentos, embalagens e materiais impressos.</div>
          <div class="logo-hex">Tagline · <span class="token">--fs-sm</span> · slate-500</div>
        </div>
      </div>

      <!-- Tamanhos mínimos -->
      <div class="logo-card logo-card--wide">
        <div class="logo-stage" style="justify-content: flex-start; gap: var(--space-12); padding-left: var(--space-10); flex-wrap: wrap;">
          <div class="size-spec">
            <img src="/design-system/assets/logo_cabeceira.svg" alt="" style="height: 24px;" />
            <div class="size-lbl"><b>24px</b><span>favicon · mínimo digital</span></div>
          </div>
          <div class="size-spec">
            <img src="/design-system/assets/logo_cabeceira.svg" alt="" style="height: 40px;" />
            <div class="size-lbl"><b>40px</b><span>navbar</span></div>
          </div>
          <div class="size-spec">
            <img src="/design-system/assets/logo_cabeceira.svg" alt="" style="height: 64px;" />
            <div class="size-lbl"><b>64px</b><span>cabeçalho de seção</span></div>
          </div>
          <div class="size-spec">
            <img src="/design-system/assets/logo_cabeceira.svg" alt="" style="height: 96px;" />
            <div class="size-lbl"><b>96px</b><span>capas, hero</span></div>
          </div>
        </div>
        <div class="logo-meta">
          <div class="logo-name">Tamanhos de aplicação</div>
          <div class="logo-desc">Nunca abaixo de 24px. Sempre com 1× de altura como margem mínima ao redor.</div>
        </div>
      </div>

      <!-- Don'ts -->
      <div class="logo-card logo-card--wide">
        <div class="logo-stage" style="gap: var(--space-8); flex-wrap: wrap;">
          <div class="dont">
            <div class="dont-frame">
              <img src="/design-system/assets/logo_cabeceira.svg" alt="" style="height: 60px; filter: hue-rotate(120deg) saturate(0.7);" />
            </div>
            <div class="dont-x"><span class="material-icons-round">close</span> Não retingir</div>
          </div>
          <div class="dont">
            <div class="dont-frame">
              <img src="/design-system/assets/logo_cabeceira.svg" alt="" style="height: 60px; transform: rotate(15deg);" />
            </div>
            <div class="dont-x"><span class="material-icons-round">close</span> Não rotacionar</div>
          </div>
          <div class="dont">
            <div class="dont-frame" style="background: #cf2222;">
              <img src="/design-system/assets/logo_cabeceira.svg" alt="" style="height: 60px;" />
            </div>
            <div class="dont-x"><span class="material-icons-round">close</span> Sem fundos hostis</div>
          </div>
          <div class="dont">
            <div class="dont-frame">
              <img src="/design-system/assets/logo_cabeceira.svg" alt="" style="height: 60px; transform: scaleX(1.6);" />
            </div>
            <div class="dont-x"><span class="material-icons-round">close</span> Não distorcer</div>
          </div>
        </div>
        <div class="logo-meta">
          <div class="logo-name">Não faça</div>
          <div class="logo-desc">A marca é coral em verde ou claro. Sem rotação, sem outline, sem distorção, sem fundos que briguem com a coral.</div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ===================== ÍCONES ===================== -->
<section id="ds-icones" style="background: var(--surface-alt);">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Iconografia</span>
      <h2>Material Icons. Sem emoji, sem <span class="accent">desenho à mão.</span></h2>
      <p>
        Dois conjuntos do Google: <span class="token">Material Icons Round</span> para
        navegação e <span class="token">Material Symbols Outlined</span> para os pilares
        de serviço. Sempre monocromáticos, sempre dentro de uma "ficha" arredondada.
      </p>
    </div>

    <div class="icon-grid">
      <div class="icon-tile"><span class="icon-chip"><span class="material-symbols-outlined">potted_plant</span></span><span class="name">potted_plant</span></div>
      <div class="icon-tile"><span class="icon-chip"><span class="material-symbols-outlined">biotech</span></span><span class="name">biotech</span></div>
      <div class="icon-tile"><span class="icon-chip"><span class="material-symbols-outlined">coffee_maker</span></span><span class="name">coffee_maker</span></div>
      <div class="icon-tile"><span class="icon-chip"><span class="material-symbols-outlined">park</span></span><span class="name">park</span></div>
      <div class="icon-tile"><span class="icon-chip"><span class="material-symbols-outlined">support_agent</span></span><span class="name">support_agent</span></div>
      <div class="icon-tile"><span class="icon-chip"><span class="material-symbols-outlined">eco</span></span><span class="name">eco</span></div>
      <div class="icon-tile"><span class="icon-chip"><span class="material-symbols-outlined">payments</span></span><span class="name">payments</span></div>
      <div class="icon-tile"><span class="icon-chip"><span class="material-symbols-outlined">description</span></span><span class="name">description</span></div>
      <div class="icon-tile"><span class="icon-chip"><span class="material-symbols-outlined">school</span></span><span class="name">school</span></div>
      <div class="icon-tile"><span class="icon-chip"><span class="material-symbols-outlined">groups</span></span><span class="name">groups</span></div>
      <div class="icon-tile"><span class="icon-chip"><span class="material-symbols-outlined">storefront</span></span><span class="name">storefront</span></div>
      <div class="icon-tile"><span class="icon-chip"><span class="material-symbols-outlined">verified</span></span><span class="name">verified</span></div>
    </div>
  </div>
</section>

<!-- ===================== COMPONENTES ===================== -->
<section id="ds-componentes">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Componentes</span>
      <h2>Peças que conversam <span class="accent">entre si.</span></h2>
      <p>
        Botões, cartões, pílulas e blocos escuros formam a gramática da interface.
        Cada um é construído sobre os mesmos tokens — raio, sombra, espaçamento —
        para que nada precise ser inventado a cada nova tela.
      </p>
    </div>

    <div class="components-grid">

      <!-- Buttons -->
      <div class="component-card">
        <h3>Botões</h3>
        <p>Primary com sombra tingida da marca; secondary discreto; ghost para fundos escuros. Hover sobe 2px.</p>
        <div class="component-stage">
          <button class="btn btn-primary">
            Começar agora
            <span class="material-icons-round">arrow_forward</span>
          </button>
          <button class="btn btn-secondary">Saber mais</button>
        </div>
        <div class="component-stage dark-stage">
          <button class="btn cta-btn-accent">Falar com um técnico</button>
          <button class="btn btn-ghost">Ver detalhes</button>
        </div>
      </div>

      <!-- Pills / Badges -->
      <div class="component-card">
        <h3>Pílulas &amp; selos</h3>
        <p>Para status, eyebrows e selos de certificação sobre fotografia. O ponto pulsa para sinalizar atividade.</p>
        <div class="component-stage" style="flex-direction: column; gap: var(--space-4);">
          <div class="badge-row">
            <span class="pill pill-accent"><span class="dot"></span> Diagnóstico ativo</span>
            <span class="pill pill-primary"><span class="dot"></span> Em campo</span>
            <span class="pill pill-accent">R$ 360 · Investimento único</span>
          </div>
        </div>
        <div class="component-stage dark-stage">
          <span class="pill pill-glass">
            <span class="material-symbols-outlined" style="font-size:18px; color: var(--accent);">verified</span>
            Certificado de Regeneração
          </span>
        </div>
      </div>

      <!-- Service card -->
      <div class="component-card">
        <h3>Cartão de serviço</h3>
        <p>Foto-topo de 140px, ícone-ficha e título-bold. Sombra sobe no hover; foto cresce 110% em 700ms.</p>
        <div class="component-stage" style="background: transparent;">
          <div class="service-card">
            <div class="photo"></div>
            <div class="body">
              <span class="icon-chip-sm"><span class="material-symbols-outlined">potted_plant</span></span>
              <h4>Produção de Mudas</h4>
              <p class="desc">Plantas com padrão genético rastreado, prontas para o campo em ciclos curtos.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial -->
      <div class="component-card">
        <h3>Depoimento</h3>
        <p>Nome real, região real. Aspas tipográficas, peso médio, autor identificado por avatar de gradiente.</p>
        <div class="component-stage">
          <div class="testimonial">
            <p class="quote">“A Cabeceira me ensinou a olhar o cafezal pelo solo. Em três meses, mudou o jeito que faço o manejo.”</p>
            <div class="author">
              <span class="avatar">AF</span>
              <div>
                <div class="who">André Forecchi</div>
                <div class="where">Cafeicultor · Santa Teresa, ES</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Radii -->
      <div class="component-card">
        <h3>Raios</h3>
        <p>Do canto agudo (6px) ao orgânico (64px). Cartões de serviço usam 40px; molduras de hero, 48–64px.</p>
        <div class="component-stage" style="background: transparent; padding: var(--space-2);">
          <div class="radii-grid" style="width: 100%;">
            <div class="radii-tile"><div class="shape" style="border-radius: var(--radius-2xl);"></div><div class="name">2xl</div><div class="px">24px · botões</div></div>
            <div class="radii-tile"><div class="shape" style="border-radius: var(--radius-3xl);"></div><div class="name">3xl</div><div class="px">32px · cards</div></div>
            <div class="radii-tile"><div class="shape" style="border-radius: var(--radius-4xl);"></div><div class="name">4xl</div><div class="px">40px · serviços</div></div>
            <div class="radii-tile"><div class="shape" style="border-radius: var(--radius-5xl);"></div><div class="name">5xl</div><div class="px">48px · hero</div></div>
          </div>
        </div>
      </div>

      <!-- Shadows -->
      <div class="component-card">
        <h3>Sombras</h3>
        <p>Defaults do Tailwind, com duas sombras tingidas para botões da marca.</p>
        <div class="component-stage" style="background: transparent;">
          <div class="shadow-grid" style="width: 100%;">
            <div class="shadow-tile sh-md"><div class="swatch-box"></div><div class="name">md</div><span class="token">--shadow-md</span></div>
            <div class="shadow-tile sh-lg"><div class="swatch-box"></div><div class="name">lg</div><span class="token">--shadow-lg</span></div>
            <div class="shadow-tile sh-2xl"><div class="swatch-box"></div><div class="name">2xl</div><span class="token">--shadow-2xl</span></div>
            <div class="shadow-tile sh-primary"><div class="swatch-box"></div><div class="name">primary/20</div><span class="token">brand lift</span></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ===================== VOZ ===================== -->
<section id="ds-voz" style="background: var(--surface-alt);">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Voz &amp; tom</span>
      <h2>Especialista calorosa. Nunca <span class="accent">corporativa.</span></h2>
      <p>
        A Cabeceira fala em português, no informal "você", contrastando ciência
        e ancestralidade. Substantivos concretos: <span class="token">solo</span>,
        <span class="token">planta</span>, <span class="token">manejo</span>,
        <span class="token">café</span>. Promessas, nunca specs.
      </p>
    </div>

    <div class="voice-grid">
      <div class="voice-card">
        <div class="label">Frase de marca</div>
        <blockquote>
          “A Cabeceira nasceu da necessidade de unir o conhecimento ancestral da
          terra com a precisão da tecnologia moderna.”
        </blockquote>
        <div class="meta">Quem somos · Hero</div>
      </div>
      <div class="voice-card">
        <div class="label">Promessa</div>
        <blockquote>
          “Produzir alimento de qualidade não precisa custar a saúde do planeta.
          A tecnologia deve ser a ferramenta que nos reconecta aos ciclos da natureza.”
        </blockquote>
        <div class="meta">Vision · Bloco escuro</div>
      </div>
      <div class="voice-card">
        <div class="label">Compromisso</div>
        <blockquote>
          “Não entregamos apenas serviços; construímos parcerias de longo prazo
          para garantir que cada hectare seja um legado de abundância.”
        </blockquote>
        <div class="meta">Vision · Encerramento</div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== CTA ===================== -->
<section>
  <div class="container">
    <div class="cta-block">
      <span class="eyebrow">Use o sistema</span>
      <h2>Comece a desenhar com a <span class="accent">Cabeceira.</span></h2>
      <p>
        Tudo o que você acabou de ver — cores, tipografia, raios, sombras,
        componentes — está pronto em um único arquivo de tokens. Importe e plante.
      </p>
      <div class="cta-actions">
        <a class="btn cta-btn-accent" href="/design-system/tokens/cabeceira-tokens.zip" download="cabeceira-tokens.zip">
          Baixar tokens (.zip)
          <span class="material-icons-round">arrow_forward</span>
        </a>
        <a class="btn btn-ghost" href="/design-system/tokens/tokens.json" download="cabeceira-tokens.json">
          Só o tokens.json (Figma)
        </a>
      </div>
      <div class="cta-actions" style="margin-top: var(--space-4);">
        <a class="btn btn-ghost" href="/design-system/brand/cabeceira-brand.zip" download="cabeceira-brand.zip">
          <span class="material-icons-round">download</span>
          Pacote de logotipos (.zip)
        </a>
        <a class="btn btn-ghost" href="/design-system/brand/svg/cabeceira-symbol.svg" download="cabeceira-symbol.svg">
          Símbolo (SVG)
        </a>
      </div>
    </div>
  </div>
</section>`;

const DS_NAV_LINKS = [
  { label: 'Fundamentos', href: '#ds-fundamentos' },
  { label: 'Cores', href: '#ds-cores' },
  { label: 'Tipografia', href: '#ds-tipografia' },
  { label: 'Marca', href: '#ds-marca' },
  { label: '\u00cdcones', href: '#ds-icones' },
  { label: 'Componentes', href: '#ds-componentes' },
  { label: 'Voz', href: '#ds-voz' },
];

const DesignSystemPage: React.FC<DesignSystemPageProps> = ({
  toggleDarkMode,
  isDarkMode,
  images,
  onNavigateHome,
  onNavigate,
}) => {
  // Inject Google Fonts links for design system (Plus Jakarta Sans + Material Icons)
  React.useEffect(() => {
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
      'https://fonts.googleapis.com/icon?family=Material+Icons+Round',
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap',
    ];
    fonts.forEach((href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300 flex flex-col">
      <Navbar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        images={images}
        onNavigateHome={onNavigateHome}
        onNavigate={onNavigate}
      />

      {/* Design-system secondary nav */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-20 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 h-10 overflow-x-auto">
            {DS_NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-500 hover:text-primary dark:hover:text-accent whitespace-nowrap transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1">
        <style dangerouslySetInnerHTML={{ __html: DS_CSS }} />
        <div dangerouslySetInnerHTML={{ __html: DS_BODY }} />
      </main>

      <Footer images={images} onNavigate={onNavigate} />
      <ScrollToTop />
    </div>
  );
};

export default DesignSystemPage;
