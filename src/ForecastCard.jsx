import React from 'react'
import { getImage } from './getImage'

const ForecastCard = ({ date, day, high, low, text }) => {

    return (
        <div className='forecast_card'>
            <h3>
                {date.slice(0, 6)}
            </h3>
            <br />
            <img className='forecast_image' src={getImage(text)} alt="" />
            <br />
            <p>
                {high}&deg; - {low}&deg;
            </p>
            <br />
            {text} <br />
        </div>
    )
}

export default ForecastCard