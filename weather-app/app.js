const yargs = require('yargs')
const chalk = require('chalk')
const weatherService = require('./utils/weatherService')
const geoService = require('./utils/geoService')

yargs.command('weatherInfo [location]', 'Get the weather information based on location name',
        yargs => {

    yargs.positional('location', {
        describe: 'Location name to be searched',
        demandOption: true,
        type: 'string'
    })
}, argv => {

    geoService.getGeoInfo(argv.location, (error, geoData) => {

        if (error) {
            console.log(chalk.red.inverse(error))
            return
        }

        weatherService.getWeatherInfo(geoData, (error, weatherData) => {

            if (error) {
                console.log(chalk.red.inverse(error))
                return
            }

            console.log(geoData.location)
            console.log(weatherData)
        })
    })
})

yargs.parse()
