function handleErrors(err, word="") {
    //console.log(err);
    if(err.response === undefined)
        console.log("Network issues. Couldn't reach the server.");
    else if(err.response.status===404)
        console.log(`'${word.toUpperCase()}' is not in dictionary.`);
    else if(err.response.status===400)
        console.log(`Bad Command. You have typed a wrong command.`);
    else if(err.response.status===503)
        console.log(`The server is not up. It may be under maintenance.`)
}

module.exports = handleErrors;