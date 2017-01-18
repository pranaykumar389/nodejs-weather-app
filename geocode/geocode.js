'use strict';
const request = require('request');

var geocodeAddress = (address, callback) => {

    var encodedStringAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedStringAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google Servers');
        }else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find the Address');
        }else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports = geocodeAddress;