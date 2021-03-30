import { createStore } from 'redux'
import rootReducer from './rootReducer'

const initialState = {
    countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',
}

export const store = createStore(rootReducer, initialState)


