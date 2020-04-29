const request = require('request')

const getGeoInfo = (locationName, callback) => {

    const urlEncodedLocationName = encodeURI(locationName)
    const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${urlEncodedLocationName}.json?access_token=pk.eyJ1IjoiYWVrc2Fla2hvdyIsImEiOiJjazlrejVzNWoyMHN1M2ZxdDA0OWc4Y3QxIn0.DPZTbIclVY_hbnR321yDSQ&limit=1`

    request(mapboxUrl, {json: true}, (error, response, body) => {

        if (error) {
            callback('Unable to connect to MapBox service', undefined)
            return;
        }

        if (!body.features || body.features.length === 0) {
            callback(`Unable to find location '${locationName}'`, undefined)
            return;
        }

        callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
        })
    })
}

module.exports = {
    getGeoInfo
}