import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
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
  Login,
} from "./features/Login"
import "./index.css"

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/welcome",
    element: <Welcome />,
    errorElement: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
