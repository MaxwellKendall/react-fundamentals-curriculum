import React from 'react'
import PropTypes from 'prop-types'
import getData from '../utils/api'
import Loading from './Loading'
import SingleDayForecast from './SingleDayForecast'

class Details extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }

    }
    componentDidMount(){
        const city = this.props.match.params.city;
        const id = this.props.match.params.id;
        let cityForecast = getData(city);
        let test = cityForecast.then((resp) => {
            this.setState(function(){
                return {
                    data: resp[id]
                }
            })
        });

    }
    render(){
        const city = this.props.match.params.city;
        const data = this.state.data;
        return (
            <div>
            {this.state.data != null &&
                <div className="details-page">
                <SingleDayForecast
                    city={city}
                    data={this.state.data}
                />
                </div>
            }
            {this.state.data === null &&
                <Loading text="Just a Sec" speed="450"/>
            }
            </div>
        )
    }
}

export default Details
