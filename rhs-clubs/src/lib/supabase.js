import { createClient } from "@supabase/supabase-js";

// Get your Supabase URL and Key from your Supabase project
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
