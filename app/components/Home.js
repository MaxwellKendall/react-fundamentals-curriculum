import React from 'react'
import PropTypes from 'prop-types'
import GetWeather from './GetWeather'
import Forecast from './Forecast'
import getData from '../utils/api'

class Home extends React.Component {
    constructor(props) {
        super(props);
}

    render () {
        const homePageTitle = "Enter City";
        return (
                <div className="home-page">
                    <GetWeather
                        title={homePageTitle}
                    />
                </div>
        )
    }
}

export default Home
