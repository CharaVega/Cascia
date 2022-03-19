import supabase from '$lib/db'
import { user } from "$lib/stores/authStore"


//---------------Reading data from supabase
export async function readUserData() {
    const { data, error } = await supabase
        .from(`Profiles`)
        .select()
    if (error) throw new Error(error.message);
    return data;
}


export async function readTableData() {
    const { data, error } = await supabase
        .from(`Tables`)
        .select()
    if (error) throw new Error(error.message);
    return data;
}


export async function readReservationData() {
    const { data, error } = await supabase
        .from(`Reservations`)
        .select()
    if (error) throw new Error(error.message)
    return data;
}


//------------------Check availability for booking a table 
export async function checkAvailability(time, date, nPeople) {
    time = time + ":00";
    const infoTables = await readTableData();
    var totRes = await readReservationData();
    var othRes = totRes.filter(function(value) {
        if (value.date == date && value.time == time) return value
    })
    var possibleTables = infoTables.filter(function(value) {
        if (value.maxPeople >= nPeople && value.minPeople <= nPeople) {
            if (othRes.length) {
                var okay = true;
                for (var j = 0; j < othRes.length; j++) {
                    if (value.id === othRes[j].table) {
                        okay = false;
                        break;
                    }
                }
                if (okay === true) return value;
            } else {
                return value;
            }
        }
    })
    if (possibleTables.length) {
        var leastMax = possibleTables[0];
        for (var i = 0; i < possibleTables.length; i++) {
            if (possibleTables[i].maxPeople < leastMax.maxPeople) {
                leastMax = possibleTables[i];
            }
        }
        return leastMax;
    } else {
        return false;
    }
}

//-----------handler of the reservation request, writes data on the supabase db
export const reservationHandler = async(hour, date, nPeople) => {
    console.log("Calback reservationHandler request made for (hour, date, nPeople) = ", hour, date, nPeople);
    if (user) {
        const uId = supabase.auth.user().id;
        var spot = await checkAvailability(hour, date, nPeople);
        if (spot) {
            try {
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
                    alert("The reservation was successfull");
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
    } else {
        alert("Log-in in order to be able to reserve a table");
    }
}

//-----------------Writing message data on supabase db

export const insertMessageData = async(uid, object, message) => {
    try {
        const { error } = await supabase
            .from('Reservations')
            .insert([{ object: object, text: message, author: uid }], { returning: "minimal" } //Setting returning to minimal for liminting the default return implemented by .insert() 
            )
        if (error) {
            console.log("Callback insertMessageData");
            console.log("ERROR : Could not write data");
            throw error;
        } else {
            console.log("Callback insertMessageData");
            console.log("Data written successfully");
            alert("The reservation was successfull");
        }
    } catch (err) {
        console.error(err);
        alert(err.error_description || err.message);
    } finally {
        console.log("function call ended")
    }
}

//-----------------Writing user data on supabase db at sign up
export const insertUserData = async(uid_, username_, email_, name_, surname_, phone_) => {
    try {
        const { error } = await supabase
            .from('Profiles')
            .insert(
                [{ id: uid_, username: username_, name: name_, surname: surname_, phoneNumber: phone_, email: email_ }], { returning: "minimal" }
            )
        if (error) {
            console.log("Callback insertUserData");
            console.log("ERROR : Could not write data");
            throw error;
        } else {
            console.log("Callback insertUserData");
            console.log("Data written successfully");
        }
    } catch (err) {
        console.error(err);
        alert(err.error_description || err.message);
    } finally {
        console.log("function call ended")
    }
}

//----------------Filtering profile info 
export const getProfileInfo = async(uid_) => {
    try {
        var infoUsers = await readUserData();
        //console.log("infoUsers : ", infoUsers);
        var profileInfo;
        for (var i = 0; i < infoUsers.length; i++) {
            if (infoUsers[i].id === uid_) {
                profileInfo = infoUsers[i];
            }
        }
        return profileInfo;
    } catch (err) {
        console.log(err);
        alert(err.error_description || err.message);
    }
}

//---------OnLoad
/*
export const createLoadObserver = handler => {
    let waiting = 0

    const onload = el => {
        waiting++
        el.addEventListener('load', () => {
            waiting--
            if (waiting === 0) {
                handler()
            }
        })
    }
    return onload
}*/