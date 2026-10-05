import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

const all = skills.flatMap((s) => s.items);
const rows = [0, 1, 2].map((r) => all.filter((_, i) => i % 3 === r));

export default function Skills() {
  const ref = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Giant outlined words slide in opposite directions as you scroll past.
      gsap.utils.toArray(".mq-row").forEach((row, i) => {
        const dir = i % 2 ? 1 : -1;
        gsap.fromTo(row, { xPercent: dir > 0 ? -35 : 0 }, { xPercent: dir > 0 ? 0 : -35, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 1 } });
      });
      gsap.from(".sk-cat", { opacity: 0, y: 60, stagger: 0.1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".sk-cats", start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  // Chips light up and lift as the cursor gets close.
  const onMove = (e) => {
    ref.current.querySelectorAll(".chip").forEach((c) => {
      const r = c.getBoundingClientRect();
      const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
      c.style.setProperty("--p", Math.max(0, 1 - d / 170).toFixed(3));
    });
  };
  const onLeave = () => ref.current.querySelectorAll(".chip").forEach((c) => c.style.setProperty("--p", 0));

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="mq" aria-hidden="true">
        {rows.map((r, i) => <div className="mq-row" key={i}>{[...r, ...r, ...r].map((w, j) => <span key={j}>{w}</span>)}</div>)}
      </div>
      <div className="wrap" style={{ position: "relative" }}>
        <h2 className="title">The toolkit</h2>
        <p className="lede">{all.length} tools across {skills.length} disciplines. Move your cursor over them.</p>
        <div className="sk-cats" onPointerMove={onMove} onPointerLeave={onLeave}>
          {skills.map((s) => (
            <div className="sk-cat" key={s.name}>
              <h3>{s.name}</h3>
              <div className="chips">{s.items.map((i) => <span className="chip" key={i}>{i}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
