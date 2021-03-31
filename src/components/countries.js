import React from 'react'
import { Card } from 'antd';
import {
    useHistory,
} from 'react-router-dom'

import '../scss/countries.scss'

const { Meta } = Card;



function Countries({
    flag,
    name,
    population,
    region,
    capital,
    nativeName,
    cioc,
    alha2code
}) {

    const history = useHistory()

    function handleClick() {
        
        // const id = cioc || name
        history.push('/country')
    }

    return (
        <div className="Container">
            <Card className="Container__Card"
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={flag} />}
                onClick={handleClick}
            >
                <div className="Container__Card--details">
                    <Meta title={name}

                    />
                    <Meta
                        description={"Population: " + population}
                    />
                    <Meta
                        description={"Region: " + region}
                    />
                    <Meta
                        description={"Capital: " + capital}
                    />

                </div>

            </Card>
        </div>
    )
}

export default Countries
