const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const location = encodeURI(search.value)

    messageOne.textContent = messageTwo.textContent = ''

    fetch('/weather?address=' + location)
        .then(res => {

            res.json().then(body => {

                if (body.error) {
                    messageOne.textContent = body.error;
                    return
                }
                messageOne.textContent = body.location
                messageTwo.textContent = body.forecast
            })
        })
        .catch(error => {
            console.log(error)
        })
})

