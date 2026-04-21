export const FONT_IMPORT = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: #faf9f7; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-thumb { background: #d1cfc9; border-radius: 2px; }
 
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
  }
  .hero-eyebrow  { animation: fadeUp 0.5s 0.10s ease both; }
  .hero-headline { animation: fadeUp 0.5s 0.25s ease both; }
  .hero-bio      { animation: fadeUp 0.5s 0.40s ease both; }
  .hero-actions  { animation: fadeUp 0.5s 0.55s ease both; }
`;

export const s = {
    /* base */
    wrap: {
        fontFamily: "'DM Mono', monospace",
        fontSize: 14,
        lineHeight: 1.7,
        color: "#1a1a18",
        background: "#faf9f7",
        WebkitFontSmoothing: "antialiased",
    },
    container: { maxWidth: 720, margin: "0 auto", padding: "0 32px" },

    /* nav */
    nav: {
        paddingTop: 40,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    navName: {
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: "1.1rem",
        letterSpacing: "-0.01em",
        color: "#1a1a18",
        textDecoration: "none",
    },
    navList: { display: "flex", gap: 28, listStyle: "none" },

    /* hero */
    hero: { padding: "96px 0 80px", borderBottom: "1px solid #e8e6e1" },
    eyebrow: {
        fontSize: "0.72rem",
        color: "#888880",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: 24,
    },
    headline: {
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: "clamp(2.8rem, 6vw, 4.4rem)",
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
        marginBottom: 28,
    },
    headlineEm: { fontStyle: "italic", color: "#888880" },
    bio: {
        fontSize: "0.9rem",
        color: "#888880",
        maxWidth: 480,
        lineHeight: 1.85,
        marginBottom: 40,
    },
    actions: { display: "flex", alignItems: "center", gap: 28 },

    /* section */
    section: { padding: "72px 0", borderBottom: "1px solid #e8e6e1" },
    sectionLabel: {
        fontSize: "0.7rem",
        color: "#888880",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginBottom: 40,
    },

    /* about */
    aboutText: {
        fontSize: "0.9rem",
        color: "#888880",
        maxWidth: 560,
        lineHeight: 1.9,
    },
    stackList: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 32 },

    /* project */
    projectItem: {
        display: "grid",
        gridTemplateColumns: "80px 1fr auto",
        gap: 24,
        alignItems: "start",
        padding: "28px 0",
        borderBottom: "1px solid #e8e6e1",
        cursor: "default",
    },
    projectNum: {
        fontSize: "0.7rem",
        color: "#888880",
        letterSpacing: "0.08em",
        paddingTop: 3,
    },
    projectTitle: {
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: "1.15rem",
        letterSpacing: "-0.01em",
        marginBottom: 6,
        transition: "color 0.15s",
    },
    projectDesc: {
        fontSize: "0.82rem",
        color: "#888880",
        lineHeight: 1.7,
        marginBottom: 12,
    },
    projectTags: { display: "flex", flexWrap: "wrap", gap: 6 },
    projectLinkCol: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-end",
        paddingTop: 3,
    },

    /* contact */
    contactSub: {
        fontSize: "0.82rem",
        color: "#888880",
        marginBottom: 28,
        maxWidth: 380,
        lineHeight: 1.8,
    },
    socialRow: { display: "flex", gap: 20, marginTop: 32 },

    /* footer */
    footer: {
        padding: "32px 0 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    footerCopy: { fontSize: "0.72rem", color: "#888880" },
    footerStatus: {
        fontSize: "0.72rem",
        color: "#888880",
        display: "flex",
        alignItems: "center",
        gap: 7,
    },
    statusDot: {
        width: 6,
        height: 6,
        background: "#22c55e",
        borderRadius: "50%",
        animation: "blink 2.5s ease infinite",
    },
};
