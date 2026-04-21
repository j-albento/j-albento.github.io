export default function PTag({ label }) {
    return (
        <span
            style={{
                fontSize: "0.68rem",
                color: "#888880",
                background: "#e8e6e1",
                padding: "3px 8px",
                letterSpacing: "0.04em",
            }}
        >
            {label}
        </span>
    );
}
