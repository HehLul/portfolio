import { useState, useEffect } from "react";
import { getAllProjects } from "../services/projectService";

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetch();
  }, []);

  return { projects, loading, error };
}
