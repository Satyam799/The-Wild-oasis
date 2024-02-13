
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://surdpigbaplzbdykxyiu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1cmRwaWdiYXBsemJkeWt4eWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyNjcwODUsImV4cCI6MjAxODg0MzA4NX0.vGnYELN-J00Kqac7ghPb7HRLO3Ii88uXhvM8qhDNGMM"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;