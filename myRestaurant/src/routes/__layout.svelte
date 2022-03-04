<script>
	import '../app.css';
	import Header from "$lib/header/Header.svelte";
	import { set_style } from 'svelte/internal';
	export function scroll_modifier(){
		let head=document.querySelectorAll("wrapper-navbar");
		let state=window.scrollY;
		if(state){
			for(var i=0; i<head.length; i++){
				set_style(head, "background-color", "white");
			}
		};
	}
</script>


<!--
<div class="wrapper-logo">
                    <a href="https://kit.svelte.dev">
                        <img src="../../../static/logo.png" alt="SvelteKit" class="logo bg-blend-difference mix-blend-darken"/>
                    </a>
                </div>-->
<nav class="wrapper-navbar">
	<!--<a href="(06) 7984-3419" class = "menuicon-threelines menu-rect"><span class="material-icons-outlined">
	</span></a>-->
	<a href="Phone Number" class = "menuicon-findatable menu-rect">(06)7984-3419</a>
	<a href="#Find A Table" class = "menuicon-findatable menu-rect" >FIND A TABLE</a>
	<a href="#Order Online" class = "menuicon-findatable menu-rect">ORDER </a>		
</nav>

<slot/>


<div class="bottom-image-wrapper">
	<img src="" alt ="bottom image"class="img-bottom"/>
</div>
<footer class="wrapper-footer">
	
	<div class="first-level">
		<div class="wrapper-social-img">
			<img src="" alt="facebook logo" class="fb-log"/>
			<img src="../../static/twt.png" alt="instagram logo" class="insta-logo">
			<img src="" alt="tripadvisor logo" class="tripadv-logo"/>
		</div>
		<div class="wrapper-info">
			<a href="#something" class="address"> 15, Les Linandes Orange, Cergy, Ile de France, 95100 </a>
		</div>
	</div>
	<div class="second-layer">

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
            border-width: 1px;
            border-style: solid;
            padding: 22px 21px 21px;
            float: right;
            position: sticky;
            text-decoration: none;
        }
	.bottom-image-wrapper{
		display:flex;
		flex-flow:row flex;
		justify-content:center;
	}
	.wrapper-footer{	
		display: flex;
		flex-flow:column flex;
		justify-content: center;
		row-gap: 100%;
	}
	.wrapper-social-img{
		display:flex;
		flex-flow:row flex;
		justify-content: space-evenly;
	}
	.insta-logo{
		mix-blend-mode: difference;
		background-blend-mode: difference;
	}
	.second-layer{
		background-image: url("../../static/bg-bottom.png");
		background-size: cover;
	}
</style>
