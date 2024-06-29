import { useParams } from "react-router-dom";

export default function Document() {
  const { name, id } = useParams();

  return (
    <div>
      <h3>Document Page</h3>
      <p>Database: {name}</p>
      <p>Document ID: {id}</p>
    </div>
  );
}