const QUOTES_URL = 'https://type.fit/api/quotes'
const quoteContainer = document.querySelector('.quote')
let quotesLength = 1642
let randomIndex = Math.floor(Math.random() * quotesLength)
let response = fetch(QUOTES_URL)
    .then((response) => response.json())
    .then((response) => console.log(response[randomIndex]))
    .then((response) => quoteContainer.innerHTML = `
    <p>${response[0].text}</p>
    `)
    //TODO: PUT QUOTES ON PAGE
    //TODO: ADD RANDOM QUOTE BUTTON
    //TODO: REFACTOR INTO getQuote() FUNCTION (separate file)
    //TODO: EXPORT QUOTES INTO A JSON FILE
    //TODO: ADD RESPONSIVE DESIGN
    //AND MORE
