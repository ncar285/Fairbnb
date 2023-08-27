import csrfFetch from "../store/csrf"

// create a booking
export const postBooking = async booking => {
    debugger
    const res = await csrfFetch('/api/bookings', {
        method: 'POST',
        body: JSON.stringify({booking})
    })
    // return await res.json()
    return res
    // if(res.ok){

    // }
}

// update a booking
export const patchBooking = async bookingBata => {
    const res = await csrfFetch(`/api/bookings/${bookingBata.id}`, {
        method: 'PATCH',
        body: JSON.stringify(bookingBata)
    })
    return await res.json()
}

// delete booking
export const destroyBooking = async bookingId => {
    debugger
    await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
    })
}