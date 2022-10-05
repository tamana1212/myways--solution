import React from 'react'
import weather from './weather.json'
import { FiSunrise } from "react-icons/fi"
import { FiSunset } from "react-icons/fi"

const WeatherDetails = ({ viewDetails }) => {

    const windSpeed = weather.query.results.channel.wind.speed
    const humidity = weather.query.results.channel.atmosphere.humidity
    const pressure = weather.query.results.channel.atmosphere.pressure
    const sunrise = weather.query.results.channel.astronomy.sunrise
    const sunset = weather.query.results.channel.astronomy.sunset

    if (viewDetails) {
        return (
            <div className='weather_details glass'>
                <div className='extra_details'>
                    Wind Speed : {windSpeed}m/s
                    <br />
                    Humidity : {humidity}%
                    <br />
                    Pressure : {pressure}mb
                    <br />
                </div>
                <div className='sunDetails'>
                    <div className="sun"></div>
                    <div
                        className='sun_times'>
                        <h4 className='sunrise'> <FiSunrise /> {sunrise.slice(0, 5)}</h4>
                        <h4 className='sunset'> <FiSunset /> {sunset.slice(0, 5)}</h4>
                    </div>
                </div>
            </div>
        )
    }

}

export default WeatherDetails