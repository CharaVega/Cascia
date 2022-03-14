<script>
    import {supabase} from "../supabase.js";
    import {user} from "$lib/supabase/auth";
    let loading = false;
    let  emailSignin, passwordSignin, confPasswdSignin;
    const handleSignUp = async () => {
        if(passwordSignin===confPasswdSignin){
            try {
                loading = true;
                console.log(emailSignin);
                const {error} = await supabase.auth.signUp({
                    email: emailSignin, 
                    password: passwordSignin
                });
                if(error){
                    throw error;
                }
                else{
                    alert("Subscribed Successfully!!!");
                    window.location.href = "/login";
                    console.log(supabase.auth.onAuthStateChange)
                }
            }catch(err){
                console.error(err);
                alert(err.error_description || err.message);
            }finally{
                loading = false;
            }
        }
        else{
            alert("The inserted passwords do not match");
        }
    }
</script>


<div class="flex flex-col justify-center">
    <h1 class="txt-top">
        Join our community
    </h1>
    <h2 class="text-center sub-header"> subsuhdsnajsnj aosjdjbd </h2>
    <form on:submit|preventDefault = {handleSignUp} class="flex flex-column justify-between">       
        <div class="flex flex-col justify-center text-sm wrapper-login piece-left">  
            <h1 class=header-log-in>
                Sign Up
            </h1>
            <label  class="font-bold text-grey-800 text-center label"for = "email">
                Email
            </label>
            <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
             type = "email" name ="email" bind:value ={emailSignin}>
            <label  class="font-bold text-grey-800 text-center label"for = "psswd">
                Password
            </label>
            <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
             type = "password" name ="psswd" bind:value ={passwordSignin}>
            <label  class="font-bold text-grey-800 text-center label"for = "psswd">
                Confirm password
            </label>
            <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
             type = "password" name ="psswd" bind:value ={confPasswdSignin}>
            <button class= "w-full shadow-sm rounded button"type = "Submit">
                Submit
            </button>
            <a href="../signin">
                <h3 class="font-bold text-grey-800 text-center label-link">
                    Click here for signing in if you've already been here
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
