import { supabase } from "../../supabase.js";
import { user } from "$lib/supabase/auth";

//this function should be called on each page for checking the status of the userAuth
//At least considering what i have undestand abot how this works
//Not very sure it'd work
export const loginStatus = async() => {
    var logged;
    supabase.auth.onAuthStateChange((event, session) => {
        user.set(supabase.auth.user() ? true : false);
        /*if(session?.user){
			//doSomething if there is a session
            console.log("User", session.user, "is logged");
		}*/
        if (event == 'SIGNED_IN') {
            console.log("User", session.user, "is logged");
            logged = true;
        }
        if (event == 'SIGNED_OUT') {
            console.log("User", session.user, "has signed out ");
            logged = false;
        }
    })
    return logged;
}