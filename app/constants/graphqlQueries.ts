export const queryAllProjects = `
  query AllProjects {
    projects {
      nodes {
        content
        id
        slug
        title
      }
    }
  }
`;
export const getProjectBySlug = `
  query GetProjectBySlug($slug: String!) {
    projectBy(slug: $slug) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;
