<script lang= "ts">
	import '../app.css';
	//import Header from "$lib/header/Header.svelte";
	//import { set_style } from 'svelte/internal';	
	$:{
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
	}
</script>


<!--
	<div class="wrapper-logo">
						<a href="https://kit.svelte.dev">
							<img src="../../../static/logo.png" alt="SvelteKit" class="logo bg-blend-difference mix-blend-darken"/>
						</a>
					</div>
-->
<nav class="wrapper-navbar">
	<!--<a href="(06) 7984-3419" class = "menuicon-threelines menu-rect"><span class="material-icons-outlined">
	</span></a>-->
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
</nav>

<slot/>


<div class="bottom-image-wrapper">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img src="../../static/bottom-img.png" alt ="bottom image" class="img-bottom"/>
</div>
<footer class="wrapper-footer">
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
        color:white;
        margin:auto;
    }
    .menuicon-findatable {
        /*background: #0F518E00;*/
        border-color: #FFFFFF;
        border-width: auto;
        border-style: solid;
        padding: auto;
        text-decoration: none;
		border-radius: 3%;
        float:left;
        margin:auto;
    }
    .menuicon-findatable {
        width: 184px;
        height: 58px;
        display: block;
        display: inline-flex;
        /*background: #0F518E00;*/
        border-color: #FFFFFF;
        border-width: 2px;
        border-style: solid;
        padding: 22px 21px 21px;
        float: right;
        position: sticky;
        text-decoration: none;
    }
	.text-top-bar{
		color: white;
	}
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
	.wrapper-footer{	
		display: flex;
		flex-flow:column flex;
		justify-content: center;
		row-gap: 100%;
		/*background-image: url("../../static/bg-bottom.png");
		background-size: cover;*/
	}
	.wrapper-social-img{
		display:flex;
		flex-flow:row flex;
		justify-content: space-evenly;
	}
	.insta-logo,
	.fb-logo,
	.tripadv-logo{
		mix-blend-mode: difference;
		background-blend-mode: difference;
		border-radius: 7%;
	}
	.wrapper-info{
		background-image: url("../../static/bg-bottom.png");
		background-size:cover;
		display: flex;
		flex-flow:row flex;
		justify-content: center;
	}
</style>
