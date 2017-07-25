import React from 'react'
import PropTypes from 'prop-types'
import GetWeather from './GetWeather'
import Forecast from './Forecast'
import getData from '../utils/api'

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.pathname);

}

    render () {
        const homePageTitle = "Enter City";
        return (
                <div className="home-page">
                    <GetWeather
                        title={homePageTitle}
                        id='home-city-search'
                    />
                </div>
        )
    }
}

export default Home
