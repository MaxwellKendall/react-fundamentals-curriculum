import React from 'react'
const example = 'api.openweathermap.org/data/2.5/forecast?id={city ID}';
const key = '453c4c0ba41ab377f80c13179f3406cc';
const axios = require('axios');
//how do i export a function? Uncaught TypeError: (0 , _api2.default) is not a function when exporting as  export { getData } and defining const getData  = (city) => {
 function getData (city) {
    console.log('api is firing');
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}us&APPID=${key}`)
    .then(function(resp){
        var data = resp.data.list;
        var forecast =[];
        for (var i = 4; i <= data.length; i += 8){
            forecast.push(data[i]);
        }
        console.log(forecast);
        return forecast;
    })
    .catch(function(r){
        console.warn(r);
    })
}

module.exports = getData;
