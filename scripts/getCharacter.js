const fetch = require('node-fetch');

const getCharacter = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(data => {
        return data.json()
    })
    .then(data => 
        (console.log(data)))
    };   

module.exports = getCharacter;

getCharacter(1);