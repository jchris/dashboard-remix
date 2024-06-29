import { Link } from "react-router-dom";

const databases = ["db1", "db2", "db3"]; // Replace with your actual database list

export default function DatabaseIndex() {
  return (
    <div>
      <h2>Available Databases</h2>
      <p>This is the index page for the /db route.</p>
      <ul>
        {databases.map((db) => (
          <li key={db}>
            <Link to={`/db/${db}`}>{db}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}