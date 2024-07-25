import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  Navigate,
} from "react-router-dom"
import {
  Root,
} from "./features/Root"
import {
  Login, loginAction
} from "./features/Login"
import {
  Welcome,
} from "./features/Welcome"
import {
  welcomeLoader, 
} from "./features/welcomeActions"
import {
  Oni,
} from "./features/Oni"
import {
  oniLoader, 
} from "./features/oniActions"
import {
  Private, 
} from "./features/Private"
import {
  ErrorPage,
} from "./error-page"
import { 
  NavigationHeader, 
} from "./features/NavigationHeader"
import {
  getRollen,
} from "./store/utils"

export const Router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route>
      <Route
        path={"/"}
        element={<NavigationHeader />}>
          <Route 
            index 
            element={<Root />}
            errorElement={<ErrorPage />}
            loader={welcomeLoader} /> 
          <Route 
            path= "/welcome"
            element={<Welcome />}
            errorElement={<ErrorPage />}
            loader={welcomeLoader} />
          <Route 
            path= "/oni"
            element={
              <ProtectedRoutes>
                <Oni />
              </ProtectedRoutes>}
            errorElement={<ErrorPage />}
            loader={oniLoader} />
          <Route
            path={"/private"}
            element={
              <ProtectedRoutes>
                <Private />
              </ProtectedRoutes>}
            errorElement={<ErrorPage />} /> 
          </Route>            
      </Route>
    <Route
      path={"/login"}
      element={<Login />}
      errorElement={<ErrorPage />}
      action={loginAction} />   
  </>
  )
)

function ProtectedRoutes({ children }) {
  console.log(getRollen())

  const rollen = getRollen()

  const items = rollen.filter((role) => role == "READ")
  if (items != "") {
    return children
  }
  return <Navigate to={"/login"} />

}