'use strict';

const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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
        console.log(JSON.stringify(results, undefined, 2));
    }
});