import React from 'react'
import PropTypes from 'prop-types'
import GetWeather from './GetWeather'
import Forecast from './Forecast'
import getData from '../utils/api'

function GlobalHeader (props) {
    return (
        <div className="global-header">
            <h1>Clever Title</h1>
            <GetWeather updateCity={props.updateCity} search={props.search} />
        </div>
    )
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            pressedSearch: false,
            viewDetails: false
        }
        this.updateCity = this.updateCity.bind(this);
        this.search = this.search.bind(this);
    }

    updateCity(event) {
        console.log('updateState on Home Component is being fired and here is this:', this);
        const value = event.target.value.split(',')[0];
        this.setState(function() {
            return {
                city: value
                }
            })
        }
    search(city){
        const x = getData(city);
        this.setState(function(){
            return {
                pressedSearch: true
            }
        });

        console.log(`this is the response for ${city}:${x}`);
        return x;
    }

    render () {
        let pressedSearch = this.state.pressedSearch;
        const globalHeaderTitle = "React Weather Application"
        const homePageTitle = "Enter City"
        return (
            <div className="main">
                <GetWeather
                    title={globalHeaderTitle}
                    updateCity={this.updateCity}
                    search={this.search}
                />
                { !pressedSearch &&
                <div className="home">
                    <GetWeather
                        title={homePageTitle}
                        updateCity={this.updateCity}
                        search={this.search}
                    />
                </div>
                }
                { pressedSearch &&
                <Forecast forecast={this.getForecast}/>
                }
            </div>
        )
    }
}

export default Home
