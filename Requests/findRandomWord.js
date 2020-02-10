const { getRandomWordRequest } = require('../Utilities/getRequest.js');
const handleErrors = require('../Utilities/errorHandler.js');
const displayResults = require('../Utilities/displayResults.js');

async function findRandomWord() {
    try {
        const result = await getRandomWordRequest();
        const wordOfTheDay = result.data.word;
        const data = {
                        'definitions' : result.data.definitions,
                        'synonyms' : result.data.synonyms,
                        'antonyms' : result.data.antonyms,
                        'examples' : result.data.examples
                    };
        console.log(`Word of the Day : ${wordOfTheDay}`);

        for(let infoType in data) {
            displayResults(data[infoType], wordOfTheDay, infoType);
        }
    }
    catch(err) {
        handleErrors(err);
    }
}

module.exports = findRandomWord;