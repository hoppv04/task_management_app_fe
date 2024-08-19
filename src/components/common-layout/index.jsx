import { Outlet } from "react-router-dom";

function CommonLayout() {
  return (
    <>
      <h1>Common Content</h1>
      <Outlet />
    </>
  );
}

export default CommonLayout;
