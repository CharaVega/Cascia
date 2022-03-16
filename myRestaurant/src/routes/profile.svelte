<script>
    import { user } from "$lib/stores/authStore";
    import { getProfileInfo } from "$lib/assets"; 
    import supabase from "$lib/db";
    console.log("UserStore : ", $user);
    console.log("supabase.auth.user().id", supabase.auth.user().id? supabase.auth.user().id: "");
    const loadData = async() =>{
        if($user){
            const info = await getProfileInfo(supabase.auth.user().id);       
            return info;
        }
    }
    const info = loadData().then(
        (value) =>{
            return value
        },
        (reason) =>{
            console.log("Callback loadData, promise not fulfilled for", reason)
        }
    )
    console.log("The async function loadData produced the following result", info);
    /*
    let uData = {
        firstName : info.firstName,
        lastName : info.lastName,
        email : info.email,
        phone : info.phone,
        username : info.username
    }
    */
</script>


<svelte:head>
	<title>Profile</title>
</svelte:head>
{#if user}
    <div class = "flex flex-col justify-center">
        <h1>
            Your Personal area
        </h1>
        <div id="details-body" class="flex flex-col justify-center">
            <!--{#if }-->
            <h3 class="text-center">
                Your details
            </h3>
            <div id="details" class=" flex flex-col justify-evenly">
                <div>First name : </div>
                <div>Last name : </div>
                <div>Email address : </div>
                <div>Username : </div>
                <div>Telephone : </div>
            </div>
            <!--{/if}-->
        </div>
        <div id="orders">
            <h3 class=text-center>
                Your reservations
            </h3>
        </div>
    </div>
{/if}