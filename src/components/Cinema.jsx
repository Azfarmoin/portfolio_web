import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { pointer } from "../store";

export function Preloader({ onDone }) {
  const root = useRef(), count = useRef(), title = useRef();
  useEffect(() => {
    const n = { v: 0 };
    const tl = gsap.timeline({ onComplete: onDone });
    tl.to(title.current, { opacity: 1, duration: 0.8 })
      .to(n, { v: 100, duration: 1.8, ease: "power2.inOut", onUpdate: () => (count.current.textContent = Math.round(n.v)) }, 0)
      .to(title.current, { opacity: 0, duration: 0.4 })
      .to(root.current, { clipPath: "inset(50% 0 50% 0)", duration: 1.1, ease: "expo.inOut" })
      .set(root.current, { display: "none" });
    return () => tl.kill();
  }, [onDone]);
  return (
    <div ref={root} className="pre" style={{ clipPath: "inset(0 0 0 0)" }}>
      <div ref={title} className="pre-title">MUHAMMAD AZFAR MOIN<br /><small style={{ fontSize: ".5em", opacity: .6 }}>A portfolio in five scenes</small></div>
      <div ref={count} className="pre-count">0</div>
    </div>
  );
}

export function Overlays() {
  const ret = useRef();
  useEffect(() => {
    const move = (e) => {
      pointer.x = (e.clientX / innerWidth - 0.5) * 2;
      pointer.y = -(e.clientY / innerHeight - 0.5) * 2;
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
      gsap.to(ret.current, { x: e.clientX, y: e.clientY, duration: 0.25, ease: "power3.out" });
      ret.current.classList.toggle("big", !!e.target.closest("a,button,.panel"));
    };
    addEventListener("pointermove", move);
    return () => removeEventListener("pointermove", move);
  }, []);
  return (<><div className="spot" /><div ref={ret} className="reticle" /><div className="vignette" /><div className="grain" /><div className="bar t" /><div className="bar b" /></>);
}

export function useMagnet() {
  useEffect(() => {
    if (matchMedia("(hover:none)").matches) return;
    const els = [...document.querySelectorAll(".btn")];
    const offs = els.map((el) => {
      const mv = (e) => { const r = el.getBoundingClientRect(); gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.3 }); };
      const lv = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,.4)" });
      el.addEventListener("pointermove", mv); el.addEventListener("pointerleave", lv);
      return () => { el.removeEventListener("pointermove", mv); el.removeEventListener("pointerleave", lv); };
    });
    return () => offs.forEach((f) => f());
  }, []);
}
