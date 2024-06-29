import { Link } from "@remix-run/react";
import { useParams } from "react-router-dom";

export default function Document() {
  const { name, id } = useParams();

  return (
    <div>
      <h3>Document: {id}</h3>
      <p>Database: <Link to={`/db/${name}`}>{name}</Link></p>
    </div>
  );
}