import React, { useEffect } from 'react'
import Countries from '../components/countries'
import { useSelector, useDispatch } from 'react-redux'

import '../scss/countries-list.scss'



function CountriesList() {
    const dispatch = useDispatch();

    const countryListByName = useSelector((state) => state.countryListByName)

    const countryList = useSelector((state) => {
        if (state.filterByRegion !== '' && countryListByName.length === 0) {
            return state.countryFilteredByRegion;
        }
        if (countryListByName.length > 0) {
            return countryListByName
        }

        return state.countryList;
    })

    console.log('el estado es: ', countryList)
    
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                dispatch(
                    {
                        type: 'SET_COUNTRY_LIST',
                        payload: data

                    }
                )
                console.log(data)

            })
            .catch(() => {
                console.log('un error carechimba')
            })
    })
    return (
        <div className="Container">


            {
                countryList.map(({ name, flag, population, capital, region, nativeName, cioc, alpha2Code }) => {
                    return (
                        <Countries
                            flag={flag}
                            name={name}
                            key={name}
                            population={population}
                            region={region}
                            capital={capital}
                            nativeName={nativeName}
                            cioc={cioc}
                            alpha2Code={alpha2Code}
                        />
                    )
                })
            }
        </div>
    )






}


export default CountriesList;