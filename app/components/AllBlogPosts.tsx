export default async function AllBlogPosts() {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
    query getPosts {
      posts {
        edges {
          node {
            title
            excerpt
            slug
            date
            content
          }
        }
      }
    }
  `,
      }),
      next: { revalidate: 10 },
    }
  ).then((res) => res.json());

  let blogPosts = data?.posts?.edges;
  return (
    <>
      {blogPosts?.map((post: any) => (
        <pre
          key={post.node.slug}
          dangerouslySetInnerHTML={{ __html: post.node.content }}
        />
      ))}
    </>
  );
}
