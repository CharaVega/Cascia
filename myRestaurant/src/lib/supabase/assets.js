import supabase from '$lib/db'
import { user } from "$lib/supabase/auth";



//Reading informations about the table
export async function readTableData() {
    const { data, error } = await supabase
        .from(`Tables`)
        .select()
    if (error) throw new Error(error.message);
    else {
        console.log("Callback to readTableData produced the following result:  ", data);
    }
    return data
}

//Retrieving information from the DB concerning the H/D of the requested booking
export async function readReservationData( /*day, hour*/ ) {
    const { data, error } = await supabase
        .from(`Reservations`)
        .select()
        //.eq("date", day)
        //.eq("time", hour)
    if (error) throw new Error(error.message)
    if (data) console.log("Callback to readReservationData produced the following result:  ", data);
    return data
}


export async function checkAvailability(time, date, nPeople) {
    const infoTables = await readTableData();
    var totRes = await readReservationData();
    var othRes = totRes.filter(function(value, index, arr) {
        if (value.date === date && value.hour === time) return value
    })
    var possibleTables = infoTables.filter(function(value) {
        //This is the array object containing all available tables that could fit the amount of people of  the reservation
        if (value.maxPeople >= nPeople && value.minPeople <= nPeople) {
            if (othRes.length) {
                for (var j = 0; j < othRes.length; j++) {
                    if (value.id !== othRes[j].table) {
                        console.log("Callback function as checkAvailability parameter produced the following result: ", value);
                        return value;
                    }
                }
            } else {
                console.log("Callback function as checkAvailability parameter produced the following result: ", value);
                return value;
            }
        }
    })
    console.log("Callback checkAvailability: possible table = ", possibleTables)
    if (possibleTables) { //maybe amongst all the table we should pick  the one with least maxPeople value
        var leastMax = possibleTables[0];
        for (var i = 0; i < possibleTables.length; i++) {
            if (possibleTables[i].maxPeople < leastMax.maxPeople) {
                leastMax = possibleTables[i]; // Selecting the one with least maxPeople, so that the minimum amount of 
                //spare seats is obtained
            }
        }
        //here we should invoke the callback function for writing the informations of the reservation
        //NOPE we do this in another functions
        console.log("Callback to checkAvailability produced the following result:  ", leastMax)
        return leastMax;
    } else {
        console.log("Nope!!! Ee cannot process your reservation, we are sorry...");
        return false;
    }
}

export const reservationHandler = async(hour, date, nPeople) => {
    console.log("Calback reservationHandler request made for (hour, date, nPeople) = ", hour, date, nPeople);
    if (user) {
        console.log("The user is logged, trying to handle its request");
        const uId = supabase.auth.user().id;
        var spot = await checkAvailability(hour, date, nPeople);
        console.log("The check of actual availability was successful, we have found: ", spot);
        if (spot) {
            //Here we should proceed with what happens when the requested resevation is actually feasible
            //We should write the data on the Reservation table for updating
            //Write data on Resevation info
            try {
                console.log("Callback reservationHandler");
                console.log("Trying to write the reservation data...");
                const { error } = await supabase
                    .from('Reservations')
                    .insert([{ nPeople: nPeople, date: date, time: hour, userId: uId, table: spot.id }], { returning: "minimal" } //Setting returning to minimal for liminting the default return implemented by .insert() 
                    )
                if (error) {
                    console.log("Callback reservationHandler");
                    console.log("ERROR : Could not write data");
                    throw error;
                } else {
                    console.log("Callback reservationHandler");
                    console.log("Data written successfully");
                }
            } catch (err) {
                console.error(err);
                alert(err.error_description || err.message);
            } finally {
                console.log("function call ended")
            }
        } else {
            alert("The research did not produce any result");
        }
    }
}

/*
export async function readProfilesData() {
    const { data, error } = await supabase
        .from(`Profiles`)
        .select()
    if (error) throw new Error(error.message)
    return data
}

export async function readAuthMail() {
    const { data, error } = await supabase
        .from('auth.users')
        .select('email')
    if (error) throw new Error(error.message)
    console.log(data);
    return data
}*/
/*
export class requestReservation {
    constructor(hour, date, nPeople, isOutside, userid) {
        this.hour = hour;
        this.nPeople = nPeople;
        this.isOutside = isOutside;
        this.userid = userid;
    }
}
*/