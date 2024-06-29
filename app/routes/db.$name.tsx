import { Outlet } from "react-router-dom";

export default function DbIndex() {
  return (
    <div>
      <h2>Database Page</h2>
      <p>This is the index page for the /db route.</p>
      <Outlet /> 
    </div>
  );
}