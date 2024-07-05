import {
  useState,
} from "react"
import { 
  useLocation, 
} from "react-router-dom";

export function Welcome() {

  let {state} = useLocation()  

  let {data} = state;

  let [message, setMessage] = useState("")

  let getRequest = {
    method: "GET",
    headers: { "Authorization": "Bearer " + data }
  }

  let handleWelcome = async () => {
    try {
      let data = await fetch("/api/ping", getRequest)
      let txt = await data.text()
      setMessage(txt)
      console.log(txt)
    } catch (err) {
      console.log(err.message)
    }
  }
    
  return (
    <>
  		<div>Hallo</div>
      <div>
      <button type="button" onClick={handleWelcome}>
        Print
      </button>
      {message}
      </div>
    </>
  )
}
