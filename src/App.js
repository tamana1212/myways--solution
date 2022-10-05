import { useState } from 'react';
import './App.css';
import ForecastCard from './ForecastCard';
import weather from './weather.json'
import WeatherDetails from './WeatherDetails';
import cloudy from './images/cloudy.png'
import { MdArrowDropDown } from 'react-icons/md'
import { getImage } from './getImage'


function App() {

  const city = weather.query.results.channel.location.city
  const region = weather.query.results.channel.location.region
  const country = weather.query.results.channel.location.country
  const currTemp = weather.query.results.channel.item.condition.temp
  const weatherDesc = weather.query.results.channel.item.condition.text
  const forecast = weather.query.results.channel.item.forecast
  const date = weather.query.results.channel.item.pubDate


  const getForecast = () => {
    const newForecast = forecast.slice(1, 6)
    return newForecast
  }


  const [viewDetails, setViewDetails] = useState(false)

  const toggleDetails = () => {
    setViewDetails(!viewDetails)
  }

  return (
    <div className="App">
      <div className="weather_card">


        <div className='glass'>
          <h3 className='weather_card_title'>Weather on {date.slice(0, 11)} in&nbsp;
            {city},&nbsp;
            {region},&nbsp;
            {country}
          </h3>

          <div className='weather_main_card'>
            <div>
              <h1 className='weather_card_current_temp'>
                {currTemp}
                &deg;
              </h1>
              <h3 className='weather_card_current_desc'>
                {weatherDesc}
              </h3>
              <h3 className='weather_card_current_sun'>
                {forecast[0].high}&deg;
                &nbsp;- &nbsp;
                {forecast[0].low}&deg;
              </h3>
            </div>
            <div className='weather_side_card'>
              <img src={getImage(weatherDesc)} alt="" />
            </div>
          </div>
        </div>


        <div className="forecast_card_parent">
          {
            getForecast().map((day) => {
              return (
                <div className="forecast_card_div">
                  <ForecastCard
                    date={day.date}
                    day={day.day}
                    high={day.high}
                    low={day.low}
                    text={day.text}
                  />
                </div>
              )
            })
          }
        </div>

        <div className='weather_details_toggle'>
          <h3>More Details</h3>
          <button className='button' onClick={toggleDetails} > <MdArrowDropDown /> </button>
        </div>
        <div className='weather_details_card'>
          <WeatherDetails
            viewDetails={viewDetails}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
