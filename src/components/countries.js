import React from 'react'
import { Card } from 'antd';

import '../scss/countries.scss'

const { Meta } = Card;



function countries({
    flag,
    name,
    population,
    region,
    capital,
    nativeName,
    cioc,
    alha2code
}) {
    return (
        <div className="Container">
            <Card className="Container__Card"
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={flag} />}
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

export default countries
