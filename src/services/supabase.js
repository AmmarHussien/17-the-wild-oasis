import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cvlzhkwdmwunnffdowgm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2bHpoa3dkbXd1bm5mZmRvd2dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4NjI3NDEsImV4cCI6MjAzNTQzODc0MX0.RCb73Cw1Eyg2RlgD1mrOcudFFAJow8jg4rphQc3TP08";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
