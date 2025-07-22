// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// NON FARE QUESTO IN PRODUZIONE! Espone le tue chiavi.
// Ma se volessi hardcodarle, andrebbe fatto così:
const supabaseUrl = "https://cqscowsykhhirrhirlap.supabase.co"; // <-- CON LE VIRGOLETTE
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxc2Nvd3N5a2hoaXJyaGlybGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxODg1MTIsImV4cCI6MjA2ODc2NDUxMn0.EncpI4VKy8t2vojsFOoyGy8OP5DjRJZI5d2v-8OgB58"; // <-- CON LE VIRGOLETTE

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 