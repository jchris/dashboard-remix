import { useParams , Link } from "react-router-dom";

export default function Database() {
  const { name } = useParams();

  return (
    <div>
      <h2>Database Page</h2>
      <p>Database: {name}</p>
      <Link to={`/db/${name}/doc/1`}>Go to Document 1</Link>
      <Link to={`/db/${name}/doc/2`}>Go to Document 2</Link>
    </div>
  );
}