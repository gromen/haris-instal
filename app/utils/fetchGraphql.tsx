export default async function fetchGraphql(query: string, variables?: any) {
  try {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;

    if (!endpoint) {
      throw new Error(
        'NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT environment variable is not set'
      );
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      next: { tags: ['all-projects'], revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GraphQl: ', error);
    return { data: null, errors: [error] };
  }
}
