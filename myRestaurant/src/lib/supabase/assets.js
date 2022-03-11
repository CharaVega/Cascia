import supabase from '$lib/db'



//Reading informations about the table
export async function readTableData() {
    const { data, error } = await supabase
        .from(`Tables`)
        .select()
    if (error) throw new Error(error.message);
    else {
        console.log(data);
    }
    return data
}

//Retrieving information from the DB concerning the H/D of the requested booking
export async function readReservationData(day, hour) {
    const { data, error } = await supabase
        .from(`Reservations`)
        .select()
        .eq("date", day)
        .eq("hour", hour)
    if (error) throw new Error(error.message)
    return data
}

export async function checkAvailability(time, date, nPeople) {
    const infoTables = await readTableData();
    var othRes = await readReservationData(date, time);
    var possibleTables = infoTables.filter(function(value, index, arr) {
        //This is the array object containing all available tables that could fit the amount of people of  the reservation
        if (value.maxPeople >= nPeople && value.minPeople <= nPeople) {
            for (var j = 0; j < othRes.length; j++) {
                if (value.id !== othRes[j].table) {
                    return value;
                }
            }
        }
    })
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
        return leastMax;
    } else {
        console.log("Nope!!! Ee cannot process your reservation, we are sorry...");
        return false;
    }
}

export const reservationHandler = async(hour, date, nPeople) => {
    var spot = checkAvailability(hour, date, nPeople);
    if (spot) {
        //Here we should proceed with what happens when the requested resevation is actually feasible
        //We should write the data on the Reservation table for updating
        //Write data on Resevation info 
    } else {
        alert("The research did not produce any result");
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