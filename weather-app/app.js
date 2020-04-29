const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=df6c29a7623ceab17cc7a867664d595e&query=13.7958401,100.5562831&units=m'

request(url, { json: true }, (error, response, body) => {

    console.log(body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
})