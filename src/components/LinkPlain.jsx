import { useState } from "react";

export default function LinkPlain({ href, children }) {
    const [hov, setHov] = useState(false);
    return (
        <a
            href={href}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                fontSize: "0.82rem",
                color: hov ? "#1a1a18" : "#888880",
                textDecoration: "none",
                transition: "color 0.15s",
            }}
        >
            {children}
        </a>
    );
}
