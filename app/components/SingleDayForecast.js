import React from 'react'
import PropTypes from 'prop-types'


const SingleDayForecast = (props) => {
    const min_temp = ((props.data.main.temp_min - 273.15) * 1.8) + 32;
    const max_temp = ((props.data.main.temp_min - 273.15) * 1.8) + 32;
    console.log();
    return (
        <div className="forecast-of-day">
            <img className='detail-image' src={require(`../images/weather-icons/${props.data.weather[0].icon}.svg`)} alt=""/>
            <h3 className="detail-date">{new Date(props.data.dt_txt).toUTCString().substr(0,11)}</h3>
            <h4 className="detail-city">{`${props.city.charAt(0).toUpperCase()}${props.city.substr(1).toLowerCase()}`}</h4>
            <h4>{props.data.weather[0].description}</h4>
            <h4>{`min temp: ${Math.round(min_temp)}`}</h4>
            <h4>{`max temp: ${Math.round(max_temp)}`}</h4>
            <h4>{`humidity: ${props.data.main.humidity}`}</h4>
        </div>
    )
}

SingleDayForecast.propTypes = {


}

export default SingleDayForecast
