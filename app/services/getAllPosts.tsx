'use server';
import fetchGraphql from '@/app/utils/fetchGraphql';
import { queryAllPosts } from '@/app/constants/graphqlQueries';

export interface Post {
  node: {
    key: string;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    content: string;
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const { data } = await fetchGraphql(queryAllPosts);
  console.log({ data });
  return data?.posts?.edges;
}
