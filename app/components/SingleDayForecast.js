import React from 'react'
import PropTypes from 'prop-types'


const SingleDayForecast = (props) => {
    console.log(props.data);
    return (
        <div className="forecast-of-day">
            <img className='detail-image' src={require(`../images/weather-icons/${props.data.weather[0].icon}.svg`)} alt=""/>
            <h3 className="detail-date">{new Date(props.data.dt).toUTCString().substr(0,11)}</h3>
            <h4 className="detail-city">{props.city}</h4>
            <h4>{props.data.weather[0].description}</h4>
            <h4>{`min temp: ${props.data.main.temp_min}`}</h4>
            <h4>{`max temp: ${props.data.main.temp_max}`}</h4>
            <h4>{`humidity: ${props.data.main.humidity}`}</h4>
        </div>
    )
}

SingleDayForecast.propTypes = {


}

export default SingleDayForecast
