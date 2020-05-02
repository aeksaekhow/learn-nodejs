const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const addressText = document.querySelector('#addressText')
const locationText = document.querySelector('#locationText')
const forecastText = document.querySelector('#forecastText')

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const location = encodeURI(search.value)

    fetch('/weather?address=' + location)
        .then(res => {

            res.json().then(body => {
                addressText.innerHTML = body.address
                locationText.innerHTML = body.location
                forecastText.innerHTML = body.forecast
            })
        })
        .catch(error => {
            console.log(error)
        })
})

