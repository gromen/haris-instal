export default async function fetchGraphql(query: string, variables?: any) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
        next: { revalidate: 60 },
      }
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching GraphQl: ', error);
  }
}
