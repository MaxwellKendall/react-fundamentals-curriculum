import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Forecast from './Forecast'
import getData from '../utils/api'

class GetWeather extends React.Component {
    constructor(props){
        super(props);
        this.getCity = this.getCity.bind(this);
        this.state = {
            city : ''
        }
    this.getCity = this.getCity.bind(this);
    this.updateCity = this.updateCity.bind(this);
    }
    getCity(){
        let id = this.props.id;
        let city = document.getElementById(id).value;
        let cityForecast = getData(city).then((resp) => {
            return resp;
        });
        return cityForecast;
    }

    updateCity(event){
        let city = event.target.value;
        this.setState(() => {
            return {
                city : city
            }
        })
    }
    render () {
        const id = this.props.id;
        const city = document.getElementById(id);
        console.log(city);
        return (
            <Router>
                <div className='getWeather'>
                    <h1 className="title">{this.props.title}</h1>
                        <input className="search-for-city"
                            type="text"
                            placeholder="Charleston, SC"
                            id={this.props.id}
                            onChange = {this.updateCity}
                            />
                        <button onClick={this.getCity}className="btn">
                            <Link to={{
                                    pathname:`/forecast/${this.state.city}`
                                }}>
                                Get Weather
                            </Link>
                        </button>
                </div>
            </Router>
        )
    }
}

GetWeather.PropTypes = {
    title      : PropTypes.string,
    id         : PropTypes.string.isRequired
}

GetWeather.DefaultProps = {
    title: "React Weather Application"
}


export default GetWeather
