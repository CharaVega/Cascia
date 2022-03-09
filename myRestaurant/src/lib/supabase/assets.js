import supabase from '$lib/db'


export async function readTableData() {
    const { data, error } = await supabase
        .from(`Tables`)
        .select()
    if (error) throw new Error(error.message)
    return data
}

export async function readReservationData() {
    const { data, error } = await supabase
        .from(`Reservations`)
        .select()
    if (error) throw new Error(error.message)
    return data
}


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

export async function checkAvailability(time, date, nPeople) {
    const infoState = await readReservationData();
    const infoTables = await readTableData();
    var othRes = infoState.filter(function(value, index, arr) {
        return value.date === date && value.time === time
    })
    var possibleTables = infoTables.filter(function(value, index, arr) {
        if (value.maxPeople >= nPeople && value.minPeople <= nPeople) {
            for (var j = 0; j < othRes.length; j++) {
                if (value.id !== othRes[j].table) {
                    return value;
                }
            }
        }
    })
    if (possibleTables) {
        for (var i = 0; i < possibleTables.length; i++) console.log(possibleTables[i].id);
        return possibleTables;
    } else {
        console.log("nope");
        return false;
    }
}