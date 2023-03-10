import { Outlet } from "react-router";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Outlet />
    </>
  );
}
