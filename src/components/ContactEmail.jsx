import { useState } from "react";

export default function ContactEmail() {
    const [hov, setHov] = useState(false);
    return (
        <a
            href="mailto:hello@yourname.dev"
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                letterSpacing: "-0.02em",
                display: "inline-block",
                color: "#1a1a18",
                textDecoration: "none",
                marginBottom: 32,
                borderBottom: `1px solid ${hov ? "#1a1a18" : "transparent"}`,
                transition: "border-color 0.25s ease",
            }}
        >
            hello@yourname.dev
        </a>
    );
}
