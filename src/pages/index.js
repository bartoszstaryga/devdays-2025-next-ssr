import Head from 'next/head';

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await res.json();
  return { props: { posts } };
}

export default function Home({ posts }) {
  const firstPost = posts[0];

  return (
    <>
      <Head>
        <title>{firstPost.title}</title>
        <meta name='description' content={firstPost.body} />
        <meta property='og:title' content={firstPost.title} />
        <meta property='og:description' content={firstPost.body} />
        <meta property='og:image' content={`https://picsum.photos/id/${firstPost.id}/1200/630`} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <main>
        <h1>Server-side Rendered</h1>
        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={`https://picsum.photos/id/${post.id}/600/300`} alt={post.title} />
          </article>
        ))}
      </main>
    </>
  );
}
