export const queryAllPosts = `
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
`;
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
