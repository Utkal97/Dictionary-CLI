const { getSpecificInfo } = require('../Utilities/getRequest.js');
const handleErrors = require('../Utilities/errorHandler.js');
const displayResults = require('../Utilities/displayResults.js');

async function findAntonyms(word) {
    try {
        const infoType = 'antonyms';
        const results = await getSpecificInfo(word, infoType);
        displayResults(results, word, infoType);
    }
    catch(err) {
        handleErrors(err, word);
    }
}

module.exports = findAntonyms;