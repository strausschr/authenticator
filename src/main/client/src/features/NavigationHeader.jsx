import { 
  Link,
  Outlet,
} from "react-router-dom"
import {
  getUsername,
} from "./../store/utils"

export function NavigationHeader() {
  
  let username = getUsername()

  return (
  <>
  <div>
  <div>
  <Link to="/welcome">Welcome</Link>
  {username}
  </div>
  <div>
  <Link to="/oni">Oni</Link>
  </div>
  <div>
  <Link to="/private">Privat</Link>
  </div>
  <Outlet/>
  </div>
  </>
)
}