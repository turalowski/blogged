import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useWave } from '../hooks';
import { Profile as ProfileComponent } from '../components';
import Script from 'next/script';
import styles from '../styles/Home.module.css';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

export default function Profile({}) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} ref={vantaRef}>
        <ProfileComponent />
      </main>
    </div>
  );
}
