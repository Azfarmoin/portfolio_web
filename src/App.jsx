import { useCallback, useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./components/Scene.jsx";
import Contact from "./components/contact.jsx";
import { Preloader, Overlays, useMagnet } from "./components/Cinema.jsx";
import { Hero, About, Work, Nav } from "./components/Sections.jsx";
import Experience from "./components/Experience.jsx";
import Certificates from "./components/Certificates.jsx";
import Skills from "./components/Skills.jsx";
import { scroll } from "./store";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [ready, setReady] = useState(false);
  const done = useCallback(() => setReady(true), []);
  useMagnet();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.25 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    const st = ScrollTrigger.create({ start: 0, end: "max", onUpdate: (s) => (scroll.progress = s.progress) });
    document.querySelectorAll('a[href^="#"]').forEach((a) =>
      a.addEventListener("click", (e) => { const id = a.getAttribute("href"); if (id.length > 1) { e.preventDefault(); lenis.scrollTo(id); } }));
    return () => { st.kill(); gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);

  return (
    <>
      <Preloader onDone={done} />
      <Overlays />
      <Scene />
      <Nav />
      <main>
        <Hero ready={ready} />
        <About />
        <Work />
        <Experience />
        <Certificates />
        <Skills />
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
