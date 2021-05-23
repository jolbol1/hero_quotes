//Set the refresh button to a variable.
let refreshButton = document.getElementById('new-wisdom');
let wisdomBlock = document.getElementById('wisdom-block');

//Get Random Number between 0 and number given in parameter (-1)
const getRandNum = number => Math.floor(Math.random() * number);
//Capatalise the first letter of the given string. This allows us to use the key and look nice.
const capatalise = word => word.charAt(0).toUpperCase() + word.slice(1);
// Set up an object where each key is a charachter and each value and array of  5 of their quotes
const quotes = {
    thor: ['I went for the head', 'We’re the same, you and I. Just a couple of hot-headed fools', 'Do I look to be in a gaming mood?', 'So, Earth has wizards now, huh?', 'Bring me Thanos!'],
    spiderman: ['Your friendly neighborhood Spider-Man!', 'Who am I? I\'m Spider-Man!', "I will never forget these words: 'With great power, comes great responsibility.'", 'What we believe we know may not be the truth.', 'You have a metal arm? Dude, that is so awesome!'],
    ironman: ['I am Iron Man.', 'Genius, billionaire, playboy, philanthropist.', 'We have a Hulk.', 'Sometimes you gotta run before you can walk.', 'Doth mother know you weareth her drapes.'],
    getRandomHeroQuote(hero) {
        let herosQuotes = this[hero];
        let quoteIndex = getRandNum(herosQuotes.length);
        return herosQuotes[quoteIndex]
    },
    getRandomQuotes() {
        let randomHeroQuotes = {};
        for(let hero in this) {
            if(typeof this[hero] === 'function') {
                continue;
            }
            console.log(hero);
            randomHeroQuotes[hero] = this.getRandomHeroQuote(hero);
        }
        return randomHeroQuotes;
    }

}

//This function generates the Div's required to display the quotes in HTML format. I did it this way as it can be easily expanded by just adding more heros to the object.
function displayQuotes() {
    let selectedQuotes = quotes.getRandomQuotes();
    for(let hero in selectedQuotes) {
        // Create the block for the quote and hero name
        const heroDiv = document.createElement("div");
        heroDiv.setAttribute("class", "hero-block");
        heroDiv.setAttribute("id", hero);
        // Create the block for the hero name
        const heroNameDiv = document.createElement("div");
        const nameText = document.createTextNode(hero);
        heroNameDiv.appendChild(nameText);
        heroNameDiv.setAttribute("class", "hero-name");
        // Create the block for the hero quote
        const heroQuoteDiv = document.createElement("div");
        const quoteText = document.createTextNode(selectedQuotes[hero]);
        heroQuoteDiv.appendChild(quoteText);
        heroQuoteDiv.setAttribute("class", "hero-quote");

        // Return the hero div for each hero
        heroDiv.appendChild(heroNameDiv);
        heroDiv.appendChild(heroQuoteDiv);
        wisdomBlock.appendChild(heroDiv);
    }
}
// Add the event listener for on click of the quotes.
refreshButton.onclick = function() {
    wisdomBlock.innerHTML = '';
    displayQuotes;

}
// Make sure there is wi
displayQuotes();
console.log(quotes.getRandomHeroQuote('thor'))
console.log(quotes.getRandomQuotes());
console.log(quotes.length)



