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
	<title>Sign in</title>
</svelte:head>


<div class="flex flex-col justify-center">
    <form on:submit|preventDefault = {handleSignUp} class="flex flex-column justify-between">        <div class="flex flex-col justify-center text-sm piece-left">  
            <h1 class=header-log-in>
                SIGN UP
            </h1>
            <label  class="font-bold text-grey-800 text-center label" for = "email">
                Email
            </label>
            <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                type = "email" name ="email" bind:value ={emailSignin}>
            <label  class="font-bold text-grey-800 text-center label"for = "psswd">
                Password
            </label>
            <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
            type = "password" name ="psswd" bind:value ={passwordSignin}>
            <label  class="font-bold text-grey-800 text-center label"for = "confirmpsswd">
                Confirm password
            </label>
            <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
            type = "password" name ="confirmpsswd" bind:value ={confPasswdSignin}>
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



            <button class= "Playfair Display w-full shadow-sm rounded button"type = "Submit">
                Submit
            </button>
            <a href="../signup">
                <p class="clickhere font-bold text-grey-800 text-center label-link">
                    Click here for signing up if it's your first time here
                </p>    
            </a>
            
        </div>

         
            <img src="../../static/skiis.jpeg" alt="skiis" class="image-log-in">
          
    </form>
    <h1 class="txt-top wrapper-login">
        Join our community
    </h1> 
</div>





<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Lato&family=Playfair+Display:ital,wght@0,700;0,900;1,600;1,900&display=swap');    
    @font-face {
		font-family: 'Better Grade';
		src: url('../../static/fonts/BetterGrade.eot');
		src: url('../../static/fonts/BetterGrade.eot?#iefix') format('embedded-opentype'),
			url('../../static/fonts/BetterGrade.woff2') format('woff2'),
			url('../../static/fonts/BetterGrade.woff') format('woff'),
			url('../../static/fonts/BetterGrade.ttf') format('truetype'),
			url('../../static/fonts/BetterGrade.svg#BetterGrade') format('svg');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

    .wrapper-login{
        width:100%;
		height:100%;
		background-image: url("../../static/piscaria.svg");
		background-size: cover;
        background-position: center;
    }

    .sub-header{
        margin-top: 0%;
        margin-bottom: 3%;
		font-family: 'Playfair Display';
		font-weight: bold;
		font-size: 17px;
		color: #6a8aaa;
		font-style: italic;
    }
    .txt-top{
        color: #6a8aaa;
		font-family:"Better Grade";
		margin-top:5%;
		margin-bottom: 5%;
		font-size: 1000%;
		flex-basis: 100%;
		flex-shrink: 3;
	}
    
    .txt{	
		/*margin-top:25%;
		margin-bottom:25%;*/
		font-family: 'Playfair Display', serif;
        color: #6a8aaa;
	}

    /*.form-log-in{
        margin-top:10%;
		margin-bottom:10%;
    }*/
    
    .image-log-in{
        width:50%;
        height: 50%;
        size:100%;
        margin-bottom: 3%;
    }

    .header-log-in{
        color: #6a8aaa;
		font-family: "Playfair Display";
		font-weight:300;
    	font-size: 44px;
    	letter-spacing: 5px;
		padding-top: 15%;
		padding-bottom: 10%;
    }
    .label
    {
        margin-top: 10%;
        margin-bottom: 3%;
		font-family: 'Playfair Display';
		font-weight: bold;
		font-size: 17px;
		color: #6a8aaa;
		font-style: italic;
    }

    .Submit
    {
        margin-top: 10%;
        margin-bottom: 3%;
		font-family: 'Playfair Display';
		font-weight: bold;
		font-size: 17px;
		color: #6a8aaa;
		font-style: italic;
    }

    .clickhere{
        font-family: 'Lato';
		font-weight: bold;
		font-size: 17px;
        font-weight: 800;
        color: #6a8aaa;
    }

    .fontforinput{
        font-family: 'Playfair Display';
		font-weight: bold;
		font-size: 13px;
        color: #6a8aaa;
    }

    .button{
        margin-top:10%;
        margin-bottom: 10%;
    }

    .wrapper-descriptor{
        margin-left: 20%;
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

