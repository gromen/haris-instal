import fetchGraphql from '@/app/utils/fetchGraphql';
import { queryAllProjects } from '@/app/constants/graphqlQueries';

export interface Project {
  node: {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    featuredImage: {
      node: {
        sourceUrl: string;
        mediaDetails: {
          height: number;
          width: number;
        };
      };
    };
  };
}

export default async function getAllProjects(): Promise<Project[]> {
  const { data } = await fetchGraphql(queryAllProjects);
  console.log({ data });
  return data?.projects?.edges;
}
