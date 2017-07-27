import React from 'react'
const example = 'api.openweathermap.org/data/2.5/forecast?id={city ID}';
const key = '453c4c0ba41ab377f80c13179f3406cc';
const axios = require('axios');
//how do i export a function? Uncaught TypeError: (0 , _api2.default) is not a function when exporting as  export { getData } and defining const getData  = (city) => {
 function getData (city) {
    console.log('api is firing');
    return axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city}us&APPID=${key}`)
    .then(function(resp){
        const data = resp.data.list;
        const forecast =[];
        const timeOfRequest = new Date;
        if (timeOfRequest.getHours() < 8 ) {
            // if request is between 8 and 6AM, get data for 9hrs later
            for (var i = 2; i < data.length; i += 8) {
                forecast.push(data[i]);
            }
        }
        if (timeOfRequest.getHours() > 9 && timeOfRequest.getHours() <= 17){
            // if request is between 9AM and 5PM, get data for right now
            for (var i = 0; i < data.length; i += 8){
                forecast.push(data[i]);
            }
        }
        if (timeOfRequest.getHours() > 17) {
            // if request is after 6PM, get data for next day @ 9 AM
            for (var i = 5; i < data.length; i += 8) {
                forecast.push(data[i]);
            }
        }
        return forecast;
    })
    .catch(function(r){
        console.warn(r);
    })
}

module.exports = getData;
