<script lang= "ts">
	import '../app.css';
	import {loginStatus} from "$lib/supabase/login"
	const l = loginStatus();//contains a boolean value whether the user is logged in or not



	//import Header from "$lib/header/Header.svelte";
	//import { set_style } from 'svelte/internal';	
	/*
	$:{//This is for adding the style once the page is scrolled
		function scroll_modifier(){
			let userHasScrolled = false; 
			let head=document.querySelectorAll(".menu-rect"); 
			window.onscroll = (e) => {  
				userHasScrolled = true;  
			}
			if(userHasScrolled){
				for(var i=0;i<head.length;i++){
					head[i].setAttribute("style", "background-color:white")
				}
			}
		}
	}/*
	import Auth from "$lib/Auth.svelte"
	import {user} from "$lib/supabase/auth";
	import supabase from '$lib/db';
	console.log(supabase.auth.user);
	user.set(supabase.auth.user()); 

	supabase.auth.onAuthStateChange((_, session)=>{
		user.set(session?.user);
		if(session?.user){
			//doSomething
		}
	})*/
</script>




<nav class="wrapper-navbar">
	<button  class = "menuicon-findatable menu-rect">
		<a href="Phone Number" class="text-top-bar">
			(06)7984-3419
		</a>
	</button>
	<button  class = "menuicon-findatable menu-rect" >
		<a href="#Find A Table" class="text-top-bar">
			FIND A TABLE
		</a>
	</button>
	<button  class = "menuicon-findatable menu-rect">
		<a href="#Order Online" class="text-top-bar">
			ORDER 
		</a>	
	</button>
	
	<button  class = "menuicon-findatable menu-rect">
		<a href="../login" class="text-top-bar">
			LOGIN 
		</a>	
	</button>
</nav>

<slot/>

<!--
<div class="bottom-image-wrapper">
	<img src="../../static/bottom-img.png" alt ="bottom image" class="img-bottom"/>
	
</div>-->
<footer class="wrapper-footer">
	<!--<div>
		<Auth/>
	</div>-->
	<div class="first-level">
		<div class="wrapper-social-img">
			<img src="../../static/fb-logo.png" alt="facebook logo" class="fb-logo"/>
			<img src="../../static/insta-logo.png" alt="instagram logo" class="insta-logo">
			<img src="../../static/tripadv-logo.png" alt="tripadvisor logo" class="tripadv-logo"/>
		</div>
		<div class="second-level">
			<div class="wrapper-info">
				<a href="#something" class="address"> 15, Les Linandes Orange, Cergy, Ile de France, 95100 </a>
			</div>
		</div>
	</div>
</footer>

<style>
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
    }
    .menuicon-findatable {
        /*background: #0F518E00;*/
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
        /*background: #0F518E00;*/
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
	}
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
	}*/
	.wrapper-footer{	
		display: flex;
		flex-flow:column flex;
		justify-content: center;
		row-gap: 100%;
		background-image: url("../../static/bg-bottom.png");
		background-size: cover;
	}
	.wrapper-social-img{
		display:flex;
		flex-flow:row flex;
		justify-content: space-evenly;
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
		/*background-image: url("../../static/bg-bottom.png");
		background-size:cover;*/
		display: flex;
		flex-flow:row flex;
		justify-content: center;
		margin-top: 15%;
		margin-bottom: 30%;
	}
</style>