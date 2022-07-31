import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '../components';

export default function Blog({ posts }) {
  return (
    <div style={{ margin: '20px 0' }}>
      {posts.map(({ fileName, data }) => (
        <Post data={data} key={fileName} fileName={fileName} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // Get all post files from /posts folder
  const directories = fs.readdirSync('posts');
  const posts = directories.map(directoryName => {
    const files = fs.readdirSync(`posts/${directoryName}`);
    const post = files[0].replace('.md', '');
    const readFile = fs.readFileSync(`posts/${directoryName}/index.md`, 'utf-8');
    const { data } = matter(readFile);

    return {
      fileName: directoryName,
      data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
