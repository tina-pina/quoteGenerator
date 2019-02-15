/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  array of quote objects 
***/

let quotes = [{
    quote: "lovers like to tease each other",
    source: "S. Mimura",
    year: 2017,
    citation: "PONS.com"
  },
  {
    quote: "A TRUE boyfriend is someone that will take care of his girlfriend, stand up for her when needed and love her for who she is and not pretend to care about her!",
    source: "Nishan Panwar"
  },
  {
    quote: "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
    source: "Sam Keen"
  },
  {
    quote: "If you fight like a married couple, talk like bestfriends, flirt like first lovers, protect each other like siblings, you're meant to be.",
    source: "Tyga"
  },
  {
    quote: "Someone who really loves you sees what a mess you can be, how moody you can get, how hard you are to handle, but still wants you.",
    source: "unknown"
  },

]

/***
  takes the quotes from above and generates a random quote
***/

function getRandomQuote(quotes) {
  let allQuotesNum = quotes.length;

  let randomNum = Math.floor(Math.random() * (allQuotesNum));
  return quotes[randomNum];
}


/***
  each time we call this function it prints a formated quote
***/

function printQuote() {

  let randomQuote = getRandomQuote(quotes);

  let quoteHTML = "";
  quoteHTML += `<p class="quote">${randomQuote.quote}</p>`
  quoteHTML += '<p class="source">'
  if (randomQuote.source) quoteHTML += randomQuote.source;
  if (randomQuote.citation) quoteHTML += `<span class="citation"> ${randomQuote.citation} </span>`
  if (randomQuote.year) quoteHTML += `<span class="year"> ${randomQuote.year} </span>`
  quoteHTML += '</p>'

  document.getElementById("quote-box").innerHTML = quoteHTML;

}


/***
  each time we click the event listener we show another random quote
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);