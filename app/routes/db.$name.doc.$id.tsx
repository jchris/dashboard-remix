import { Link } from "@remix-run/react";
import { useParams } from "react-router-dom";
import { useFireproof } from "use-fireproof";

export default function Document() {
  const { name, id } = useParams();
  const { useDocument } = useFireproof(name);

  const [doc] = useDocument(() => ({ _id: id! }));

  return (
    <div>
      <h3>Document: {id}</h3>
      <p>Database: <Link to={`/db/${name}`}>{name}</Link></p>
      <pre>{JSON.stringify(doc, null, 2)}</pre>
    </div>
  );
}