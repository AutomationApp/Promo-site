module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "philipleth",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
  ],
};
