import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mewnscnwbsdmjbcdbteh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ld25zY253YnNkbWpiY2RidGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzI1NzcsImV4cCI6MjAzMDc0ODU3N30.wmIdlOLyCmMU8UDRMJii0HpcIp8iolWPQa8nXknlpbw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
