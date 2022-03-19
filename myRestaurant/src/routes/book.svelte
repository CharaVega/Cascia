<script>
    import {reservationHandler} from "$lib/assets";
    import { user } from "$lib/stores/authStore";
    import {goto} from "$app/navigation";
	import supabase from '$lib/db';
    //import { onMount } from 'svelte';
    var date, hour, nPeople;
    /*var today =  new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    var tdy = year + "-" + month + "-" + day;
    console.log("Today is : ", tdy);
    onMount(() =>{
        document.getElementById("input-date").setAttribute("min", tdy);
    });*/
    function handleSubmit() {
        console.log("Callback handleSubmit");
        reservationHandler(hour, date, nPeople);
    }
    console.log($user);
    let emailLogin, passwordLogin, loading;
    const handleLogin = async () => {
        try {
            loading = true;
            //logging in the user
            const {error} = await supabase.auth.signIn({
                email :emailLogin,
                password : passwordLogin
            });
            if(error){
                console.log(error);
                alert("Check the email used for the login");
                throw error;
            }
            else{ 
                console.log("The connected user is :", supabase.auth.user());
                //alert("Successfully logged in");
	            user.set(true);
                console.log(user);

                goto("/book");
            }
        }catch(err){
            console.error(err);
            alert(err.error_description || err.message);
        }finally{
            loading = false;
        }
    }
</script>



  
<svelte:head>
	<title>BOOK</title>
</svelte:head>

