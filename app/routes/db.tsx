import { Outlet } from "react-router-dom";

export default function DbIndex() {
  return (
    <div>
      <h1>DB Index Page</h1>
      <p>This is the index page for the /db route.</p>
      <Outlet />
    </div>
  );
}