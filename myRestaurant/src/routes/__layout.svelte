<script lang= "ts">
	import '../app.css';
    import { user } from "$lib/stores/authStore";
	import  supabase  from "$lib/db";
	import { goto } from '$app/navigation';
	const redirectToHome = () =>{
		console.log("Callback redirectHome, redirecting");
		goto("./");
	}
	const handleLogOut = async() =>{
		try{
			const {error} = await supabase.auth.signOut();
			if (error){
                console.log(error);
                alert("Callback handleLogOut ERROR : not able to SignOut");
                throw error;
			}
			else{
				user.set(false);
				alert("Logged out");
			}
		}catch(err){
			console.log(err);
			alert(err.message || err.error_description);
		}
	}
	console.log("Any user connected : " , $user);
</script>

<div class="flex flex-col justify-center">
	<div class ="flex flex-row justify-center">
		<img src="../../static/favicon.png" class="logo" alt="logo" on:click|preventDefault = {redirectToHome}>	
	</div>
	<nav class="wrapper-navbar flex flex-row justify-center">
		<button  class = "menuicon-findatable menu-rect">
			<a href="Phone Number" class="text-top-bar">
				(06)7984-3419
			</a>
		</button>
		<button  class = "menuicon-findatable menu-rect" >
			<a href="../book" class="text-top-bar">
				FIND A TABLE
			</a>
		</button>
		<button  class = "menuicon-findatable menu-rect">
			<a href="../menus" class="text-top-bar">
				MENUS 
			</a>	
		</button>	
		{#if !$user}
			<button  class = "menuicon-findatable menu-rect">
				<a href="../login" class="text-top-bar">
					LOGIN 
				</a>	
			</button>
		{:else}
			<button  class = "menuicon-findatable menu-rect">
				<a href="../profile" class="text-top-bar">
					PROFILE
				</a>	
			</button>
		{/if}

	</nav>
</div>

<slot/>
<footer class="wrapper-footer flex flex-column justify-center">
	<!--<div>
		<Auth/>
	</div>-->
	<div class="first-level">
		<div class="wrapper-social-img flex flex-row justify-evenly">
			<img src="../../static/fb-logo.png" alt="facebook logo" class="fb-logo mix-blend-difference bg-blend-difference"/>
			<img src="../../static/insta-logo.png" alt="instagram logo" class="insta-logo">
			<img src="../../static/tripadv-logo.png" alt="tripadvisor logo" class="tripadv-logo"/>
			{#if $user}<botton on:click|preventDefault = {handleLogOut}> log out </botton>{/if}
		</div>
		<div class="second-level">
			<div class="wrapper-info flex flex-row justify-center">
				<a href="#something" class="address"> 15, Les Linandes Orange, Cergy, Ile de France, 95100 </a>
			</div>
		</div>
	</div>
</footer>

<style>
	.logo{
		margin-top:1.5%;
		width:5%;
		height:5%;
	}
	.wrapper-navbar{
		column-gap: 10%;
		margin-top: 3%;
		margin-bottom: 5%;
	}

/*
	.wrapper-navbar {
		position:-webkit-sticky;
		position:sticky;
		top:0px;
        margin-right: 0px;       
        display: inline-block;
        flex-direction: row flex;
        width:100%;
        justify-content: flex-end;
		z-index:10;
    } 
    .menu-rect{
        padding:auto;
        size:auto;
        width:50%;
        height:100%;
        color:rgb(53, 50, 68);
        margin:auto;
		background-color: rgb(250, 246, 244);
    }*/
	/*
    .menuicon-findatable {
        border-color: rgb(250, 246, 244);
        border-width: auto;
        border-style: solid;
        padding: auto;
        text-decoration: none;
		border-radius: 7%;
        float:left;
        margin:auto;
    }
    .menuicon-findatable {
        width: 184px;
        height: 58px;
        display: block;
        display: inline-flex;
        border-color: rgb(53, 50, 68);
        border-width: 2px;
        border-style: solid;
        padding: 22px 21px 21px;
        float: right;
        position: sticky;
        text-decoration: none;
    }
	.text-top-bar{
		color: rgb(3, 4, 26);
	}*/
	/*
	.bottom-image-wrapper{
		display:flex;
		flex-flow:row flex;
		justify-content:center;
	}
	.img-bottom{
		mix-blend-mode: difference ;
		background-blend-mode: hard-light ;
		border-radius: 7%;
	}
	*/
	.text-top-bar{
		color: rgb(3, 4, 26);
		/*We have to choose the right fonts and styles here*/
	}
	.wrapper-footer{
		row-gap: 100%;
		/*background-image: url("../../static/bg-bottom.png");
		background-size: cover;*/
	}
	.wrapper-social-img{
		margin-top: 15%;
		margin-bottom: 15%;
	}
	.insta-logo,
	.fb-logo,
	.tripadv-logo{
		mix-blend-mode: difference;
		background-blend-mode: difference;
		border-radius: 7%;
	}
	.wrapper-info{
		margin-top: 15%;
		margin-bottom: 30%;
	}
</style>