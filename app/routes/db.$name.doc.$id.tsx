import { useParams } from "react-router-dom";

export default function Document() {
  const { name, id } = useParams();

  return (
    <div>
      <h2>Document Page</h2>
      <p>Database: {name}</p>
      <p>Document ID: {id}</p>
    </div>
  );
}