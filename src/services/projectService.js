// src/services/projectService.js
import supabase from "../lib/supabaseClient";

export async function getAllProjects() {
  const { data, error } = await supabase.from("projects").select();
  if (error) throw error;
  return data;
}
