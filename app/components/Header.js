import React from 'react';
import PropTypes from 'prop-types';
import GetWeather from './GetWeather';

const Header = (props) => {
    return (
        <div id="header">
            <GetWeather
                title={props.title}
            />
        </div>
    )
}


export default Header
