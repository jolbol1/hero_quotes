// The start of the file.

//Get Random Number between 0 and number given in parameter (-1)
const getRandNum = number => Math.floor(Math.random() * number);


// Set up an object where each key is a charachter and each value and array of  5 of their quotes
const quotes = {
    thor: ['I went for the head', 'We’re the same, you and I. Just a couple of hot-headed fools', 'Do I look to be in a gaming mood?', 'So, Earth has wizards now, huh?', 'Bring me Thanos!'],
    spiderman: ['Your friendly neighborhood Spider-Man!', 'Who am I? I\'m Spider-Man!', "I will never forget these words: 'With great power, comes great responsibility.'", 'What we believe we know may not be the truth.', 'You have a metal arm? Dude, that is so awesome!'],
    ironman: ['I am Iron Man.', 'Genius, billionaire, playboy, philanthropist.', 'We have a Hulk.', 'Sometimes you gotta run before you can walk.', 'Doth mother know you weareth her drapes.']
}

//Create an empty array to store a quote from each superhero.
let selectedQuotes = [];

for(let hero in quotes) {
    let quoteIndex = getRandNum(quotes[hero].length);
    selectedQuotes.push(`"${quotes[hero][quoteIndex]}" - ${hero}`);
}

console.log(selectedQuotes);

