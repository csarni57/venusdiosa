/* ============================================================
   Venus Diosa – Booking Page Stylesheet
   Goddess-inspired luxury nail salon
   ============================================================ */

/* ── Reset & Root Variables ─────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Rose-gold / blush palette inspired by the nail art */
  --rose-gold:      #C4956A;
  --rose-gold-lt:   #E8C9A8;
  --rose-gold-dk:   #8B5E3C;
  --blush:          #F4D5C8;
  --blush-deep:     #D4908A;
  --cream:          #FDF6F0;

  /* Surfaces */
  --black:          #110C0A;
  --surface:        #1A1210;
  --surface2:       #241A17;
  --surface3:       #2E211D;
  --surface-card:   #1F1714;

  /* Text */
  --text:           #F5EAE0;
  --text-muted:     #A08878;

  /* Borders */
  --border:         rgba(196, 149, 106, 0.22);
  --border-hover:   rgba(196, 149, 106, 0.55);
  --border-blush:   rgba(212, 144, 138, 0.3);

  /* Utility */
  --danger:         #E24B4A;
  --radius:         4px;
  --radius-lg:      10px;
  --radius-pill:    50px;

  /* Fonts */
  --font-display:   'Playfair Display', Georgia, serif;
  --font-body:      'Lato', system-ui, sans-serif;
}

/* ── Base ───────────────────────────────────────────────────── */
html { scroll-behavior: smooth; }

body {
  background: var(--black);
  color: var(--text);
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.65;
  letter-spacing: 0.02em;
  min-height: 100vh;
}

/* ── Header ─────────────────────────────────────────────────── */
.header {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 3rem 2rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Subtle radial glow from top */
.header::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 60% at 50% -10%, rgba(196,149,106,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 50% 100%, rgba(212,144,138,0.06) 0%, transparent 60%);
  pointer-events: none;
}

/* Decorative corner petals */
.header::after {
  content: '✿';
  position: absolute;
  top: 12px;
  right: 20px;
  font-size: 18px;
  color: var(--rose-gold);
  opacity: 0.2;
}

.header-inner { position: relative; z-index: 1; }

/* Venus symbol emblem */
.logo-emblem {
  font-size: 2.2rem;
  color: var(--rose-gold);
  opacity: 0.75;
  display: block;
  margin-bottom: 0.4rem;
  line-height: 1;
}

.header-ornament {
  font-size: 11px;
  color: var(--rose-gold);
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
  opacity: 0.8;
}

.header h1 {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 8vw, 4rem);
  font-weight: 700;
  color: var(--rose-gold-lt);
  line-height: 1.05;
  margin-bottom: 0.5rem;
  letter-spacing: 0.04em;
}

.header-tagline {
  font-size: 13px;
  color: var(--text-muted);
  letter-spacing: 0.18em;
  font-style: italic;
  font-family: var(--font-display);
}

.gold-rule {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 1.5rem auto 0;
  max-width: 180px;
}
.gold-rule span { flex: 1; height: 1px; background: var(--rose-gold); opacity: 0.35; }
.gold-rule i    { color: var(--rose-gold); font-size: 10px; opacity: 0.65; font-style: normal; }

/* ── Layout ─────────────────────────────────────────────────── */
.main {
  max-width: 820px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
}

/* ── Steps Indicator ────────────────────────────────────────── */
.steps {
  display: flex;
  align-items: stretch;
  margin-bottom: 2.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--surface);
}

.step {
  flex: 1;
  padding: 0.9rem 0.5rem;
  text-align: center;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  border-right: 1px solid var(--border);
  transition: color 0.3s, background 0.3s;
  cursor: default;
  line-height: 1.4;
}
.step:last-child { border-right: none; }
.step.active {
  background: rgba(196, 149, 106, 0.12);
  color: var(--rose-gold-lt);
}
.step.done { color: var(--rose-gold); opacity: 0.55; }

.step-num {
  display: inline-block;
  width: 20px; height: 20px;
  border-radius: 50%;
  border: 1px solid currentColor;
  line-height: 18px;
  font-size: 11px;
  margin-bottom: 4px;
  text-align: center;
}

/* ── Panels ─────────────────────────────────────────────────── */
.panel { display: none; animation: fadeIn 0.4s ease; }
.panel.active { display: block; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
}

/* ── Section Titles ─────────────────────────────────────────── */
.section-label {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--rose-gold-lt);
  margin-bottom: 1.25rem;
  font-weight: 400;
  font-style: italic;
}

/* ── Service Cards ──────────────────────────────────────────── */
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 12px;
  margin-bottom: 2rem;
}

