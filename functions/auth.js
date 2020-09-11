require("dotenv").config()

// this should do discord auth stuff at some point.
const express = require("express")
const serverless = require("serverless-http")
const bodyParser = require("body-parser")
const axios = require("axios")

app = express()

const router = express.Router()

// log in with discord
router.post("/", async (req, res) => {
  // TODO: Add an error response on a catch
  // get the code and handle the rest of the login, return user stuff for now.
  const code = req.body.code

  const data = {
    client_id: process.env.DISCORD_CLIENT_ID,
    client_secret: process.env.DISCORD_CLIENT_SECRET,
    grant_type: "authorization_code",
    redirect_uri: "http://localhost:8000/app",
    code: code,
    scope: "identify",
  }

  try {
    const tokenRes = await axios.post(
      "https://discord.com/api/oauth2/token",
      new URLSearchParams(data)
    )
    const userRes = await axios.get("https://discordapp.com/api/users/@me", {
      headers: {
        authorization: `${tokenRes.data.token_type} ${tokenRes.data.access_token}`,
      },
    })

    res.status(200).json({
      user: userRes.data.username,
    })
  } catch (err) {
    console.log(err)
  }
})

// Set headers to allow CORS requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
  next()
})

app.use(bodyParser.json())
app.use("/.netlify/functions/auth", router)

module.exports.handler = serverless(app)

// set up a data object for the auth request

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
