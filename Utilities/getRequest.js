const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const base_url = process.env.BASE_URL;

async function getSpecificInfo(word, infoType) {
    const url = base_url + 'word/' + word + '/' + infoType;
    try {
        const getResults = await axios.get(url);
        return getResults.data[infoType];
    }
    catch(err) {
        throw err;
    }
}

async function getWordInfo(word) {
    const url = base_url + 'word/' + word + '/allInfo';
    try {
        const getResults = await axios.get(url);
        return getResults;
    }
    catch(err) {
        throw err;
    }
}

async function getRandomWordRequest() {
    const url = base_url+'words';
    try {
        const getResults = await axios.get(url);
        return getResults;
    }
    catch(err) {
        throw err;
    }
}

module.exports.getWordInfo = getWordInfo;
module.exports.getSpecificInfo = getSpecificInfo;
module.exports.getRandomWordRequest = getRandomWordRequest;