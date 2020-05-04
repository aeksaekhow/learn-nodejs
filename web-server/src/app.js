const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geoService = require('./utils/geoService')
const weatherService = require('./utils/weatherService')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsDirectoryPath = path.join(__dirname, '../templates/views')
const partialsDirectoryPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsDirectoryPath)
hbs.registerPartials(partialsDirectoryPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Aek Sae-khow'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Aek Sase-khow'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Aek Sae-khow'
    })
})

app.get('/weather', (req, res) => {

    const address = req.query.address
    if (!address) {
        return res.send({
            error: 'Address is empty.'
        })
    }

    geoService.getGeoInfo(address, (error, geoData) => {

        if (error) {
            return res.send({
                error
            })
        }

        weatherService.getWeatherInfo(geoData, (error, weatherData) => {

            if (error) {
                return res.send({
                    error
                })
            }

            return res.send({
                forecast: weatherData,
                location: geoData.location,
                address
            })
        })
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: 'Error',
        name: 'Aek Sae-khow',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title: 'Error',
        name: 'Aek Sae-khow',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Web server is up on port ' + port)
})