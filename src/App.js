import React from "react";
import "./App.css";
import { FONT_IMPORT, s } from "./styles";
import { NAV_LINKS, STACK, PROJECTS } from "./data";
import NavLink from "./components/NavLink";
import SocialLink from "./components/SocialLink";
import { IconGitHub, IconX, IconLinkedIn } from "./assets/icons";
import LinkArrow from "./components/LinkArrow";
import LinkPlain from "./components/LinkPlain";
import FadeSection from "./components/FadeSection";
import StackTag from "./components/StackTag";
import ContactEmail from "./components/ContactEmail";
import ProjectRow from "./components/ProjectRow";

function App() {
    return (
        <div className="App">
            <style>{FONT_IMPORT}</style>
            <div style={s.wrap}>
                <div style={s.container}>
                    <nav style={s.nav}>
                        <a style={s.navName}>Joanna Albento</a>
                        <ul style={s.navList}>
                            {NAV_LINKS.map((l) => (
                                <NavLink key={l} href={`#${l.toLowerCase()}`}>
                                    {l.toLowerCase()}
                                </NavLink>
                            ))}
                        </ul>
                    </nav>

                    <div style={s.socialRow}>
                        <SocialLink
                            href="#"
                            icon={<IconGitHub />}
                            label="GitHub"
                        />
                        <SocialLink
                            href="#"
                            icon={<IconLinkedIn />}
                            label="LinkedIn"
                        />
                        <SocialLink
                            href="#"
                            icon={<IconX />}
                            label="X / Twitter"
                        />
                    </div>

                    <div style={s.hero}>
                        <div className="hero-eyebrow" style={s.eyebrow}>
                            Full-Stack Developer · Software Development Student
                        </div>
                        <h1 className="hero-headline" style={s.headline}>
                            Building things
                            <br />
                            for the <em style={s.headlineEm}>web.</em>
                        </h1>
                        <p className="hero-bio" style={s.bio}>
                            Software development student with a love for
                            building{" "}
                            <strong
                                style={{ color: "#1a1a18", fontWeight: 500 }}
                            >
                                full-stack web applications
                            </strong>{" "}
                            — from clean UIs to reliable backends. I care about
                            writing code that's readable, scalable, and ships on
                            time.
                        </p>
                        <div className="hero-actions" style={s.actions}>
                            <LinkArrow href="#work">See my work →</LinkArrow>
                            <LinkPlain href="mailto:joannamarie.albento@gmail.com">
                                joannamarie.albento@gmail.com
                            </LinkPlain>
                        </div>
                    </div>

                    <FadeSection id="about">
                        <div style={s.sectionLabel}>About</div>
                        <div style={s.aboutText}>
                            <p>
                                Hey, I'm{" "}
                                <strong
                                    style={{
                                        color: "#1a1a18",
                                        fontWeight: 500,
                                    }}
                                >
                                    Your Name
                                </strong>
                                . I'm a software development student with a
                                passion for writing code and solving problems
                                that don't exist yet.
                            </p>
                            <p style={{ marginTop: 16 }}>
                                Currently looking for{" "}
                                <strong
                                    style={{
                                        color: "#1a1a18",
                                        fontWeight: 500,
                                    }}
                                >
                                    internships and co-op placements
                                </strong>{" "}
                                where I can contribute to a real product and
                                keep growing as a developer.
                            </p>
                        </div>
                        <div style={s.stackList}>
                            {STACK.map((t) => (
                                <StackTag key={t} label={t} />
                            ))}
                        </div>
                    </FadeSection>

                    <FadeSection id="work">
                        <div style={s.sectionLabel}>Selected Work</div>
                        <div>
                            {PROJECTS.map((p, i) => (
                                <ProjectRow
                                    key={p.num}
                                    project={p}
                                    first={i === 0}
                                />
                            ))}
                        </div>
                    </FadeSection>

                    <FadeSection id="contact">
                        <div style={s.sectionLabel}>Contact</div>
                        <p style={s.contactSub}>
                            Open to internships, co-ops, and interesting
                            conversations. Don't hesitate to reach out.
                        </p>
                        <ContactEmail />
                        <div style={s.socialRow}>
                            <SocialLink
                                href="#"
                                icon={<IconGitHub />}
                                label="GitHub"
                            />
                            <SocialLink
                                href="#"
                                icon={<IconLinkedIn />}
                                label="LinkedIn"
                            />
                        </div>
                    </FadeSection>

                    <footer style={s.footer}>
                        <span style={s.footerCopy}>© 2026 Joanna Albento</span>
                        <span style={s.footerStatus}>
                            <span style={s.statusDot} />
                            Available for work
                        </span>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default App;
