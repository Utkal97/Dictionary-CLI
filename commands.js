#!/usr/bin/env node

const program = require('commander');
const findDefinitions = require('./Requests/findDefinitions.js'),
    findAntonyms = require('./Requests/findAntonyms.js'),
    findSynonyms = require('./Requests/findSynonyms.js'),
    findExamples = require('./Requests/findExamples.js'),
    findRandomWord = require('./Requests/findRandomWord.js'),
    findAllAboutWord = require('./Requests/findAllAboutWord.js');

const game = require('./Game/game.js');

program
    .version('0.0.8')
    .description('A dictionary CLI Tool');

//@command : dict defn <word>
//@description : give definitions of the asked word
program
    .command('definition <word>')
    .alias('defn')
    .description('give definitions of the asked word.')
    .action(async (word) => {
        word = word.toLowerCase();              //Make all letters to lower before searching
        findDefinitions(word);
    });

//@command : dict syn <word>
//@description : give synonyms of the asked word
program
    .command('synonym <word>')
    .alias('syn')
    .description('give synonyms of the asked word.')
    .action(async (word) => {
        word = word.toLowerCase();              //Make all letters to lower before searching
        findSynonyms(word);
    });

//@command : dict ant <word>
//@description : give antonyms of the asked word
program
    .command('antonym <word>')
    .alias('ant')
    .description('give antonyms of the asked word.')
    .action(async (word) => {
        word = word.toLowerCase();              //Make all letters to lower before searching
        findAntonyms(word);
    });

//@command : dict ex <word>
//@description : give examples of the asked word
program
    .command('example <word>')
    .alias('ex')
    .description('give examples of the asked word.')
    .action(async (word) => {
        word = word.toLowerCase();              //Make all letters to lower before searching
        findExamples(word);
    });

//@command : dict
//@description : give Word Of the Day
if(process.argv[2] === undefined) {
    findRandomWord();
}

//@command : dict <word>
//@description : give all the information available about the word
else if(process.argv.length===3){
    const word = process.argv[2].toLowerCase();
    findAllAboutWord(word);
}

//@command : dict play game
program
    .command('play game')
    .description(`
    - If the correct word is entered, show success message
    - Any synonyms of the word(expected answer) should be also be accepted as a correct answer.
    - If incorrect word is entered, user should be given 3 choices:
        - (1) Try again
            Let the user try again.
        - (2) Hint
            Display a hint, and let the user try again. Hints could be:
                1. Display the word randomly jumbled (cat => atc, tac, tca)
                2. Display another definition of the word
                3. Display another antonym of the word
                4. Display another synonym of the word
        - (3) Quit
               Display the Word, Word Full Dict , and quit.`)
    .action(async ()=>{
        game();
    });

program.parse(process.argv);