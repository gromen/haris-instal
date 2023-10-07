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
      edges {
        node {
          id
          title
          content
          excerpt
          date
          featuredImage {
            node{
              sourceUrl
            }
          }
        }
      }
    }
}
`;
