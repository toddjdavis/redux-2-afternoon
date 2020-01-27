import budgetReducer from './budgetReducer'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'

const rootReducers = combineReducers({budget: budgetReducer, user: userReducer})

export default createStore(rootReducers, applyMiddleware(promiseMiddleware))