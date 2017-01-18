'use strict';

const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'Address',
            describe: 'Address to fetch Weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedString = encodeURIComponent(argv.a);

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=13085%20Morris%20Road%20Alpharetta',
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
