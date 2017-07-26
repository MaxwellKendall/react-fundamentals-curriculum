import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Forecast from './Forecast'
import getData from '../utils/api'

class GetWeather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city : ''
        }
    this.updateCity = this.updateCity.bind(this);
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
        return (
                <div className='getWeather'>
                    <h1 className="title">{this.props.title}</h1>
                        <input className="search-for-city"
                            type="text"
                            placeholder="Charleston, SC"
                            id={this.props.id}
                            onChange = {this.updateCity}
                            />
                        <Link className='btn' to={`/forecast/${this.state.city}`}>Get Weather</Link>
                </div>
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
