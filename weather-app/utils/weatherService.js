const request = require('request')

const getWeatherInfo = ({latitude, longitude}, callback) => {

    const weatherStackUrl = `http://api.weatherstack.com/current?access_key=df6c29a7623ceab17cc7a867664d595e&query=${latitude},${longitude}&units=m`
    request(weatherStackUrl, {json:true}, (error, response, body) => {

        if (error) {
            callback('Unable to connect to WeatherStack service', undefined)
            return;
        }

        callback(undefined, 'The weather is ' + body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
    })

}

module.exports = {
    getWeatherInfo
}