/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  plugins: [
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Roboto Mono:300,400,500,700"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
  ],
}
