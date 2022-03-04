<!--<div class="wrapper-header">-->
        <!--<div class="item-header left-corner">
            <div class="wrapper-logo">
                <a href="https://kit.svelte.dev">
                    <img src="../../../static/logo.png" alt="SvelteKit" class="logo bg-blend-difference mix-blend-darken"/>
                </a>
            </div>
        </div>-->
        <!--<div class="item-header right-corner"></div>
            <div class="wrapper-navbar">-->
            <header class="wrapper-header">
                <div class="wrapper-logo">
                    <a href="https://kit.svelte.dev">
                        <img src="../../../static/logo.png" alt="SvelteKit" class="logo bg-blend-difference mix-blend-darken"/>
                    </a>
                </div>
                <!--<nav class="wrapper-navbar">-->
                    <!--<a href="(06) 7984-3419" class = "menuicon-threelines menu-rect"><span class="material-icons-outlined">
                    </span></a>-->
                    <!--<a href="Phone Number" class = "menuicon-findatable menu-rect">(06)7984-3419</a>
                    <a href="#Find A Table" class = "menuicon-findatable menu-rect" >FIND A TABLE</a>
                    <a href="#Order Online" class = "menuicon-findatable menu-rect">ORDER </a>		
                </nav>-->
            </header>
          <!--  </div>
        </div>-->
<!--</div>-->

<style>
    .wrapper-header {
        /*position: -webkit-sticky;
        position:sticky;*/
        position: -webkit-sticky;
        position:sticky;
        top:0px;
        position:relative;
        display: flex;
        flex-direction:row;
        justify-content:flex-end;
        height:50%;
        width:100%;
		z-index:10;
        gap:auto;
        align-items: center;
        background-color:rgb(129, 160, 143);
    }

    .wrapper-logo, 
    img {
        position:sticky;
        float:left;
        size:auto;
    }
    
    /*.left-corner{
        float:left;
    }
    .navbar{
        width:100%;
    }
    .right-corner{   
        size:auto;
        margin-left:0px;
        margin-right:1%;
    }
    */
    .wrapper-navbar {
        margin-right: 0px;       
        display: inline-block;
        flex-direction: row flex;
        width:100%;
        justify-content: flex-end;
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
        border-width: 1.5px;
        border-style: solid;
        padding: auto;
        text-decoration: none;
		border-radius: 3%;
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

        /*TEXT INSIDE MENU ICON RECT1*/
        /*.menuicon-findatable a {
            float: center;
            text-decoration: none;
            color: #FFFFFF;
            text-align: center;
            padding: 18px;
        }

    .navbar a{
        text-decoration: none;
        font-family: 'Lato',sans-serif; 
        font-size: auto; 
        padding: auto;
        color:white;
    }*/

    a:hover {
		color: lightgrey;
	}
</style>