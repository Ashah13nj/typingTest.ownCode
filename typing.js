const random_quote_api = 'http://api.quotable.io/random'
const quoteDisplayEl = document.getElementById('quoteWords')

function getQuote() {
    return fetch(random_quote_api)
        .then(response => response.json())
        .then(data => data.content)
}

async function getNewQuote () {
    const quote = await getQuote()
    quoteDisplayEl.innerText = quote
}