import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../Pages/Home";
import PostJob from "../Pages/PostJob";
import MyJobs from "../Pages/MyJobs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },
    ],
  },
]);

export default router;
