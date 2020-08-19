/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  /* Your site config here */

  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },

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
