import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
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
  ErrorPage,
} from "./error-page"
import { 
  NavigationHeader, 
} from "./features/NavigationHeader"

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
            element={<Oni />}
            errorElement={<ErrorPage />}
            loader={oniLoader} />
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

function PrivateRoutes() {
  return <Welcome />
}