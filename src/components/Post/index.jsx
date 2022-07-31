import Link from 'next/link';
import { Tag } from 'antd';
import { tags } from '../../utils/constants';
import { TbListDetails } from 'react-icons/tb';

import styles from './styles.module.scss';

export const Post = ({ fileName, data }) => {
  return (
    <div className={styles.Post}>
      <div className={styles.content}>
        <Link href={`/${fileName}`}>
          <h2 className={styles.title}>{data.title}</h2>
        </Link>
        <div className={styles.details}>
          <TbListDetails size={25} style={{ marginRight: '10px' }} />

          <h3 className={styles.author}>{data.author}</h3>
          <p className={styles.divider1}>•</p>
          <h3 className={styles.date}>{data.date}</h3>
          <p className={styles.divider2}>•</p>
          <div className={styles.tags}>
            {data.tags.map(tag => (
              <Tag
                color={tags[tag] || 'magenta'}
                key={tag}
                style={{ borderRadius: '8px', fontWeight: 900 }}
              >
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        <h3 className={styles.description}>{data.description}</h3>
      </div>
    </div>
  );
};
