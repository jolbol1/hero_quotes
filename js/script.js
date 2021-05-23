//Set the refresh button to a variable.
let refreshButton = document.getElementById('new-wisdom');
let wisdomBlock = document.getElementById('wisdom-block');
//Get Random Number between 0 and number given in parameter (-1)
const getRandNum = number => Math.floor(Math.random() * number);
//Capatalise the first letter of the given string. This allows us to use the key and look nice.
const capatalise = word => word.charAt(0).toUpperCase() + word.slice(1);
// Set up an object where each key is a charachter and each value and array of 5 of their quotes. Object also contains functions.
const quotes = {
    // Any key put here will be taken as a hero, and any values taken as their quotes.
    thor: ['I went for the head', 'We’re the same, you and I. Just a couple of hot-headed fools', 'Do I look to be in a gaming mood?', 'So, Earth has wizards now, huh?', 'Bring me Thanos!'],
    spiderman: ['Your friendly neighborhood Spider-Man!', 'Who am I? I\'m Spider-Man!', "I will never forget these words: 'With great power, comes great responsibility.'", 'What we believe we know may not be the truth.', 'You have a metal arm? Dude, that is so awesome!'],
    ironman: ['I am Iron Man.', 'Genius, billionaire, playboy, philanthropist.', 'We have a Hulk.', 'Sometimes you gotta run before you can walk.', 'Doth mother know you weareth her drapes.'],
    //Get a random quote from the hero provided in the parameter. 'hero' must match the keys above.
    getRandomHeroQuote(hero) {
        let herosQuotes = this[hero];
        let quoteIndex = getRandNum(herosQuotes.length);
        return herosQuotes[quoteIndex]
    },
    // Parses over the object, filters out functions and grabs a random quote from each of the keys (heros)
    getRandomQuotes() {
        let randomHeroQuotes = {};
        for(let hero in this) {
            if(typeof this[hero] === 'function') {
                continue;
            }
            randomHeroQuotes[hero] = this.getRandomHeroQuote(hero);
        }
        return randomHeroQuotes;
    }
}
//This function generates the Div's required to display the quotes in HTML format. I did it this way as it can be easily expanded by just adding more heros to the object.
function displayQuotes() {
    wisdomBlock.innerHTML = '';
    let selectedQuotes = quotes.getRandomQuotes();
    for(let hero in selectedQuotes) {
        // Create the block for the quote and hero name
        const heroDiv = document.createElement("div");
        heroDiv.setAttribute("class", "hero-block");
        heroDiv.setAttribute("id", hero);
        // Create the block for the hero name. Includes a hacky way to show the faces next to the text by leaving it as a span and adding padding and images in css
        const heroNameDiv = document.createElement("div");
        heroNameDiv.setAttribute("class", "hero-name-block")
        const paraName = document.createElement("p");
        const heroName = document.createTextNode(hero);
        const spanImage = document.createElement("span");
        heroNameDiv.appendChild(spanImage);
        paraName.appendChild(heroName);
        heroNameDiv.appendChild(paraName);
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
refreshButton.onclick = displayQuotes;
// Make sure there is wisdom on load.
displayQuotes();