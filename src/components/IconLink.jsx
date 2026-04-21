import { useState } from "react";

export default function IconLink({ href, title, children }) {
    const [hov, setHov] = useState(false);
    return (
        <a
            href={href}
            title={title}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                color: hov ? "#2a5cff" : "#888880",
                transition: "color 0.15s",
                display: "flex",
                textDecoration: "none",
            }}
        >
            {children}
        </a>
    );
}