.service-card {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.2rem 1.1rem 1rem;
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s, transform 0.2s;
  position: relative;
  outline: none;
}

.service-card:hover,
.service-card:focus {
  border-color: var(--border-hover);
  transform: translateY(-2px);
}

.service-card.selected {
  border-color: var(--rose-gold);
  background: rgba(196, 149, 106, 0.1);
}

.service-card.selected::after {
  content: '✓';
  position: absolute;
  top: 10px; right: 12px;
  color: var(--rose-gold);
  font-size: 14px;
}

/* Featured / Signature card */
.service-card.featured {
  border-color: var(--border-blush);
  background: linear-gradient(135deg, var(--surface-card) 70%, rgba(212,144,138,0.06) 100%);
}

.service-card.featured.selected {
  border-color: var(--blush-deep);
}

.service-badge {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--blush-deep);
  border: 1px solid var(--border-blush);
  border-radius: var(--radius-pill);
  padding: 2px 10px;
  margin-bottom: 8px;
}

.service-icon {
  font-size: 14px;
  color: var(--rose-gold);
  opacity: 0.5;
  margin-bottom: 6px;
}

.service-name {
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 4px;
  color: var(--text);
  font-family: var(--font-body);
}

.service-meta { font-size: 12px; color: var(--text-muted); }

.service-price {
  color: var(--rose-gold-lt);
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
  font-family: var(--font-display);
  font-style: italic;
}

/* ── Calendar ───────────────────────────────────────────────── */
.cal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.cal-nav {
  background: none;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--rose-gold);
  width: 36px; height: 36px;
  cursor: pointer;
  font-size: 18px;
  display: flex; align-items: center; justify-content: center;
  transition: border-color 0.2s, background 0.2s;
}
.cal-nav:hover { border-color: var(--rose-gold); background: rgba(196,149,106,0.1); }

.cal-month {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--rose-gold-lt);
  font-style: italic;
}

.cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 1.5rem;
}

.cal-day-name {
  text-align: center;
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  padding: 6px 0;
  text-transform: uppercase;
}

.cal-day {
  text-align: center;
  padding: 8px 4px;
  border-radius: var(--radius);
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  border: 1px solid transparent;
  min-height: 36px;
  line-height: 18px;
}

.cal-day:hover:not(.disabled):not(.empty) {
  background: rgba(196, 149, 106, 0.15);
  border-color: var(--border-hover);
}
.cal-day.selected { background: var(--rose-gold); color: var(--black); font-weight: 700; }
.cal-day.disabled { color: var(--surface3); cursor: default; }
.cal-day.empty    { cursor: default; }
.cal-day.today    { border-color: rgba(196,149,106,0.45); color: var(--rose-gold-lt); }

/* ── Time Slots ─────────────────────────────────────────────── */
.time-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
  gap: 8px;
}

.time-slot {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.55rem 0.4rem;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  font-family: var(--font-body);
  color: var(--text);
}
.time-slot:hover { border-color: var(--border-hover); background: rgba(196,149,106,0.08); }
.time-slot.selected { border-color: var(--rose-gold); background: rgba(196,149,106,0.16); color: var(--rose-gold-lt); }
.time-slot.unavailable { opacity: 0.22; cursor: default; pointer-events: none; }

/* ── Form ───────────────────────────────────────────────────── */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.form-row { margin-bottom: 1.1rem; }

