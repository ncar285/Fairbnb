import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import uiReducer from './uiReducer';
import sessionsReducer from './sessionsReducer';
import listingsReducer from './listingsReducer';
import reviewsReducer from './reviewsReducer';
import usersReducer from './usersReducer';
import bookingsReducer from './bookingsReducer';
import { errorsReducer } from './errorsReducer';
import mapReducer from './mapReducer';

// // ! unnstall this before re-hosting
// import { createLogger } from 'redux-logger';


export const rootReducer = combineReducers({ 
    ui: uiReducer,
    session: sessionsReducer,
    listings: listingsReducer,
    mapData: mapReducer,
    reviews: reviewsReducer,
    userData: usersReducer,
    bookings: bookingsReducer,
    errors: errorsReducer
})

// // ! delete this
// const logger = createLogger();

export default function configureStore(preloadedState={}){
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk))
}
