import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Instance, Instances } from "@react-three/drei";
import { easing } from "maath";

export default function Balls({ count = 50, radius = 0.25, spread = 0 }) {
  const group = useRef();
   

  useFrame((state, delta) => {
    if (group.current) {
      // smooth rotation with maath easing
      easing.damp3(
        group.current.rotation,
        [state.clock.elapsedTime * Math.cos(Math.PI / 2), state.clock.elapsedTime * (Math.cos(30)), 1],
        0.1,
        delta
      );
    }
  });

  return (
    <group ref={group}>
      <Instances limit={count}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color="#71A9F7" roughness={0.2} metalness={0.8} />
        {Array.from({ length: count }).map((_, i) => (
          <Instance
            key={i}
            position={[
              (Math.random() - 0.5) * spread,
              (Math.random() - 0.5) * spread,
              (Math.random() - 0.5) * spread,
            ]}
            scale={Math.random() * 0.6 + 0.4}
          />
        ))}
      </Instances>
    </group>
  );
}


