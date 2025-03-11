import Dashboard from "../component/Dashboard/Dashboard";
import Staff from "../component/Staff/Staff";
import Student from "../component/Student/Student";
import Teacher from "../component/Teacher/Teacher";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Management from "../pages/Management/Management";

const customRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/dashboard", element: <Dashboard /> },
  {
    path: "/management",
    element: <Management />,
    children: [
      {
        path: "/management/student",
        element: <Student />,
      },
      {
        path: "/management/teacher",
        element: <Teacher />,
      },
      {
        path: "/management/staff",
        element: <Staff />,
      },
    ],
  },
];
export default customRoutes;
