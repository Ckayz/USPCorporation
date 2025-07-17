import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

const VantaHaloBackground: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = HALO({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0x1a237e,
        backgroundColor: 0x17506f,
        amplitudeFactor: 2.0,
        xOffset: 0.0,
        yOffset: 0.0,
        size: 2.5,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,
        ...style,
      }}
    />
  );
};

export default VantaHaloBackground;
