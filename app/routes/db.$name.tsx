import { Link } from "@remix-run/react";
import { Outlet, useParams } from "react-router-dom";

export default function Database() {
  const { name } = useParams();

  return (
    <div>
      <h2>Database: {name}</h2>
      <p>
        <Link to="/db">Back to Databases</Link>
      </p>
      <p>
        This is the database info page.
      </p>
      <Outlet /> 
    </div>
  );
}