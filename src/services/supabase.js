import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xaocianrcndabolkaxdx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhhb2NpYW5yY25kYWJvbGtheGR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3Njc3MzgsImV4cCI6MjAzMTM0MzczOH0.huKY5gjqwLSJtUfC64Lr6VF54IfDcGkE6a4dvQubi4w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
