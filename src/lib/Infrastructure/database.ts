import { createClient } from '@supabase/supabase-js'
import __api from '@rollup/plugin-json'


const supabaseUrl = __api.env.SVELTE_APP_URL
const supabaseAnonKey = __api.env.SVELTE_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)