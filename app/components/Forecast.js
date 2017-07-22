import React from 'react'
import PropTypes from 'prop-types'
import getData from '../utils/api'

class Forecast extends React.Component {
    constructor(props){
        super(props);
        var x = this.props.forecast;

    }
    render(){
        console.log(forecast);
        return(
            <div className="forecast">
                <ul className="forecast">

                    <li className="day"></li>
                </ul>
            </div>
        )
    }
}

Forecast.PropTypes = {
    forecast : PropTypes.object.isRequired
}

export default Forecast
