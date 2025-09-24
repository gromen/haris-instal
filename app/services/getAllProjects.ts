import fetchGraphql from '@/app/utils/fetchGraphql';
import { queryAllProjects } from '@/app/constants/graphqlQueries';

export type Project = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  slug: string;
  ProductPageFields: {
    projectImage: {
      altText: string;
      mediaItemUrl: string;
      mediaDetails: { height: number; width: number };
    };
  };
  featuredImage: {
    node: {
      altText: string;
      sourceUrl: string;
      mediaDetails: { height: number; width: number };
    };
  };
};

export default async function getAllProjects(): Promise<Project[]> {
  const result = await fetchGraphql(queryAllProjects);

  if (!result || !result.data) {
    console.error('Failed to fetch projects:', result?.errors);
    return [];
  }

  return result.data?.projects?.nodes || [];
}
