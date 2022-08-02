import React from 'react';
import { useWave } from '../../hooks';
import styles from './styles.module.css';
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsInstagram,
} from 'react-icons/bs';
import { FACEBOOK, INSTAGRAM, TWITTER, LINKEDIN, GITHUB } from '../../utils';
import ProfilePicture from '../../assets/img/profile.jpg';
import Image from 'next/image'

import Link from 'next/link';

export const Profile = () => {
  const waveRef = React.createRef();

  useWave(waveRef);

  return (
    <div className={styles.Profile} ref={waveRef} style={{ height: '100%' }}>
      <div className={styles.container}>
        <Image src={ProfilePicture} alt="pp" className={styles.pp} />
        <span className={styles.title}>
          Hello! Im <span className={styles.fullName}>Tural Hajiyev.</span>
        </span>
        <div
          style={{
            fontSize: '35px',
            margin: '15px 0',
            color: '#0F2D3E',
            backgroundColor: 'white',
            padding: '10px 20px',
            borderRadius: '10px'
          }}
        >
          Software Developer
        </div>
        <div className={styles.socials}>
          <Link href={{ pathname: FACEBOOK }} target="_blank">
            <BsFacebook className={styles.social} size={40} />
          </Link>
          <Link href={{ pathname: INSTAGRAM }} target="_blank">
            <BsInstagram className={styles.social} size={40} />
          </Link>
          <Link href={{ pathname: TWITTER }} target="_blank">
            <BsTwitter className={styles.social} size={40} />
          </Link>
          <Link href={{ pathname: GITHUB }} target="_blank">
            <BsGithub className={styles.social} size={40} />
          </Link>
          <Link href={{ pathname: LINKEDIN }} target="_blank">
            <BsLinkedin className={styles.social} size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};
