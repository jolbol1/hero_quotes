//Get Random Number between 0 and number given in parameter (-1)
const getRandNum = number => Math.floor(Math.random() * number);
//Capatalise the first letter of the given string. This allows us to use the key and look nice.
const capatalise = word => word.charAt(0).toUpperCase() + word.slice(1);
// Set up an object where each key is a charachter and each value and array of  5 of their quotes
const quotes = {
    thor: ['I went for the head', 'We’re the same, you and I. Just a couple of hot-headed fools', 'Do I look to be in a gaming mood?', 'So, Earth has wizards now, huh?', 'Bring me Thanos!'],
    spiderman: ['Your friendly neighborhood Spider-Man!', 'Who am I? I\'m Spider-Man!', "I will never forget these words: 'With great power, comes great responsibility.'", 'What we believe we know may not be the truth.', 'You have a metal arm? Dude, that is so awesome!'],
    ironman: ['I am Iron Man.', 'Genius, billionaire, playboy, philanthropist.', 'We have a Hulk.', 'Sometimes you gotta run before you can walk.', 'Doth mother know you weareth her drapes.']
}
//Create an empty array to store a quote from each superhero.
let selectedQuotes = [];
// I added this to make the quotes all line up. 'Spiderman Said' being 14 characters, so the rest should pad to that.
const paddingAmount = 14;
// Run through all the heros and grab a random quote from each.
for(let hero in quotes) {
    let quoteIndex = getRandNum(quotes[hero].length);
    const sentenceStart = `${capatalise(hero)} said`
    const quote = quotes[hero][quoteIndex];
    const paddingNeeded = paddingAmount - sentenceStart.length
    const padding = (paddingNeeded !== 0) ? (' ').repeat(paddingNeeded) : '';
    selectedQuotes.push(`${sentenceStart}${padding}| "${quote}"`);
}

//I made the Ascii Art here an objext as I had trouble presenting it legibly without doing so.
const ascii = () => {

    let asciiArt = {
        1:"  __ ___   _____ _ __   __ _  ___ _ __ ___ ",
        2:" / _` \\ \\ / / _ \\ '_ \\ / _` |/ _ \\ '__/ __|",
        3:"| (_| |\\ V /  __/ | | | (_| |  __/ |  \\__ \\ ",
        4:" \__,_|  \\_/ \\___|_| |_|\\__, |\\___|_|  |___/",
        5:"                        __/ |              ",
        6:"                       |___/               "
    }
    for(let line in asciiArt) {
        console.log(asciiArt[line]);
    }
}

//Fucntion to allow a easy clean output ot the terminal.
function outputMessage(selectedQuotes) {
    ascii();
    console.log(`Welcome Stranger!`)
    console.log('The Avengers have some advice for you');
    console.log('---------------------------------------')
    console.log(selectedQuotes.join('\n'))
    console.log('---------------------------------------')
    console.log('End of Avengers Wisdom. Have a heroic day!')
}

outputMessage(selectedQuotes);

