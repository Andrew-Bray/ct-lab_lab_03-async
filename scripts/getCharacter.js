const fetch = require('node-fetch');

const getCharacter = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
        return res.json()
    })
    .then(({ name, species, status }) => 
        ({
            name: name,
            species: species,
            status: status
        })
        )
};

const getManyCharacters = (ids) => {
    // juicy short code
    return Promise.all(ids.map(id => getCharacter(id)));
    // return ids.map(id => getCharacter(id));
};

module.exports = { getCharacter, getManyCharacters };

getCharacter(1);
getManyCharacters([1, 3, 5]);
