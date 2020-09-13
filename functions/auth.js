require("dotenv").config()

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
      user: userRes.data,
      token_type: tokenRes.data.token_type,
      access_token: tokenRes.data.acess_type,
      expires_in: tokenRes.data.expires_in,
      refresh_token: tokenRes.data.refresh_token,
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
