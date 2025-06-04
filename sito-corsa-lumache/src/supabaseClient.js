// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// NON FARE QUESTO IN PRODUZIONE! Espone le tue chiavi.
// Ma se volessi hardcodarle, andrebbe fatto così:
const supabaseUrl = "https://cxbidgbnpagjejnksdtx.supabase.com"; // <-- CON LE VIRGOLETTE
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4YmlkZ2JucGFnamVqbmtzZHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5ODk0NTUsImV4cCI6MjA2NDU2NTQ1NX0.o1Ntb7JPwyC96uVRz7Xh2VXoBAZQwvtYp4yOS0CRhRA"; // <-- CON LE VIRGOLETTE

export const supabase = createClient(supabaseUrl, supabaseAnonKey);