{#if !$user}
    <div class="flex flex-col justify-center">
        <form on:submit|preventDefault = {handleLogin} class="flex flex-column justify-between">       
            <div class="flex flex-col justify-center text-sm piece-left">  
                <h1 class=header-log-in>
                    LOG IN
                </h1>
                <label  class="font-bold text-grey-800 text-center label" for = "email">
                    Email
                </label>
                <input class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                type = "email" name ="email" bind:value ={emailLogin}>
                <label  class="font-bold text-grey-800 text-center label"for = "psswd">
                    Password
                </label>
                <input placeholder="password" class="appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                type = "password" name ="psswd" bind:value ={passwordLogin}>
                <button class= "w-full shadow-sm rounded button"type = "Submit">
                    Submit
                </button>
                <a href="../signup">
                    <p class="clickhere font-bold text-grey-800 text-center label-link">
                        Click here for signing up if it's your first time here
                    </p>    
                </a>         
            </div>         
            <img src="../../static/priscilia.jpg" alt="Fishmarket" class="image-log-in">        
        </form>
        <h1 class="txt-top wrapper-login">
            Join our community
        </h1> 
    </div>
{/if}
{#if $user}
    <div class="flex flex-col justify-center main-book">
        <div class="flex flex-row justify-evenly">
            <div class="flex flex-row justify-center">
                <form on:submit|preventDefault = {handleSubmit} class = "flex flex-row justify-between  main-form" id = "form">            
                    <div class="flex flex-col justify-center text-sm piece-left-book">  
                        <h1 class="head">
                            BOOK A TABLE 
                        </h1>
                        <div class="flex flex-col justify-center">
                            <label for="date" class="text-center label">
                                Select a date
                            </label>
                            <input type = "date" class="input" id = "input-date" name = "date" min="$now" bind:value = {date}/>
                        </div>
                        <div class="flex flex-col justify-center">
                            <label for="hour" class="text-center label">
                                Select an hour
                            </label>
                            <input type="time" class="input" id ="hour" name="hour" min="9:00" max="23:00" step="1800" bind:value = {hour}/>
                        </div>
                        <div class="flex flex-col justify-center">
                            <label for="nPeople" class="text-center label">
                                Select the number of people
                            </label>
                            <input type="number" class="input" name="nPeople" min="1" max="15" bind:value = {nPeople}/>
                        </div>
                        <button class= "w-full shadow-sm rounded button submit"type = "Submit">
                            Submit
                        </button>
                        <a href="../signup">
                            <p class="clickhere font-bold text-grey-800 text-center label-link">
                                Click here for signing up if it's your first time here
                            </p>    
                        </a>         
                    </div>                    
                </form>
            </div>
            <img src="../../static/priscilia.jpg" alt="Fishmarket" class="image-log-in"> 
        </div>
        <h1 class="txt-top wrapper-login">
            Join our community
        </h1> 
    </div>
{/if}




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
		padding-top: 5%;
		padding-bottom: 5%;
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

    
    .piece-left{
        margin-left:15%;      
    }
    .label-link{
        margin-top: 15%;
        font-size: smaller;
        
    }
    .head{
        margin-top:10%;
        margin-bottom:15%;
    }
    .main-form{
        margin-bottom:15%;
    }
    .label{
        margin-bottom: 5%;
        margin-top:5%;
    }
    .input{
        border-radius: 7%;
        size:100%;
    }
    .submit{
        margin-top:15%;
    }
</style>




<!--
<svelte:head>
	<title>Book</title>
</svelte:head>

{#if $user}
    <div class="flex flex-col justify-center"> 
        <h1 class="head">
            Book a table at our restaurant
        </h1>
        <div class="flex flex-row justify-center">
            <form on:submit|preventDefault = {handleSubmit} class = "flex flex-col justify-center  main-form" id = "form">
                <div class="flex flex-col justify-center">
                    <label for="date" class="text-center label">
                        Select a date
                    </label>
                    <input type = "date" class="input" id = "input-date" name = "date" min="$now" bind:value = {date}/>
                </div>
                <div class="flex flex-col justify-center">
                    <label for="hour" class="text-center label">
                        Select an hour
                    </label>
                    <input type="time" class="input" id ="hour" name="hour" min="9:00" max="23:00" step="1800" bind:value = {hour}/>
                </div>
                <div class="flex flex-col justify-center">
                    <label for="nPeople" class="text-center label">
                        Select the number of people
                    </label>
                    <input type="number" class="input" name="nPeople" min="1" max="15" bind:value = {nPeople}/>
                </div>
                <button class= "w-full shadow-sm rounded button submit"type = "Submit">
                    Submit
                </button>
            </form>
            
            <img src="https://mmstreetfooddotcom.files.wordpress.com/2021/03/frittomaremisto.jpg?w=1024" alt="image-description" class="image-form">
        </div>
    </div>
{/if}

{#if !$user}
    <div class = "flex flex-col justify-center">
        <h1 class="head">
            Login to make a reservation
        </h1>
        <h3 class="text-center describer">
            In the meanwhile, you can take a look at our menus
        </h3>
        <div class="menu-block flex flex-wrap flex-row text-center font-bold justify-between">		
			<div class="block-3-menu-image-1">
				<a href="menu-1 menu-image wrapper-link-block-3" class="menu-link">
					<p class="block-3-text">
						Lunch and Dinner
					</p>
					<img src="https://f.hubspotusercontent30.net/hub/20410430/hubfs/raw_assets/public/bodrum/images/placeholders/120889909_907612126432046_8457132744148233001_n.jpg?width=265&height=443&name=120889909_907612126432046_8457132744148233001_n.jpg" alt="menu visualize" class="menu-img">
				</a>			
			</div>
			<div class="block-3-menu-image-2">
				<a href="menu-2  menu-image wrapper-link-block-2" class="menu-link">
					<p class="block-3-text">
						Wines and beverages
					</p>
					<img src="https://f.hubspotusercontent30.net/hub/20410430/hubfs/raw_assets/public/bodrum/images/placeholders/120889909_907612126432046_8457132744148233001_n.jpg?width=265&height=443&name=120889909_907612126432046_8457132744148233001_n.jpg" alt="menu visualize" class="menu-img">
				</a>
			</div>
			<div class="block-3-menu-image-3">
				<a href="menu-3 menu-image wrapper-link-block-2" class="menu-link">
					<p class="block-3-text">
						Breakfast and Bakeries
					</p>
					<img src="https://f.hubspotusercontent30.net/hub/20410430/hubfs/raw_assets/public/bodrum/images/placeholders/120889909_907612126432046_8457132744148233001_n.jpg?width=265&height=443&name=120889909_907612126432046_8457132744148233001_n.jpg" alt="menu visualize" class="menu-img">
				</a>
			</div>
		</div>
    </div>
{/if}
<style>

    .head{
        margin-top:10%;
        margin-bottom:15%;
    }
    .describer{
        margin-bottom:15%;
    }
    .main-form{
        margin-bottom:15%;
        margin-right:10%;
    }
    .image-form{
        width: 30%;
        height:30%;
        border-radius: 7%;
        margin-left:10%;
    }
    .menu-block{
        margin-bottom:15%;
        margin-left:5%;
        margin-right:5%;
    }
    .menu-img{
		border-radius: 7%;		
	}
    .label{
        margin-bottom: 5%;
        margin-top:5%;
    }
    .input{
        border-radius: 7%;
        size:100%;
    }
    .submit{
        margin-top:15%;
    }
</style>
-->