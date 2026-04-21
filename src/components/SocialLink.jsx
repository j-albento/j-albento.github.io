import { useState } from "react";

export default function SocialLink({ href, icon, label }) {
    const [hov, setHov] = useState(false);
    return (
        <a
            href={href}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                fontSize: "0.75rem",
                color: hov ? "#1a1a18" : "#888880",
                letterSpacing: "0.06em",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "color 0.15s",
            }}
        >
            {icon}
            {label}
        </a>
    );
}
