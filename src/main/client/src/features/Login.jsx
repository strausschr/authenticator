import { 
  Form,
  redirect,
  useSubmit,
} from "react-router-dom"
import {
  setToken,
  setUsername,
} from "./../store/utils"

export async function loginAction({ request,params }) {

  let formData = await request.json();
  console.log(formData)

  let postRequest = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  }

  let data = await fetch("/api/requestToken", postRequest)
  let json = await data.json()
  console.log(json)

  setToken(json.accessToken)
  setUsername(json.username)

  return redirect("/welcome")
}

export const Login = () => {

  let submit = useSubmit()

    return(
      <div>

    <form method="post" onSubmit={(e) => {
      e.preventDefault()
      let fd = new FormData(e.currentTarget)
      let json = Object.fromEntries(fd)
      submit(json, { 
          method: "post", 
          encType: "application/json",
        })
    }}>
    
      <p>
        <span>Name</span>
        <input
          aria-label="Username"
          type="text"
          name="username"
        />
        <span>Passwort</span>
        <input
          aria-label="Passwort"
          type="text"
          name="password"
        />
      </p>
      <p>
        <button type="submit">Login</button>
      </p>
    </form>

    </div>
    )
  
  }
