const { getRandomWordRequest } = require('../Utilities/getRequest.js');
const handleErrors = require('../Utilities/errorHandler.js');
const logic = require('./logic.js');

async function game() {
    try {
        let randomWord = await getRandomWordRequest();
        let ansData = randomWord.data;

        //There are words with only examples in dictionary, in that case dont choose them, choose another word
        while(ansData.definitions.length===0 && ansData.synonyms.length===0 && ansData.antonyms.length===0) {
            console.log(`The word ${ansData.word} doesn't contain definitions, synonyms and examples. So, choosing another word.`);
            randomWord = await getRandomWordRequest();
            ansData = randomWord.data;
        }
        
        let ans = ansData.word;
        let infoAvailable = {
                        'definitions' : [],
                        'antonyms' : [],
                        'synonyms' : []
                    };

        if(ansData.definitions.length>0) {
            const add = ansData.definitions[0];
            console.log(`Giving a definition as hint : ${add}`);
            infoAvailable['definitions'].push(add);
        }
        else if(ansData.synonyms.length>0) {
            const add = ansData.synonyms[0];
            console.log(`Giving a synonym as hint : ${add}`);
            infoAvailable['synonyms'].push(add);
        }
        else if(ansData.antonyms.length>0) {
            const add = ansData.antonyms[0];
            console.log(`Giving a antonym as hint : ${add}`);
            infoAvailable['antonyms'].push(add);
        }
        console.log("Now guess the word -");
        logic(ansData, ans, infoAvailable);
    }
    catch(err) {
        console.log("Game stopped Progressing due to Error:");
        handleErrors(err);
    }
}

module.exports = game;