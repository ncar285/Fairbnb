
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import uiReducer from './uiReducer';
// import {createStore, combineReducers, applyMiddleWare} from ''

export const rootReducer = combineReducers({ ui: uiReducer})


export default function configureStore(preloadedState={}){
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk))
}

// const configureStore = (initialState = {}) => (
//     createStore(rootReducer, initialState)
// )

// export default configureStore