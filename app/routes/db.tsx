import { Outlet } from "react-router-dom";

export default function DbIndex() {
  return (
    <div>
      <h1>Databases</h1>
      <p>This is the layout for the /db route.</p>
      <Outlet />
    </div>
  );
}