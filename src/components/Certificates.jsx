import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certificates } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

function Card({ c, onOpen }) {
  const el = useRef();
  const move = (e) => {
    const r = el.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    gsap.to(el.current, { rotateY: (x - 0.5) * 14, rotateX: (0.5 - y) * 14, duration: 0.4, ease: "power2.out" });
    el.current.style.setProperty("--sx", x * 100 + "%");
    el.current.style.setProperty("--sy", y * 100 + "%");
  };
  const leave = () => gsap.to(el.current, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1,.5)" });
  const done = c.status === "completed";
  const Tag = c.image ? "button" : "div";
  return (
    <Tag ref={el} className={"cert " + (done ? "done" : "wip")} onPointerMove={move} onPointerLeave={leave}
      onClick={c.image ? () => onOpen(c) : undefined} aria-label={c.image ? "View " + c.title : undefined}>
      <div className="cert-art">
        {c.image ? <img src={c.image} alt={c.title} loading="lazy" /> : <span>{c.title}</span>}
      </div>
      <div className="cert-body">
        <b className="cert-status">{done ? "Completed" : "In progress"}</b>
        <h3>{c.title}</h3>
        {c.detail && <p>{c.detail}</p>}
        <p className="cert-meta">{c.issuer}<br />{c.date}</p>
        {c.link && <a href={c.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Verify</a>}
      </div>
    </Tag>
  );
}

export default function Certificates() {
  const ref = useRef();
  const [open, setOpen] = useState(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cert", { opacity: 0, y: 90, rotateX: -25, transformPerspective: 900, stagger: 0.12, duration: 1.1, ease: "expo.out",
        scrollTrigger: { trigger: ".cert-grid", start: "top 78%" } });
    }, ref);
    return () => ctx.revert();
  }, []);
  useEffect(() => {
    if (!open) return;
    const k = (e) => e.key === "Escape" && setOpen(null);
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [open]);

  return (
    <section id="certificates" className="certs" ref={ref}>
      <div className="wrap">
        <h2 className="title">Certificates</h2>
        <div className="cert-grid">{certificates.map((c) => <Card key={c.title} c={c} onOpen={setOpen} />)}</div>
      </div>
      {open && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label={open.title}>
          <img src={open.image} alt={open.title} />
          <button className="btn ghost" onClick={() => setOpen(null)}>Close</button>
        </div>
      )}
    </section>
  );
}
