import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      // The rail draws itself as you scroll, like a film leader.
      gsap.fromTo(".tl-fill", { scaleY: 0 }, { scaleY: 1, ease: "none",
        scrollTrigger: { trigger: ".tl", start: "top 60%", end: "bottom 60%", scrub: true } });
      gsap.utils.toArray(".tl-item").forEach((el) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 72%" } });
        tl.fromTo(el.querySelector(".tl-card"), { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "expo.out" })
          .from(el.querySelectorAll(".tl-card > *"), { y: 28, opacity: 0, stagger: 0.08, duration: 0.7, ease: "power3.out" }, 0.2)
          .from(el.querySelector(".tl-period"), { opacity: 0, x: -30, duration: 0.8 }, 0)
          .to(el.querySelector(".tl-dot"), { scale: 1, backgroundColor: "#ffb454", boxShadow: "0 0 24px #ffb454", duration: 0.5 }, 0);
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="exp" ref={ref}>
      <div className="wrap">
        <h2 className="title">Experience</h2>
        <div className="tl">
          <div className="tl-rail"><div className="tl-fill" /></div>
          {experience.map((e) => (
            <article className="tl-item" key={e.role + e.period}>
              <span className="tl-dot" />
              <div className="tl-period">{e.period}</div>
              <div className="tl-card">
                <small className="tl-type">{e.type}</small>
                <h3>{e.role}</h3>
                <p className="tl-org">{e.org}</p>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <div className="stack">{e.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
