export interface QueryGraphql {
  query: string;
}

export default async function fetchGraphql(query: QueryGraphql) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
        next: { revalidate: 10 },
      }
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching GraphQl: ', error);
  }
}
