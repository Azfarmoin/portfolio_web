import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pic from "../assets/azfarpf.png";
import resume from "../assets/AzfarmoinResume.pdf";
import { projects } from "../data/content";

gsap.registerPlugin(ScrollTrigger);
const GH = "https://github.com/Azfarmoin";

const split = (t) => t.split("").map((c, i) => <span className="ch" key={i}>{c === " " ? "\u00A0" : c}</span>);

export function Hero({ ready }) {
  const ref = useRef();
  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      gsap.to(".hero .ch", { y: 0, duration: 1.3, ease: "expo.out", stagger: 0.04 });
      gsap.from(".hero-fade", { opacity: 0, y: 24, duration: 1, delay: 1, stagger: 0.15 });
      gsap.to(".hero .wrap", { scale: 0.85, opacity: 0, yPercent: -12, ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true } });
    }, ref);
    return () => ctx.revert();
  }, [ready]);
  return (
    <section id="top" className="hero" ref={ref}>
      <div className="wrap">
        <h1 className="title">
          <span className="ln">{split("Muhammad")}</span>
          <span className="ln"><i>{split("Azfar")}</i> {split("Moin")}</span>
        </h1>
        <p className="lede hero-fade">Junior full-stack developer in Karachi. I build MERN applications with secure APIs, real-time features and interfaces that move.</p>
        <div className="hero-fade">
          <a className="btn solid" href="#work">Watch the reel</a>
          <a className="btn ghost" href={resume} download>Download résumé</a>
        </div>
      </div>
      <div className="scrollcue">Scroll to begin</div>
    </section>
  );
}

const creds = [
  ["Education", "BS Software Engineering, University of Karachi (UBIT), 2026 to 2029"],
  ["Simulations", "Skyscanner Front-End Engineering and H2 Ventures Venture Capital, via Forage, Sep 2026"],
  ["Certified", "Full Stack Web Development (MERN, REST APIs, database design), UI Learning Computer Institute. Kaggle micro-courses in Python, Pandas and machine learning."],
  ["In progress", "Flutter Development, AWS Cloud Computing, AWS Certified DevOps, CompTIA Security+"],
];

export function About() {
  const ref = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".frame img", { scale: 1, yPercent: -6, ease: "none", scrollTrigger: { trigger: ".frame", scrub: true } });
      gsap.from(".about-grid > div:last-child > *", { opacity: 0, y: 40, stagger: 0.12, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".about-grid", start: "top 70%" } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section id="about" className="about" ref={ref}>
      <div className="wrap about-grid">
        <div className="frame"><img src={pic} alt="Portrait of Muhammad Azfar Moin" /></div>
        <div>
          <h2 className="title">Built on the full stack</h2>
          <p style={{ marginTop: "1.5rem" }}>Software engineering student with hands-on experience building responsive, database-driven web applications. I design RESTful APIs, model data in MongoDB, secure routes with JWT, and add GSAP and Three.js where motion helps. I'm looking for internship and entry-level software engineer or web developer roles.</p>
          <ul className="creds">{creds.map(([k, v]) => <li key={k}><b>{k}</b><span>{v}</span></li>)}</ul>
        </div>
      </div>
    </section>
  );
}

export function Work() {
  const ref = useRef(), reel = useRef();
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 821px) and (prefers-reduced-motion: no-preference)", () => {
      const dist = () => reel.current.scrollWidth - innerWidth;
      gsap.to(reel.current, { x: () => -dist(), ease: "none",
        scrollTrigger: { trigger: ref.current, pin: true, scrub: 0.6, end: () => "+=" + dist(), invalidateOnRefresh: true } });
    });
    return () => mm.revert();
  }, []);
  return (
    <section id="work" className="work" ref={ref}>
      <div className="work-head"><h2 className="title">The reel</h2></div>
      <div className="reel" ref={reel}>
        {projects.map((p) => (
          <article className="panel" key={p.title}>
            <div><h3>{p.title}</h3><p>{p.description}</p><div className="stack">{p.stack.map((x) => <span key={x}>{x}</span>)}</div></div>
            <a className="btn ghost" style={{ margin: 0, alignSelf: "flex-start" }} href={p.live || p.github || GH} target="_blank" rel="noopener noreferrer">{p.live ? "View live" : "View on GitHub"}</a>
          </article>
        ))}
        <article className="panel end"><h3>Your project is the next scene</h3><p>Open to internships and entry-level roles.</p><a className="btn solid" style={{ marginTop: "1.5rem", alignSelf: "flex-start" }} href="#contact">Start a conversation</a></article>
      </div>
    </section>
  );
}

export function Nav() {
  return (
    <nav className="nav">
      <a className="logo" href="#top">Azfar Moin</a>
      <div><a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#certificates">Certificates</a><a href="#contact">Contact</a></div>
    </nav>
  );
}
