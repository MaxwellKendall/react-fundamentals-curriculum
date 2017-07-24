import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Forecast from './Forecast'
import getData from '../utils/api'

class GetWeather extends React.Component {

    getCity(){
        let city = document.getElementsByClassName('search-for-city')[0];
        let cityForecast = getData(city.value).then((resp) => {
            return resp;
        });
        console.log(cityForecast);


    }
    render () {
        return (
            <Router>
                <div className='getWeather'>
                    <h1 className="title">{this.props.title}</h1>
                        <input className="search-for-city"
                            type="text"
                            placeholder="Charleston, SC"
                            />
                        <button onClick={this.getCity}className="btn">
                            <Link to="/forecast">Get Weather</Link>
                        </button>
                </div>
            </Router>
        )
    }
}

GetWeather.PropTypes = {
    title      : PropTypes.string
}

GetWeather.DefaultProps = {
    title: "React Weather Application"
}


export default GetWeather
