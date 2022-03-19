<script>
    import {user} from "$lib/stores/authStore";
    import {insertMessageData} from "$lib/assets";
    import supabase from "$lib/db";
    var messageObj, messageText;
    const handleMessage = async () =>{
        insertMessageData(supabase.auth.user().id, messageObj, messageText);
    }
</script>


{#if $user}
    <form action="action_page.php" on:submit|preventDefault = {handleMessage} class="flex flex-col justify-center wrapper">
        <label for="object" class="text-center label">
            What is it about?
        </label>
        <input bind:value ={messageObj} type="text" id="object" name="object" placeholder="Write something.." style="height:200px">
        <label for="texts" class="text-center label">
            Your comments
        </label>
        <input bind:value ={messageText} type="text" id="text" name="text" placeholder="Write something.." style="height:200px">
        <input type="submit" value="Submit" class="submit"> 
    </form>
{/if}



<style>
    .wrapper{
        margin-left:15%;
        margin-right:15%;
    }
    input[type=submit] {
        background-color: #04AA6D;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .submit{
        margin-top:3%;
        margin-bottom:5%;
    }
    .label{
        margin-top:5%;
        margin-bottom:3%;
        color: #7898b8;
    }
</style>
<!--
<style>
    /* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */  
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
    background-color: #04AA6D;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
    background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
</style>-->