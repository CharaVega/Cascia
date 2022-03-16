import { writable } from "svelte/store";
import { getProfileInfo } from "../assets";
import { user } from "./authStore";
import { supabase } from "src/supabase";

export const uData = writable(user ? getProfileInfo(supabase.auth.user().id) : null);