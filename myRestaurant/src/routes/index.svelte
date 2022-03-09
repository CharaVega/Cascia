<script context="module" lang="ts">
	import { readTableData} from '$lib/items/assets';
	import { checkAvailability} from '$lib/items/assets';
	
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!--
{#await checkAvailability()}

{/await}
-->

<div class="wrapper flex flex-wrap flex-row text-center font-bold">
	<!--<Header></Header>-->
	<section class="first blocks">
		<div class="wrapper-block-1 flex flex-wrap flex-row text-center font-bold justify-center">
			<!--<div class="wrapper-logo">
                <a href="https://kit.svelte.dev">
                    <img src="../../../static/logo.png" alt="SvelteKit" class="logo bg-blend-difference mix-blend-darken"/>
                </a>
            </div>-->			
			<h1 class = "catch-phrase">
				le Goute Local
			</h1>
		</div>
	</section>

	<section class="second blocks">
		<div class="wrapper-block-2 flex flex-wrap flex-row text-center font-bold justify-center">
			<div class="txt-block-2">
				<p>
					Katione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui mopahidsghjsbjhbdjkhfd sajdsk d bdfkj sjasljjaosidhaf jdkbsjdfbao apdajsdlsj fd bawpa dguasidhsajksda pdsdjiaofehdfab adlskSDIWDHMAISH BDao oJS IObkbMSDJFNS JKS SIIAHDBkjlJSHKAW9 0EU3Q9HKJ33BO31 81 893 8FUIKDDAKJBD FBHFEBWF UE0Wss8dayhlnn wiojds iojdhfsius8 s98a0 as9dw '0 deò rjk4n33hjdwnsksq'
				</p>
			</div>
			<div class="img-block-2">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img src="https://gigi-restaurant.com/wp-content/uploads/2021/11/CUCINA-683x1024.jpg" alt="Image of our good food" class="img-block2">
			</div>	
		</div>
	</section>

	<section class="third blocks">
		<div class="wrapper-block-3 flex flex-wrap flex-row text-center font-bold justify-center">		
			<div class="block-3-menu-image-1">
				<a href="menu-1 wrapper-link-block-3" class="menu-link">
					<p class="block-3-text">
						Lunch and Dinner
					</p>
					<img src="https://f.hubspotusercontent30.net/hub/20410430/hubfs/raw_assets/public/bodrum/images/placeholders/120889909_907612126432046_8457132744148233001_n.jpg?width=265&height=443&name=120889909_907612126432046_8457132744148233001_n.jpg" alt="menu visualize" class="menu-img-blck-3">
				</a>			
			</div>
			<div class="block-3-menu-image-2">
				<a href="menu-2 wrapper-link-block-2" class="menu-link">
					<p class="block-3-text">
						Wines and beverages
					</p>
					<img src="https://f.hubspotusercontent30.net/hub/20410430/hubfs/raw_assets/public/bodrum/images/placeholders/120889909_907612126432046_8457132744148233001_n.jpg?width=265&height=443&name=120889909_907612126432046_8457132744148233001_n.jpg" alt="menu visualize" class="menu-img-blck-3">
				</a>
			</div>
			<div class="block-3-menu-image-3">
				<a href="menu-3 wrapper-link-block-2" class="menu-link">
					<p class="block-3-text">
						Breakfast and Bakeries
					</p>
					<img src="https://f.hubspotusercontent30.net/hub/20410430/hubfs/raw_assets/public/bodrum/images/placeholders/120889909_907612126432046_8457132744148233001_n.jpg?width=265&height=443&name=120889909_907612126432046_8457132744148233001_n.jpg" alt="menu visualize" class="menu-img-blck-3">
				</a>
			</div>
		</div>
	</section>
</div>

<!--<Footer></Footer>-->


<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&display=swap');

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
	/*
	.wrapper {
        display: flex;  
        flex-flow: row wrap;
        font-weight: bold;
        text-align: center; 
    }*/
	.blocks {
		width:100%;
		height:100%;
	}
	.wrapper-block-1 {
		/*position:relative;*/
        width:100%;
		height:100%;
		background-image: url(https://gigi-restaurant.com/wp-content/uploads/2021/12/Gigi-Val-dIsère@RomainRicard-17.jpg);
		background-size: cover;
        background-position: center;
        /*display:flex;
		flex-direction: row flex;
		justify-content: center;*/
		z-index:6;
    }
	.catch-phrase{
		color: white;
		font-family:"Better Grade";
		margin-top:25%;
		margin-bottom: 20%;
		font-size: 1000%;
		flex-basis: 100%;
		flex-shrink: 3;
	}
	/*.block-2{
		width:100%;
		height:100%;
		background-color: white;
		display:inline-flex;
		background-image: url("../../static/bg-block-2.png");
		background-size:cover;
		z-index: 6;
	}*/
	.wrapper-block-2{
		/*display:flex;
		flex-direction: row flex;
		justify-content: center;*/
		background-image: url("../../static/edits/svg/threelines.svg");
		background-size:cover;
		width:100%;
		height:100%;
	}
	.txt-block-2{	
		margin-top:25%;
		margin-bottom:25%;
		font-family:cursive;
		width:20%;
		height:70%;
		position:relative;
		font-family: 'Playfair Display', serif;
	}
	.img-block2{
		display: inline-flexbox;
		margin-top:45%;
		margin-bottom:45%;
		width:60%;
		height:50%;
		position:relative;
		float:right;
		border-radius: 7%;		
	}
	.wrapper-block-3{
		width:100%;
		height:50%;
	}

	.wrapper-link-block-3{
		display:flex;
		flex-direction: column flex;
		justify-content: space-evenly;
		width:100%;
		height:100%;

	}

	
	.block-3-menu-image-1,
	.block-3-menu-image-2,
	.block-3-menu-image-3{
		flex-basis:20%;
		margin-left:auto;
		margin-right:auto;
		margin-top:45%;
		margin-bottom: 45%;
		size:100%;
		border-radius: 7%;
	}
	.block-3-text{
		font-family:Lato;
		text-align:center;
		margin-bottom:5%;
		position:relative;
	}
	
	.menu-img-blck-3{
		border-radius: 7%;
	}
	/*.block-3-menu-image-1{
		display: inline-flexbox;
		margin-left:auto;
		margin-right:auto;
		font-family:cursive;
		width:100%;
		height:100%;
		position:relative;
		margin-top:45%;

	}
	.block-3-menu-image-2{
		display: inline-flexbox;
		margin-left:auto;
		margin-right:auto;
		font-family:cursive;
		width:100%;
		height:100%;
		position:relative;
		margin-top:45%;
		margin-bottom:45%;
	}
	.block-3-menu-image-3{
		display: inline-flexbox;
		margin-left:auto;
		margin-right:auto;
		margin-top:45%;
		text-align: center;
		font-family:cursive;	
		width:100%;
		height:100%;
		position:relative;
		margin-bottom:45%;
		margin-top:45%;
	}*/
	.block-3-text{
		text-align: center;
		font-size: 100%;
	}
</style>
