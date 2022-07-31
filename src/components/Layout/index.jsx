import { Avatar, Button } from 'antd';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

export const Layout = ({ children }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.Layout}>
      <header className={styles.Header}>
        <Button type="link" className={styles.title} href="/">
          Blogged
        </Button>
        {router.pathname === '/[post]' ? null : (
          <div className={styles.Author}>
            <Avatar
              size={55}
              style={{ marginRight: '20px' }}
              src="https://i.ibb.co/g4PtBDN/292796089-1277201736145053-2767355748722151951-n.jpg"
            />

            <div className={styles.info}>
              <h2>
                Personal blog by{' '}
                <Button
                  type="link"
                  className={styles.author}
                  style={{ fontSize: '16px', padding: 0, margin: 0 }}
                  href="https://github.com/turalowski"
                >
                  Tural Hajiyev
                </Button>
              </h2>
              <h3>
                Hackathon of{' '}
                <Button
                  type="link"
                  style={{ fontSize: '16px', padding: 0, margin: 0 }}
                  href="https://10be5.com"
                >
                  10be5
                </Button>
                , 24 July, 2022
              </h3>
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};
