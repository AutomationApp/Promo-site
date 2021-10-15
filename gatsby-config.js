module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "philipleth",
    description: `Product Tour - AutomationApp`,
    author: `@shahrukh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Product Tour - AutomationApp`,
        short_name: `Automation App`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `./src/assets/img/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://wordpress-638795-2187391.cloudwaysapps.com/graphql",
        restApiRoutePrefix: "wp-json",
        useACF: true,
      },
    },
  ],
};
