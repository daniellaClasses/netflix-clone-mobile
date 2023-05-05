/* eslint-disable prettier/prettier */
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://sbsmeylbeabqsarwdjwq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNic21leWxiZWFicXNhcndkandxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwMTI1MjAsImV4cCI6MTk5ODU4ODUyMH0.4p6mKUX0Ox_NkigeLB4FKi_6KeG-3FXUhsomaiOywYk';
export const supabase = createClient(supabaseUrl, supabaseKey);
