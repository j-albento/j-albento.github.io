import { useState } from "react";

export default function NavLink({ href, children }) {
    const [hov, setHov] = useState(false);
    return (
        <li>
            <a
                href={href}
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
                style={{
                    fontSize: "0.78rem",
                    color: hov ? "#1a1a18" : "#888880",
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    transition: "color 0.15s",
                }}
            >
                {children}
            </a>
        </li>
    );
}
