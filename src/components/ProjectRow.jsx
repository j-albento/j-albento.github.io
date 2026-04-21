import { useState } from "react";
import { IconGitHub, IconExternal } from "./assets/icons";
import { s } from "../assets/styles";
import PTag from "./PTag";
import IconLink from "./IconLink";

export default function ProjectRow({ project, first }) {
    const [hov, setHov] = useState(false);
    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                ...s.projectItem,
                borderTop: first ? "1px solid #e8e6e1" : "none",
            }}
        >
            <div style={s.projectNum}>{project.num}</div>
            <div>
                <div
                    style={{
                        ...s.projectTitle,
                        color: hov ? "#2a5cff" : "#1a1a18",
                    }}
                >
                    {project.title}
                </div>
                <div style={s.projectDesc}>{project.desc}</div>
                <div style={s.projectTags}>
                    {project.tags.map((t) => (
                        <PTag key={t} label={t} />
                    ))}
                </div>
            </div>
            <div style={s.projectLinkCol}>
                <IconLink href={project.github} title="GitHub">
                    <IconGitHub />
                </IconLink>
                <IconLink href={project.live} title="Live">
                    <IconExternal />
                </IconLink>
            </div>
        </div>
    );
}
