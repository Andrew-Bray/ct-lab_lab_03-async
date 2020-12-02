
//CALLBACK VERSION

// const fsPromises = require('fs');
// fsPromises.readFile('./cooltext.md', 'utf-8', (err, data) => {
//     if(err) console.log(err);

//     console.log(data);
// })

//.THEN version
// const fsPromises = require('fs').promises;

// fsPromises.readFile('./cooltext.md', 'utf-8')
//    .then(data => {console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

//Async Await
const fsPromises = require('fs').promises;

async function textReader() {
    try{
        const coolText = await fsPromises.readFile('./cooltext.md', 'utf-8');
        console.log(coolText);
    } catch(err) {
        console.log(err);
    }
}

textReader();