// write a function that copys a file


const fs = require('fs').promises;

async function transformer(src) {
    try {
         return await fs.readFile(src, 'utf-8')
    //make a string an array
        .then(originalString => originalString.split(''))
    //remove the capital letters
        .then(arrayedString => arrayedString.filter(item => {return item == item.toLowerCase()}))
    //reverse the array
        .then(lowercaseArray => lowercaseArray.reverse())
        //uppercase
        .then(reversedArray => reversedArray.map(item => { return item.toUpperCase()}
        ))
    //join that baby
        .then(loudArray => loudArray.join(''))
        // .then(data => {
        //     return data})
    } catch(err) {
        console.log(err);
    }
};


transformer('./scripts/transformer.md');

module.exports = { transformer };
