const QUOTES_URL = 'https://type.fit/api/quotes'
const quoteContainer = document.querySelector('.quote')
let quotesLength = 1642
let randomIndex = Math.floor(Math.random() * quotesLength)

function fetchQuote() {
    let quote = fetch(QUOTES_URL)
        .then((response) => response.json())
        .then((response) => response[randomIndex])
    return quote
}
const getQuote = async () => {
    const q = await fetchQuote()
    if (q.author === null) {
        q.author = 'Unknown'
        aboutAuthorButton.classList.add('unknown')
    }
    quoteContainer.innerHTML = `
    <p id="quote-text">"${q.text}"</p>
    <br>
    <p id="quote-author">~${q.author}</p>
    <button id="about-author-button">About ${q.author}</button>
    <button id="copy-button">Copy Quote</button>
    <button id="new-quote-button">New Quote</button>
    `
    const aboutAuthorButton = document.querySelector('#about-author-button')
    const copyButton = document.querySelector('#copy-button')
    const newQuoteButton = document.querySelector('#new-quote-button')

    aboutAuthorButton.addEventListener('click', () => window.open(`http://www.wikipedia.org/wiki/${q.author}`))
    copyButton.addEventListener('click', () => {
        quoteContainer.select()
        document.execCommand('copy')
    })

    newQuoteButton.addEventListener('click', () => location.reload())

}
console.log(getQuote()) //If you delete this for some reason it stops working

//TODO: FIX copyButton
//TODO: EXPORT QUOTES INTO A JSON FILE
//TODO: ADD RESPONSIVE DESIGN
//TODO:DEPLOY
