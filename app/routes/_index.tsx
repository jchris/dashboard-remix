import { useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [dbNames, setDbNames] = useState<string[]>([]);
  const [newDbName, setNewDbName] = useState("");

  const location = useLocation();

  useEffect(() => {
    console.log("Current location:", location);
  }, [location]);

  const handleAddDbName = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDbName && !dbNames.includes(newDbName)) {
      setDbNames([...dbNames, newDbName]);
      setNewDbName("");
    }
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">Database List</h1>
      <form onSubmit={handleAddDbName} className="mb-4">
        <input
          type="text"
          value={newDbName}
          onChange={(e) => setNewDbName(e.target.value)}
          placeholder="Enter database name"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Database
        </button>
      </form>
      <ul>
        {dbNames.map((name) => (
          <li key={name} className="mb-2">
            <Link to={`/db/${name}`} className="text-blue-500 underline">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}