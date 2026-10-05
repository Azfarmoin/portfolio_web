import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import Balls from "./Balls.jsx";
import { scroll, pointer } from "../store";

const TEAL = new THREE.Color("#2dd4bf");
const TUNGSTEN = new THREE.Color("#ffb454");

/* Distant dust that gives the camera dolly a sense of depth. */
function Dust() {
  const ref = useRef();
  const geo = useMemo(() => {
    const n = 2600, p = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 3 + Math.random() * 14, a = Math.random() * Math.PI * 2;
      p.set([Math.cos(a) * r, Math.sin(a) * r * 0.6, 8 - Math.random() * 70], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    return g;
  }, []);
  useFrame((_, d) => {
    ref.current.rotation.z += d * 0.02;
    ref.current.material.color.lerpColors(TEAL, TUNGSTEN, THREE.MathUtils.smoothstep(scroll.progress, 0.35, 0.95));
  });
  return <points ref={ref} geometry={geo}><pointsMaterial size={0.04} transparent opacity={0.7} depthWrite={false} blending={THREE.AdditiveBlending} /></points>;
}

/* The original ball cloud, kept centred on the camera so it stays around you while you fly through the page. */
function BallCloud() {
  const g = useRef();
  useFrame(({ camera }) => { g.current.position.set(0, 0, camera.position.z - 1); });
  return <group ref={g}><Balls count={40} spread={8} /></group>;
}

function Rig() {
  useFrame(({ camera }, d) => {
    const t = scroll.progress, k = 1 - Math.pow(0.001, d);
    camera.position.z += (6 - t * 52 - camera.position.z) * k;
    camera.position.x += (pointer.x * 0.9 - camera.position.x) * k;
    camera.position.y += (pointer.y * 0.6 - camera.position.y) * k;
    camera.rotation.z = Math.sin(t * Math.PI * 2) * 0.05;
    camera.lookAt(pointer.x * 0.3, pointer.y * 0.2, camera.position.z - 10);
  });
  return null;
}

export default function Scene() {
  return (
    <Canvas dpr={[1, 1.6]} camera={{ fov: 50, position: [0, 0, 6] }} style={{ position: "fixed", inset: 0, zIndex: 0 }}>
      <color attach="background" args={["#04080f"]} />
      <fog attach="fog" args={["#04080f", 10, 40]} />
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} />
      {/* Local studio-style lighting: no network download, so the balls never fail to render. */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={4} position={[0, 5, -5]} scale={[12, 4, 1]} />
        <Lightformer form="rect" intensity={2.5} color="#2dd4bf" position={[-6, 0, 2]} rotation-y={Math.PI / 2} scale={[6, 4, 1]} />
        <Lightformer form="rect" intensity={2.5} color="#ffb454" position={[6, 0, 2]} rotation-y={-Math.PI / 2} scale={[6, 4, 1]} />
      </Environment>
      <Dust />
      <BallCloud />
      <Rig />
    </Canvas>
  );
}
