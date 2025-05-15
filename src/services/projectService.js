// src/services/projectService.js
import supabase from "../lib/supabaseClient";

export async function getAllProjects() {
  const { data, error } = await supabase.from("projects").select();
  if (error) throw error;

  // Reformat date for each project
  const formattedData = data.map((project) => {
    const date = new Date(project.date_built);
    const formattedDate = date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });

    return {
      ...project,
      date_built: formattedDate, // replace or add a formatted date field
    };
  });
  return formattedData;
}

export async function getProject(slug) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) throw error;
  return data;
}
