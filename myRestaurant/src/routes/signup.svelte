<script>
    import {goto} from "$app/navigation";
    import {supabase} from "../supabase.js";
    import {insertUserData} from "$lib/assets"
    let loading = false;
    let  emailSignin, passwordSignin, confPasswdSignin;
    let firstName, lastName, userName, phoneNumber;
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
                    const uid = await supabase.auth.user().id;
                    insertUserData(uid, userName, emailSignin, firstName, lastName, phoneNumber);                
                    alert("Subscribed Successfully!!!");
                    goto("/login");
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


<svelte:head>
	<title>Sign up</title>
</svelte:head>

<div class="flex flex-col justify-center">
    <h1 class="txt-top">
        Join our community
    </h1>
    <!--<h2 class="text-center sub-header"> subsuhdsnajsnj aosjdjbd </h2>  -->  
    <h2 class="header-log-in text-center">
        Sign Up
    </h2>     
    <a href="../login" class="text-center">
        <h3 class="font-bold text-grey-800 text-center label-link">
            Click here for signing in if you've already been here
        </h3>    
    </a> 
    <div class="flex items-center justify-center">
        <form on:submit|preventDefault = {handleSignUp} class="flex flex-column justify-between">       
            <div class="flex flex-col justify-center text-sm wrapper-login piece-left"> 
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
                <label  class="font-bold text-grey-800 text-center label"for = "first-name">
                    First name
                </label>
                <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                type = "text" name ="first-name" bind:value ={firstName}>
                <label  class="font-bold text-grey-800 text-center label"for = "last-name">
                    Last name
                </label>
                <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                type = "text" name ="last-name" bind:value ={lastName}>
                <label  class="font-bold text-grey-800 text-center label"for = "user-name">
                    User name
                </label>
                <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                type = "text" name ="user-name" bind:value ={userName}>
                <label  class="font-bold text-grey-800 text-center label"for = "phone-number">
                    Phone number
                </label>
                <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                type = "tel" name ="phone-number" bind:value ={phoneNumber}>                
                <button class= "w-full shadow-sm rounded button"type = "Submit">
                    Submit
                </button>
            </div>
            <div class="wrapper-descriptor flex flex-col justify-center piece-right">  
                <img src="../../static/piscaria.png" alt="Fishmarket" class="image-log-in">
            </div>        
        </form>
    </div> 
</div>
<style>
    .txt{	
		font-family: 'Playfair Display', serif;
	}
    .form-log-in{
        margin-right:20%;
    }
    .image-log-in{
        width:100%;
        size:100%;
        border-radius:7%;
        margin-bottom: 30%;
        margin-left: 20%;
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
