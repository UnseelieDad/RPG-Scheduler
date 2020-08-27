// this should do discord auth stuff at some point.
const express = require("express")
const serverless = require("serverless-http")
const bodyParser = require("body-parser")

app = express()

const router = express.Router()

// log in with discord
router.post("/", (req, res) => {
  // get the code and handle the rest of the login, return user stuff for now.
  const code = req.body.code
  res.status(200).json({
    message: "Test output",
    code: code,
  })
})

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World!",
  })
})

app.use(bodyParser.json())
app.use("/.netlify/functions/auth", router)

module.exports.handler = serverless(app)

// set up a data object for the auth request
// const data = {
//   client_id: process.env.GATSBY_DISCORD_CLIENT_ID,
//   client_secret: process.env.GATSBY_DISCORD_CLIENT_SECRET,
//   grant_type: "authorization_code",
//   redirect_uri: "http://localhost:8000/app",
//   code: code,
//   scope: "identify",
// }
// // get the auth token
// fetch("https://discord.com/api/oauth2/token", {
//   method: "POST",
//   body: new URLSearchParams(data),
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
// })
//   .then(response => {
//     return response.json()
//   })
//   // use auth data to fetch user
//   .then(responseData =>
//     fetch("https://discordapp.com/api/users/@me", {
//       headers: {
//         authorization: `${responseData.token_type} ${responseData.access_token}`,
//       },
//     })
//   )
//   .then(res => res.json())
//   .then(resData => {
//     setUserName(resData.username)
//   })
