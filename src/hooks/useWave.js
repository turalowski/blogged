import WAVES from 'vanta/dist/vanta.waves.min.js';
import { useState, useEffect } from 'react';

export const useWave = ref => {
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: ref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xa202d,
          shininess: 0.00,
          waveHeight: 12.00,
          waveSpeed: 0.30,
          zoom: 0.65
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, ref]);
};
