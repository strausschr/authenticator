import {
  useState,
} from "react";

export const App = () => {

  let [token, setToken] = useState("")

  let [message, setMessage] = useState("")

  let postRequest = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({username: "test", password: "test"})
  }

  let getRequest = {
    method: "GET",
    headers: { "Authorization": "Bearer " + token }
  }

  let handleClick = async () => {
    try {
        let data = await fetch("/login", postRequest)
        let json = await data.json()
        setToken(json.accessToken)
        console.log(json)
    } catch (err) {
        console.log(err.message)
    }
  }

  let handlePing = async () => {
    try {
        let data = await fetch("/ping", getRequest)
        let txt = await data.text()
        setMessage(txt)
        console.log(txt)
    } catch (err) {
        console.log(err.message)
    }
  }

  if (!token) {
    return(
      <div>
    <button type="button" onClick={handleClick}>
      Login
    </button>
    </div>
    )
  }
  return (
  <>
		<div>Hallo</div>
    <div>
    <button type="button" onClick={handlePing}>
      Ping
    </button>
    {message}
    </div>

  </>
  )
}

