import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Feed from "../pages/feed/feed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/app",
    element: <Feed />,
  },
]);

export default router;
