import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout.js';

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
}

const PostLink = ({ post }) => (
    <li>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <a>{post.title}</a>
      </Link>
      <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
    </li>
);

export default function Blog() {
  return (
      <Layout>
        <Head>
          <title>Main page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1>My blog</h1>
        <ul>
          {getPosts().map(post => (
              <PostLink key={post.id} post={post} />
          ))}
        </ul>
        <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
      </Layout>
  );
}
