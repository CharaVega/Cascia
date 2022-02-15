<head>
    <meta charset="UTF-8"> 
    <meta name="Gigi restaurant" content="width=device-width, initial-scale=1.0">
    <title>Gigi's Restaurant Paris Website</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>

<body>

    <nav class="navbar">
        <a href="Phone Number" class= "menuicon-findatable">(06)7984-3419</a>
        <a href="#Find A Table" class = "menuicon-findatable" >FIND A TABLE</a>
        <a href="#Order Online" class = "menuicon-findatable">ORDER ONLINE</a>
        <a href="(06) 7984-3419" class= "menuicon-threelines"><span class="material-icons-outlined">
            </span>three lines here </a>
    </nav> 



    <style>
        /*for the LATO font*/
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

    /*LOGO TOP LEFT*/
    .img logo{
        object-fit: scale-down;
        display: inline-flex;
    }

    .navbar a{
        text-decoration: none;
            font-family: 'Lato',sans-serif; 
            font-size: 13px; 
            padding: 22px 21px 21px;
    }
    
    /*MENI ICON THREE LINES RECT2*/
    .menuicon-threelines{
            width: 59px;
            height: 58px;
            display: block;
            display: inline-flex;
            background: #0F518E00;
            border-color: #FFFFFF;
            border-width: 1px;
            border-style: solid;
            padding: 22px 21px 21px;
            float: right;
            position: sticky;
            text-decoration: none;         
        }
    /* to make hyperlink white otherwise hyperlink turns blue*/
            .navbar a:link {
            color: #ffffff;
        }
        
    
    /*MENU ICON RECT1*/

        .menuicon-findatable {
            width: 184px;
            height: 58px;
            display: block;
            display: inline-flex;
            background: #0F518E00;
            border-color: #FFFFFF;
            border-width: 1px;
            border-style: solid;
            padding: 22px 21px 21px;
            float: right;
            position: sticky;
            text-decoration: none;
        }

        /*TEXT INSIDE MENU ICON RECT1*/
        .menuicon-findatable a {
            float: center;
            text-decoration: none;
            color: #FFFFFF;
            text-align: center;
            padding: 18px;
        }


        /*MAIN PAGE COVER IMAGE*/
        body{
            background-image: url(https://gigi-restaurant.com/wp-content/uploads/2021/12/Gigi-Val-dIsère@RomainRicard-17.jpg);
            background-size: cover;
            background-position: center;
        }


    </style>
</body>