import useFadeIn from "../hooks/useFadeIn";
import { s } from "../assets/styles";

export default function FadeSection({ id, children }) {
    const { ref, visible } = useFadeIn();
    return (
        <div
            ref={ref}
            id={id}
            style={{
                ...s.section,
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(16px)",
                transition: "opacity 0.55s ease, transform 0.55s ease",
            }}
        >
            {children}
        </div>
    );
}
