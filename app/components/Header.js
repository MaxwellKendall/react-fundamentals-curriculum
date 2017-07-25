import React from 'react';
import PropTypes from 'prop-types';
import GetWeather from './GetWeather';

const Header = (props) => {
    return (
        <div id="header">
            <GetWeather
                title={props.title}
                id='header-city-search'
            />
        </div>
    )
}


export default Header
