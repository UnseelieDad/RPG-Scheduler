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
        fonts: ["Roboto:300,400,500,700"],
        display: "swap",
      },
    },
  ],
}
