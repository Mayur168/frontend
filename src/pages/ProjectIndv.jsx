import { useParams } from "react-router-dom";

export const ProjectIndv = () => {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h1>Project Details</h1>
      <p>Showing details for project ID: {id}</p>
      {/* Optionally fetch and show full details using the ID */}
    </div>
  );
};
