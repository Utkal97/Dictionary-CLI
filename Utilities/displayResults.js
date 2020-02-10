function displayResults(data, word, infoType) {
    console.log('--------------------------------');
    if(data.length === 0)
        console.log(`There are no ${infoType} available for the word '${word.toUpperCase()}' in our dictionary`);
    else {
        console.log(`${infoType} for the word '${word.toUpperCase()}' are :`);
        for(let i=0; i< data.length; i++)
            console.log(`${i}). ${data[i]}`);
    }
    console.log('--------------------------------');
}

module.exports = displayResults;