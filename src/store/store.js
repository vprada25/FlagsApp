import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { initialState } from './state'


export const store = createStore(rootReducer, initialState)


