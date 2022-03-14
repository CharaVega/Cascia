<script>
    import {reservationHandler} from "$lib/supabase/assets";
    var date, hour, nPeople;
    import { user } from "$lib/supabase/auth";
    //import { query_selector_all } from "svelte/internal";
    console.log($user);
    function handleSubmit() {
        console.log("Callback handleSubmit");
        console.log("Returned values: (date, hour, nPeople) = ", date, hour, nPeople);
        reservationHandler(hour, date, nPeople);
    }
</script>

<div class="flex flex-col justify-center"> 
    <h1>
        Book a table at our restaurant
    </h1>
    <form on:submit|preventDefault = {handleSubmit} class = "flex flex-col justify-center" id = "form">
        <div class="flex flex-col justify-center">
            <label for="date">
                Select a date
            </label>
            <input type = "date" name = "date" bind:value = {date}/>
        </div>
        <div class="flex flex-col justify-center">
            <label for="hour">
                Select an hour
            </label>
            <input type="time" name="hour" min="9.00" max="23.00" bind:value = {hour}/>
        </div>
        <div class="flex flex-col justify-center">
            <label for="nPeople">
                Select the number of people
            </label>
            <input type="number" name="nPeople" min="1" max="15"bind:value = {nPeople}/>
        </div>
        <button class= "w-full shadow-sm rounded button"type = "Submit">
            Submit
        </button>
    </form>
</div>