import React from 'react'
import PropTypes from 'prop-types'
import getData from '../utils/api'
import GetWeather from './GetWeather'


class Forecast extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        const x = this.props.forecast;
        // const data = x.call().then((response) => {
        //     return response;
        // });
        console.log(x);
        return (
            <div className="forecast">
                <h1>Blahblahblahlbhal</h1>
            </div>
        )
    }
}

Forecast.PropTypes = {
    forecast : PropTypes.func.isRequired
}

export default Forecast
