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

  const landingPagesResult = await graphql(`
    {
      allWpLandingPage {
        nodes {
          __typename
          id
          slug
          uri
        }
      }
    }
  `);

  const { allWpLandingPage } = landingPagesResult?.data;
  let landingTemplate = require.resolve(`./src/templates/WpLanding.tsx`);

  console.log(allWpLandingPage.nodes, "I am Node JS");

  allWpLandingPage.nodes.map((landingPage) => {
    actions.createPage({
      path: landingPage.uri,
      component: landingTemplate,
      context: landingPage,
    });
  });

  const redirectsResult = await graphql(`
    {
      allWpRedirect {
        nodes {
          redirects {
            redirectsFrom
            redirectsTo
          }
        }
      }
    }
  `);

  const { allWpRedirect } = redirectsResult?.data;
  const { createRedirect } = actions;

  allWpRedirect.nodes.map((redirect) =>
    createRedirect({
      fromPath: `${redirect.redirects.redirectsFrom}`,
      toPath: `${redirect.redirects.redirectsTo}`,
      isPermanent: true,
    })
  );
};
