const quotes = [
      ["Be yourself; everyone else is already taken.",
          "Oscar Wilde"],
      ["Be the change that you wish to see in the world.",
          "Mahatma Gandhi"],
      ["Live as if you were to die tomorrow. Learn as if you were to live forever.",
          "Mahatma Gandhi"],
      ["Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
          "Dr. Martin Luther King Jr."],
      ["Without music, life would be a mistake.",
          "Friedrich Nietzshe"],
      ["Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
          "Marilyn Monroe"],
      ["There is only two ways to live your life. One is as though nothing is a miracle. THe other is as though everything is a miracle.",
          "Albert Einstein"],
      ["We are all in the gutter, but some of us are looking at the stars.",
          "Oscar Wilde"],
      ["I have not failed. I've just found 10,000 ways that won't work.",
          "Thomas A. Edison"],
      ["You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
          "Dr. Seuss"]
  ];

// Grab elements on page
let quoteOutput = document.getElementById('quote-output');
let quoteAuthorOutput = document.getElementById('quote-author-output');

let btnPreviousQuote = document.getElementById('button-previous-quote');
let btnRandomQuote = document.getElementById('button-random-quote');
let btnNextQuote = document.getElementById('button-next-quote');


let currentQuoteIndex = 0;

function getPreviousQuote() {
      let previousQuoteIndex;
      if (currentQuoteIndex == 0) {
            previousQuoteIndex = quotes.length - 1;
      } else {
            previousQuoteIndex = currentQuoteIndex - 1;
      };

      quoteOutput.innerHTML = quotes[previousQuoteIndex][0];
      quoteAuthorOutput.innerHTML = quotes[previousQuoteIndex][1];

      currentQuoteIndex = previousQuoteIndex;
}

function getRandomQuote() {
      let randomQuoteIndex;
      do {
            randomQuoteIndex = Math.floor(Math.random() * (quotes.length - 1))
      } while (randomQuoteIndex == currentQuoteIndex);

      console.log(randomQuoteIndex);

      quoteOutput.innerHTML = quotes[randomQuoteIndex][0];
      quoteAuthorOutput.innerHTML = quotes[randomQuoteIndex][1];

      currentQuoteIndex = randomQuoteIndex;
}

function getNextQuote() {
      console.log('getNextQuote called')
      let nextQuoteIndex;
      if (currentQuoteIndex == quotes.length - 1) {
            nextQuoteIndex = 0
            console.log('here')
      } else {
            nextQuoteIndex = currentQuoteIndex + 1;
      };

      console.log(nextQuoteIndex);

      quoteOutput.innerHTML = quotes[nextQuoteIndex][0];
      quoteAuthorOutput.innerHTML = quotes[nextQuoteIndex][1];

      currentQuoteIndex = nextQuoteIndex;
}

btnPreviousQuote.addEventListener('click', getPreviousQuote);
btnRandomQuote.addEventListener('click', getRandomQuote);
btnNextQuote.addEventListener('click', getNextQuote);