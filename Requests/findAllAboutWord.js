const { getWordInfo } = require('../Utilities/getRequest.js');
const displayResults = require('../Utilities/displayResults.js');
const handleErrors = require('../Utilities/errorHandler.js');

async function findAllAboutWord(word) {
    try {
        const result = await getWordInfo(word);
        const data = {
                        'definitions' : result.data.definitions,
                        'synonyms' : result.data.synonyms,
                        'antonyms' : result.data.antonyms,
                        'examples' : result.data.examples
                    };
        console.log(`Information available for ${word} :`);

        for(let infoType in data) {
            displayResults(data[infoType], word, infoType);
        }
    }
    catch(err) {
        handleErrors(err,word);
    }
}
module.exports = findAllAboutWord;