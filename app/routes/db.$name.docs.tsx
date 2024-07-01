import { useParams } from "@remix-run/react";
import { Link } from "react-router-dom";
import { useFireproof } from "use-fireproof";


export default function AddDocuments() {
  const { name } = useParams();
  const { useLiveQuery } = useFireproof(name);
  const allDocs = useLiveQuery('_id')

  return (
    <div>
      <h2>All Documents</h2>
      <p>These are all the documents in the <code>{name}</code> database.</p>

      <ul>
        {allDocs.docs.map(({ _id }) => (
          <li key={_id}>
            <Link to={`/db/${name}/doc/${_id}`}>{_id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}