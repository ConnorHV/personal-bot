const path = require('path');
const getAllfiles = require('./getAllFiles');

module.exports = (exceptions) => {
    let localCommands = [];

    const commandCategories = getAllfiles(
        path.join(__dirname, '..', 'commands'),
        true   
    );
    console.log(commandCategories);

    return localCommands;
};