import { useState } from "react";

export default function LinkArrow({ href, children }) {
    const [hov, setHov] = useState(false);
    return (
        <a
            href={href}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: hov ? 10 : 6,
                fontSize: "0.82rem",
                color: "#2a5cff",
                fontWeight: 500,
                textDecoration: "none",
                transition: "gap 0.2s",
            }}
        >
            {children}
        </a>
    );
}
