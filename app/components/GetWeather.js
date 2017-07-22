import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Forecast from './Forecast'

class GetWeather extends React.Component {
    render () {
        return (
            <Router>
                <div className='getWeather'>
                    <h1 className="title">{this.props.title}</h1>
                    <input className="search-for-city"
                        type="text"
                        placeholder="Charleston, SC"
                        onChange={this.props.updateCity}
                        />
                    <button className="btn"
                            onClick= {this.props.search}>
                        <Link to={`/results/`}>Search</Link>
                    </button>
                    <Route path="/results" component={Forecast}/>
                </div>
            </Router>
        )
    }
}

GetWeather.PropTypes = {
    updateCity : PropTypes.func.isRequired,
    search     : PropTypes.func.isRequired,
    title      : PropTypes.string.isRequired
}


export default GetWeather
