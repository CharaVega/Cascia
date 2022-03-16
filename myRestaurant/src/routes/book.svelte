<script>
    import {reservationHandler} from "$lib/assets";
    import { user } from "$lib/stores/authStore";
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
</script>


<svelte:head>
	<title>Book</title>
</svelte:head>
<!--If the user is logged in -->
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
                    <input type="number" class="input" name="nPeople" min="1" max="15"bind:value = {nPeople}/>
                </div>
                <button class= "w-full shadow-sm rounded button submit"type = "Submit">
                    Submit
                </button>
            </form>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="https://mmstreetfooddotcom.files.wordpress.com/2021/03/frittomaremisto.jpg?w=1024" alt="image-description" class="image-form">
        </div>
    </div>
{/if}
<!-- If the User is not logged in-->
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