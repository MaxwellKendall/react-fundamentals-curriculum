import React from 'react'
import PropTypes from 'prop-types'
import getData from '../utils/api'
import GetWeather from './GetWeather'
import queryString from 'query-string'
import Loading from './Loading'
import FiveDayForecast from './FiveDayForecast'

class Forecast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            city: null
        }
        const city = this.props.match.params.city; //getting value from router props.match.params.city
    }
    componentDidMount(){
        const city = this.props.match.params.city; //
        let cityForecast = getData(city);
        let test = cityForecast.then((resp) => {
            this.setState(function(){
                return {
                    data: resp,
                    city: city
                }
            })
        });
    };

    render() {
        const forecast = this.state.data;
        console.log(forecast);
        return (
            <div>
                {this.state.data != null
                    ?
                    <div className="forecast">
                        <h1 className="forecast-city-title">{`${this.state.city.charAt(0).toUpperCase()}${this.state.city.substr(1).toLowerCase()}`}</h1>
                        <FiveDayForecast
                            forecast={forecast}
                            city={this.state.city}
                        />
                    </div>
                    :
                    <Loading text="Just a Sec" speed="450"/>
                }
            </div>
        )
    }
}

Forecast.PropTypes = {
    forecast : PropTypes.func.isRequired
}

export default Forecast
