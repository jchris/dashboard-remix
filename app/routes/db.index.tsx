import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DbIndex() {
  const location = useLocation();
  
  useEffect(() => {
    console.log("Current location:", location);
  }, [location]);

  return (
    <div>
      <h2>DB Index Page</h2>
      <p>This is the index page for the /db route.</p>
    </div>
  );
}