import { useState } from "react";

export default function StackTag({ label }) {
    const [hov, setHov] = useState(false);
    return (
        <span
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                fontSize: "0.72rem",
                letterSpacing: "0.05em",
                color: hov ? "#1a1a18" : "#888880",
                border: `1px solid ${hov ? "#1a1a18" : "#e8e6e1"}`,
                padding: "5px 12px",
                transition: "border-color 0.15s, color 0.15s",
                cursor: "default",
            }}
        >
            {label}
        </span>
    );
}
