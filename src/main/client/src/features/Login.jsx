import { 
  useNavigate, 
} from "react-router-dom"

export const Login = () => {

  let navigate = useNavigate();

  let postRequest = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({username: "test", password: "test"})
  }


  let handleClick = async () => {
    try {
        let data = await fetch("/api/requestToken", postRequest)
        let json = await data.json()
        console.log(json)
        navigate("/welcome", { state: { data: json.accessToken } })
    } catch (err) {
        console.log(err.message)
    }
  }

    return(
      <div>
    <button type="button" onClick={handleClick}>
      Login
    </button>
    </div>
    )
  
  }
