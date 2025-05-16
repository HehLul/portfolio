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

        // Reformat technologies from comma string to array
        // if (data && typeof data.technologies === "string") {
        //   data.technologies = data.technologies
        //     .split(",")
        //     .map((tech) => tech.trim());
        // }

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
