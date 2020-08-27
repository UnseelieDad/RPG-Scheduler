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

router.get("/login", (req, res) => {
  res.status(200).json({
    message: "Hello World!",
  })
})

app.use(bodyParser.json())
app.use("/.netlify/functions/auth", router)

module.exports.handler = serverless(app)
