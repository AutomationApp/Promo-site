require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://philipleth.vercel.app/",
    title: "Automate your E-commerce store - AutomationApp",
    description: `Automate your e-commerce businesses. E-mail, SMS marketing automation and any customised e-commerce flow with deep e-commerce platform integration`,
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
        url: `${process.env.GATSBY_API_URL}/graphql`,
        restApiRoutePrefix: "wp-json",
        useACF: true,
      },
    },
  ],
};
