import { useState, useEffect } from "react";
import { getProject } from "../services/projectService";

export default function useProject(slug) {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getProject(slug);
        setProject(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetch();
  }, []);

  return { project, loading, error };
}
