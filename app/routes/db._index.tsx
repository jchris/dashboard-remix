import { Link } from "react-router-dom";

const databases = ["db1", "db2", "db3"]; // Replace with your actual database list

import { Sidebar } from "~/components/Sidebar";

export default function DatabaseIndex() {
  return (
    <div className="flex">
      <div className="w-56"> {/* Fixed width of 16rem (64 units) */}
        <Sidebar />
      </div>
      <div className="flex-1 p-4"> {/* Flex-grow to take remaining space */}
        <DatabaseList />
      </div>
    </div>
  );
}

function DatabaseList() {
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