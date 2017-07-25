//TODO : get the city from the URL and make the getData call to expose the array to the scope
// TODO : map over each element in the array generating a grid of nice looking forecast icons and descriptions etc

import React from 'react'
import PropTypes from 'prop-types'
import getData from '../utils/api'
import GetWeather from './GetWeather'
import queryString from 'query-string'


class Forecast extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.location.pathname);
        this.state = {
            Loading : true
        }


    }
    componentWillMount(){
        let x = this.props.location.pathname.substr(10);
        let cityForecast = getData(x).then((resp) => {
            return resp;
        });
        console.log('this is x', x);
    };

    render(){

        return (
            <div className="forecast">
                <h1>This is the Forecast Page</h1>
            </div>
        )
    }
}

Forecast.PropTypes = {
    forecast : PropTypes.func.isRequired
}

export default Forecast
