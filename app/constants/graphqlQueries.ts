export const queryAllProjects = `
  query AllProjects {
    projects {
      nodes {
        content
        id
        slug
        title
        ProductPageFields {
          projectImage {
            altText
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
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
