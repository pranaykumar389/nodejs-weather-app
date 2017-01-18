'use strict';
const request = require('request');

var getWeather = (latitude, longitude, callback) => {

    request({
        url: `https://api.darksky.net/forecast/ebed339c78b84ec91570c53f9eebafbd/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }else{
            callback('Unable to fetch Weather');
        }
    });
};

module.exports = getWeather;