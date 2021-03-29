import React, { useEffect, useState, lazy, Suspense } from 'react'

import Countries from '../components/countries'

import '../scss/countries-list.scss'

const Country = lazy(() => import('../components/countries.js'));


function CountriesList() {
    const [CountryList, setCountriesList] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setCountriesList(data)
                console.log(data)
            })
            .catch(() => {
                console.log('un error carechimba')
            })
    })
    return (
        <div className="Container">
            {
                CountryList.map(({ name, flag, population, capital, region, nativeName, cioc, alpha2Code }) => {
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