import { Routes, Route, useRoutes } from "react-router-dom";
import Section1 from "../../component/Section1/Section1";
import Section2 from "../../component/Section2/Section2";
import Books from "../../component/books/Books";
import UserInformation from "@/pages/User/UserInformation";

const DynamicRoutes = () => {
  const routes = [
    {
      path: "/user-information",
      element: <UserInformation />,
    },
  ];
  return useRoutes(routes);
};

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Section1 /> <Section2 /> <Books />
          </>
        }
      />
      <Route element={<DynamicRoutes />} />
    </Routes>
  );
}

export default AppRoutes;
