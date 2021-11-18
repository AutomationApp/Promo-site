exports.createPages = async function ({ actions, graphql, reporter }) {
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          __typename
          id
          databaseId
          uri
        }
      }
    }
  `);
  if (result?.errors) {
    reporter.error("There was an error fetching posts", result.errors);
  }
  const { allWpPost } = result?.data;
  let template = require.resolve(`./src/templates/WpPost.tsx`);

  allWpPost.nodes.map((post) => {
    actions.createPage({
      path: post.uri,
      component: template,
      context: post,
    });
  });
};

exports.createPages = async function ({ actions, graphql }) {
  const result = await graphql(`
    {
      allWpRedirect {
        nodes {
          slug
          redirects {
            redirectsUrl
          }
        }
      }
    }
  `);

  const { allWpRedirect } = result?.data;
  const { createRedirect } = actions;

  console.log(allWpRedirect.nodes);

  allWpRedirect.nodes.map((redirect) =>
    createRedirect({
      fromPath: `/${redirect.slug}`,
      toPath: `${redirect.redirects.redirectsUrl}`,
      isPermanent: true,
    })
  );
};
