export default function rootReducer(state, action) {
    console.log(action)
    switch (action.type) {
        case 'SET_COUNTRY_LIST': {
            return { ...state, countryList: action.payload }
        }
        case 'SET_COUNTRY_BY_NAME': {
            let data 
            if (state.filterByRegion !== '') {
                data = state.coutryFilteredByRegion
            } else {
                data = state.countryList
            }
            const countryListByName = data.filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase()))
            return { ...state, countryListByName }
        }


        case 'FILTER_BY_REGION': {
            const { regionSelected } = action.payload;

            if (regionSelected === '') {
                return { ...state, coutryFilteredByRegion: [], filterByRegion: '', };
            }

            const coutryFilteredByRegion = state.countryList.filter((country) => country.region === regionSelected);

            return { ...state, coutryFilteredByRegion, filterByRegion: regionSelected }
        }
        default: {
            return state
        }
    }

}