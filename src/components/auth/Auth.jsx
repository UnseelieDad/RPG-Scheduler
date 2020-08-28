import React, { useState, useEffect } from "react"
import axios from "axios"

const Auth = ({ location }) => {
  const [username, setUserName] = useState("")

  useEffect(() => {
    const code = props.location.search.split("=")[1]

    axios
      .post({
        code: code,
      })
      .then(res => {
        setUserName(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [location.search])

  return <p>{username !== "" ? `Hello ${username}!` : "Loading..."}</p>
}

export default Auth
