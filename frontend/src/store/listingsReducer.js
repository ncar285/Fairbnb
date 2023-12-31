import { fetchListings, fetchOneListing} from "../utils/listingApiUtils.js"
// import { receiveBooking } from "./bookingsReducer.js";
import { createSelector } from 'reselect';

// CONSTANTS
export const RECEIVE_LISTING = 'RECEIVE_LISTING'
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const REPLACE_LISTINGS = 'REPLACE_LISTINGS';
export const REMOVE_LISTING  = 'REMOVE_LISTING'
export const RECEIVE_LISTING_MAP_DATA  = 'RECEIVE_LISTING_MAP_DATA'

// ACTION CREATORS
export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  payload: listing
})

// export const receiveListingMapData = listingsData => ({
//   type: RECEIVE_LISTING_MAP_DATA,
//   payload: listingsData,
// });

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  payload: listings
})

export const replaceListings = listings => ({
  type: REPLACE_LISTINGS,
  payload: listings
})

export const removeListing = listingId => ({
  type: REMOVE_LISTING,
  payload: listingId
})


// THUNK ACTION CREATORS
export const getListings = params => async dispatch => {
  const listings = await fetchListings(params)
  return dispatch(replaceListings(listings))
}
  
export const fetchListing = listingId => dispatch => (
  fetchOneListing(listingId)
    .then(data => (
      dispatch(receiveListing(data))
    )
  )
)

export const fetchListingScore = listingId => dispatch => {
  fetchOneListing(listingId)
    .then(data => {
      // const array = data.reviews.map(review=>review.rating)
      // const sum = array.reduce((total, current) => total + current, 0);
      // const rating =  Number((sum/(reviews.length)).toFixed(2))
    }
  )
  

}

// SELECTORS
// export const selectListings = state => Object.values(state.listings);
export const selectListings = createSelector(
  [state => state.listings],
  (listings) => Object.values(listings)
);



export const selectListing = listingId => state => state.listings[listingId] || null;

// export const selectMapData = state => state.listings.mapData;

// export const getListingRevews = listingId => state.rev

// REDUCER
const listingsReducer = (state = {}, action) => {
  const nextState = { ...state }
  switch (action.type) {
    case RECEIVE_LISTING:
      nextState[action.payload.id] = action.payload
      return nextState
    case RECEIVE_LISTINGS:
      return Object.assign(nextState, action.payload)
    case REPLACE_LISTINGS:
      return Object.assign(action.payload)
    case REMOVE_LISTING:
      delete nextState[action.payload]
      return nextState
    // case RECEIVE_LISTING_MAP_DATA:
    //   return {...nextState, mapData: action.payload}
    default:
      return state
  }
}

export default listingsReducer;
