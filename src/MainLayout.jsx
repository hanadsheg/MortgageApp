import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";

function MainLayout() {
  return(
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayout;