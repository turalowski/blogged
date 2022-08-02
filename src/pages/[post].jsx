import fs from 'fs';
import matter from 'gray-matter';
import { TbListDetails } from 'react-icons/tb';
import md from 'markdown-it';
import mdVideo from 'markdown-it-video';

export default function Post({ data, content }) {
  return (
    <div style={{ marginTop: '50px' }} className="prose lg:prose-l">
      <h1 style={{ fontWeight: 900, fontSize: '30px' }}>{data.title}</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          fontWeight: '900',
          marginBottom: '20px',
        }}
      >
        <TbListDetails size={30} style={{ marginRight: '10px' }} />
        <span>{data.author}</span>
        <span style={{ margin: '0 5px' }}>•</span>
        <span>{data.date}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: md()
            .use(
              mdVideo
            )
            .render(content),
        }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map(fileName => ({
    params: {
      post: fileName,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { post } }) {
  const file = fs.readFileSync(`posts/${post}/index.md`, 'utf-8');
  const { data, content } = matter(file);
  return {
    props: {
      data,
      content,
    },
  };
}