.form-row label {
  display: block;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.form-row input,
.form-row textarea,
.form-row select {
  width: 100%;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  padding: 0.75rem 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}

.form-row input:focus,
.form-row textarea:focus,
.form-row select:focus {
  border-color: var(--rose-gold);
  box-shadow: 0 0 0 3px rgba(196, 149, 106, 0.1);
}

.form-row input::placeholder,
.form-row textarea::placeholder {
  color: var(--text-muted);
  opacity: 0.5;
}

.form-row textarea { resize: vertical; min-height: 90px; }
.form-row select option { background: var(--surface2); }

/* ── Privacy Notice ─────────────────────────────────────────── */
.privacy-note {
  font-size: 12px;
  color: var(--text-muted);
  background: var(--surface2);
  border: 1px solid var(--border);
  border-left: 3px solid var(--rose-gold);
  border-radius: var(--radius);
  padding: 0.85rem 1rem;
  margin-top: 1rem;
  line-height: 1.7;
}
.privacy-note strong { color: var(--rose-gold-lt); font-weight: 700; }

/* ── Buttons ────────────────────────────────────────────────── */
.btn-row {
  display: flex;
  gap: 10px;
  margin-top: 2rem;
  justify-content: flex-end;
}

.btn {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  padding: 0.85rem 2.2rem;
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s, opacity 0.2s, transform 0.15s;
  border: 1px solid;
}

.btn:active:not(:disabled) { transform: scale(0.97); }

.btn-outline {
  background: transparent;
  border-color: var(--border);
  color: var(--text-muted);
}
.btn-outline:hover { border-color: var(--border-hover); color: var(--text); }

.btn-gold {
  background: var(--rose-gold);
  border-color: var(--rose-gold);
  color: var(--black);
  font-weight: 700;
}
.btn-gold:hover:not(:disabled) { background: var(--rose-gold-lt); border-color: var(--rose-gold-lt); }
.btn-gold:disabled { opacity: 0.38; cursor: default; }

/* ── Booking Summary ────────────────────────────────────────── */
.summary-box {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 7px 0;
  border-bottom: 1px solid rgba(196, 149, 106, 0.1);
  font-size: 14px;
}
.summary-row:last-child { border-bottom: none; }
.summary-row .lbl { color: var(--text-muted); font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; }
.summary-row .val { color: var(--text); text-align: right; }
.summary-row .val.gold { color: var(--rose-gold-lt); font-family: var(--font-display); font-style: italic; font-size: 16px; }

/* ── Confirmation Screen ────────────────────────────────────── */
.confirm-box {
  text-align: center;
  padding: 3.5rem 2rem;
}

.confirm-icon {
  width: 72px; height: 72px;
  border-radius: 50%;
  border: 1px solid var(--rose-gold);
  margin: 0 auto 1.5rem;
  display: flex; align-items: center; justify-content: center;
  font-size: 32px;
  color: var(--rose-gold);
}

.confirm-box h2 {
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: var(--rose-gold-lt);
  margin-bottom: 0.6rem;
  font-style: italic;
}

.confirm-box p { color: var(--text-muted); font-size: 14px; line-height: 1.8; }
.confirm-box p strong { color: var(--rose-gold-lt); }

.gcal-note {
  display: inline-block;
  margin-top: 1.75rem;
  font-size: 12px;
  color: var(--text-muted);
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.85rem 1.25rem;
  text-align: left;
  line-height: 1.8;
}

/* ── Footer ─────────────────────────────────────────────────── */
.footer {
  border-top: 1px solid var(--border);
  padding: 1.5rem 2rem;
  text-align: center;
  background: var(--surface);
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.1em;
}
.footer-logo {
  font-family: var(--font-display);
  font-style: italic;
  color: var(--rose-gold);
  font-size: 14px;
}
.footer-sep { color: var(--rose-gold); opacity: 0.4; }

/* ── Error ──────────────────────────────────────────────────── */
.error-msg {
  color: var(--danger);
  font-size: 12px;
  margin-top: 8px;
  padding: 0.5rem 0.75rem;
  background: rgba(226, 75, 74, 0.08);
  border-radius: var(--radius);
  border: 1px solid rgba(226, 75, 74, 0.25);
}

/* ── Utilities ──────────────────────────────────────────────── */
.mt-2 { margin-top: 1.5rem; }

/* ── Responsive ─────────────────────────────────────────────── */
@media (max-width: 580px) {
  .form-grid { grid-template-columns: 1fr; }
  .service-grid { grid-template-columns: 1fr 1fr; }
  .header h1 { font-size: 2.2rem; }
  .btn-row { flex-direction: column-reverse; }
  .btn { width: 100%; text-align: center; }
}

@media (max-width: 380px) {
  .service-grid { grid-template-columns: 1fr; }
  .steps { font-size: 10px; }
  .header h1 { font-size: 1.8rem; }
}


/* ── Language Toggle Bar ────────────────────────────────────── */
.lang-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  padding: 0.5rem 1.25rem;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.lang-btn {
  background: none;
  border: 1px solid transparent;
  border-radius: 20px;
  color: var(--text-muted);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 4px 12px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.lang-btn:hover {
  color: var(--rose-gold-lt);
  border-color: var(--border-hover);
}

.lang-btn.active {
  color: var(--rose-gold-lt);
  border-color: var(--rose-gold);
  background: rgba(196, 149, 106, 0.12);
}

.lang-sep {
  color: var(--border);
  font-size: 14px;
  user-select: none;
}

/* ── Schedule Availability Note ─────────────────────────────── */
.schedule-note {
  font-size: 12px;
  color: var(--rose-gold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
  opacity: 0.8;
}
