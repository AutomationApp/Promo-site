require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://automation.app/",
    title: "Automate your E-commerce store - AutomationApp",
    description: `Automate your e-commerce businesses. E-mail, SMS marketing automation and any customised e-commerce flow with deep e-commerce platform integration`,
    author: `Automation App`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-anchor-links`,
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5ZWGLD2",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    `gatsby-plugin-client-side-redirect`, // keep it in last in list
  ],
};
