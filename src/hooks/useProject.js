import { useState, useEffect } from "react";
import { getProject } from "../services/projectService";

// Helper: Parse Markdown into sections
async function parseDetails(detailsMdPath) {
  const response = await fetch(detailsMdPath);
  const markdown = await response.text();

  const sections = [];
  const lines = markdown.split("\n");
  let currentSection = null;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: line.replace("## ", "").trim(),
        content: "",
      };
    } else if (currentSection) {
      currentSection.content += line + "\n";
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

export default function useProject(slug) {
  const [project, setProject] = useState(null);
  const [detailsSections, setDetailsSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        console.log("Fetching project...");
        const data = await getProject(slug);
        console.log("Project fetched:", data);

        // Attempt to fetch and parse markdown
        if (data.details_md_path) {
          console.log("Fetching markdown from:", data.details_md_path);
          const parsed = await parseDetails(data.details_md_path);
          console.log("Parsed markdown sections:", parsed);
          setDetailsSections(parsed);
        } else {
          console.log("No markdown path found.");
        }

        setProject(data);
      } catch (err) {
        console.error("Error fetching project or markdown:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetch();
  }, [slug]);

  return { project, detailsSections, loading, error };
}
