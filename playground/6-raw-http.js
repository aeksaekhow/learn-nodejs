const http = require('http')

const request = http.request('http://api.weatherstack.com/current?access_key=df6c29a7623ceab17cc7a867664d595e&query=13.75,100.51667&units=m', response => {

    let data = ''

    response.on('data', chunk => {

        data += chunk.toString()
    })

    response.on('end', () => {
        console.log(data)
    })
})

request.on('error', error => {
    console.log('An error', error)
})

request.end()