import React, { useState, useEffect } from "react"
import axios from "axios"

const Auth = ({ code }) => {
  const [username, setUserName] = useState("")

  useEffect(() => {
    axios
      .post("http://localhost:9000/.netlify/functions/auth", {
        code: code,
      })
      .then(res => {
        console.log(res)
        setUserName(res.data.user)
      })
      .catch(err => {
        console.log(err)
      })
  }, [code])

  return <p>{username !== "" ? `Hello ${username}!` : "Loading..."}</p>
}

export default Auth
