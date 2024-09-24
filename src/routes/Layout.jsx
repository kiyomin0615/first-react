import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";

function Layout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default Layout;
