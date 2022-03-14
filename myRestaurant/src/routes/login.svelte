<script>
	//import Auth from "$lib/Auth.svelte"
	import {user} from "$lib/supabase/auth";
	//import supabase from '$lib/db';
	//console.log(supabase.auth.user);
    import {supabase} from "../supabase.js";
    let loading = false;
    let emailLogin, passwordLogin;
    //Figure out better what this does
    const handleLogin = async () => {
        try {
            loading = true;
            console.log(emailLogin);
            //logging in the user
            const {error} = await supabase.auth.signIn({//Signing in with supabase, just call this function
                email :emailLogin,
                password : passwordLogin
            });
            if(error){
                console.log(error);
                alert("Check the email used for the login");
                throw error;
            }
            else console.log("The connected user is :", supabase.auth.user());
        }catch(err){
            console.error(err);
            alert(err.error_description || err.message);
        }finally{
            loading = false;
        }
    }
	user.set(supabase.auth.user()? true : false); //I guess that this line sets the user (writable) to a bool
    console.log("userSupabaseObject", user);
    //what happens when the user logs in or logs out
	/*supabase.auth.onAuthStateChange((event, session)=>{
		user.set(supabase.auth.user()? true : false);
		/*if(session?.user){
			//doSomething if there is a session
            console.log("User", session.user, "is logged");
		}
        if(event =='SIGNED_IN'){
            console.log("User", session.user, "is logged");
        }
	})*/
</script>

<div class="flex flex-col justify-center">
    <h1 class="txt-top">
        Join our community
    </h1>
    <h2 class="text-center sub-header"> subsuhdsnajsnj aosjdjbd </h2>
    <form on:submit|preventDefault = {handleLogin} class="flex flex-column justify-between">       
        <div class="flex flex-col justify-center text-sm wrapper-login piece-left">  
            <h1 class=header-log-in>
                Log In
            </h1>
            <label  class="font-bold text-grey-800 text-center label"for = "email">
                Email
            </label>
            <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
             type = "email" name ="email" bind:value ={emailLogin}>
            <label  class="font-bold text-grey-800 text-center label"for = "psswd">
                Password
            </label>
            <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
             type = "password" name ="psswd" bind:value ={passwordLogin}>

            <button class= "w-full shadow-sm rounded button"type = "Submit">
                Submit
            </button>
            <a href="../signup">
                <h3 class="font-bold text-grey-800 text-center label-link">
                    Click here for signing up if it's your first time here
                </h3>    
            </a>
        </div>

        <div class="wrapper-descriptor flex flex-col justify-center piece-right">  
            <img src="../../static/piscaria.png" alt="Fishmarket" class="image-log-in">
        </div>   
    </form>

    <p class="txt text-center">
        sanlnaslnslk sodsua ajnjd a+psjiosjkldan dajndjnad  osaidsjn n
        jikasn ddian djkddn kadposo jsoisnjspa ssajsn cjnajkioohasub<br/>
        siujhasdkj jsakkadnh 
        ahdnskjdajk 
        ajhdsnkakshja  akhjduohdsio usdhjkn spskldsn adsjjkan ladjk iugbuni

    </p>   
</div>



<style>
    .sub-header{
        margin-top: 5%;
    }
    .txt-top{
        margin-top:10%;
		font-family: 'Playfair Display', serif;
    }
    .txt{	
		/*margin-top:25%;
		margin-bottom:25%;*/
		font-family: 'Playfair Display', serif;
	}

    /*.form-log-in{
        margin-top:10%;
		margin-bottom:10%;
    }*/
    
    .image-log-in{
        width:100%;
        size:100%;
        border-radiuS:7%;
        margin-bottom: 25%;
    }
    .header-log-in{
        margin-bottom: 15%;
    }
    .label{
        margin-top: 10%;
        margin-bottom: 3%;
    }

    .button{
        margin-top:10%;
        margin-bottom: 10%;
    }

    .wrapper-descriptor{
        margin-top:20%;
    }
    .piece-left,
    .piece-right{
        margin-left: auto;
        margin-right: auto;
    }
    .label-link{
        margin-top: 15%;
        font-size: smaller;
        
    }
</style>
