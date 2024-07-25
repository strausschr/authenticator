import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom"
import {
  Root,
} from "./features/Root"
import {
  ErrorPage,
} from "./error-page"
import {
  Welcome,
} from "./features/Welcome"
import {
  Oni,
} from "./features/Oni"
import {
  Login, loginAction
} from "./features/Login"
import {
  welcomeLoader, 
} from "./features/welcomeActions"
import {
  oniLoader, 
} from "./features/oniActions"
import {
  NavigationHeader,
} from "./features/NavigationHeader"
import "./index.css"

let router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationHeader />,
    children:[
        {
            index: true,
            element: <Root />,
            errorElement: <ErrorPage />,
            loader: welcomeLoader,
          },
        {
        path: "/welcome",
        element: <Welcome />,
        errorElement: <ErrorPage />,
        loader: welcomeLoader,
      },
      {
        path: "/oni",
        element: <Oni />,
        errorElement: <ErrorPage />,
        loader: oniLoader,
      }]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction,
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
