import React from 'react'
import PropTypes from 'prop-types'
import getData from '../utils/api'
import GetWeather from './GetWeather'
import queryString from 'query-string'
import Loading from './Loading'
import { Link } from 'react-router-dom';


const FiveDayForecast = (props) => {
    const city = props.city;
    console.log('fiveday forecast', city);
    return (
        <ul className="list-of-days">
            {props.forecast.map(( day, index ) => {
                return (
                    <li className="day-container" key={index}>
                        <Link to={`/details/${city}/${index}`}>
                            <img src={require(`../images/weather-icons/${day.weather[0].icon}.svg`)} alt=""/>
                        </Link>
                        <div className="day">{new Date(day.dt_txt).toUTCString().substr(0,11)}</div>
                    </li>
                )
            })}
        </ul>
    )
}

FiveDayForecast.propTypes = {
    city: PropTypes.string.isRequired,
    forecast : PropTypes.array.isRequired

}

export default FiveDayForecast
