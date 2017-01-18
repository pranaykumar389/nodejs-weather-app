'use strict';

const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch Weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode(argv.address, (error, results) => {
    if(error) {
        console.error(error);
    }else {
        console.log(results.address);
        weather(results.latitude, results.longitude, (error, weatherResults) => {
            if(error) {
                console.log(error);
            }else {
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});