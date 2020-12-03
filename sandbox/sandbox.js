
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

// .Then COPY-ER (couldn't get a 'new copy reader' to work)
const fsPromises = require('fs').promises;

fsPromises.readFile('./cooltext.md', 'utf-8')
   .then(data => {fsPromises.writeFile('./coolertext.md', data)
    });

// fsPromises.readFile('./coolertext.md', 'utf-8')
//     .then(cooler => console.log(cooler));




//Async Await
// const fsPromises = require('fs').promises;

// async function textReader() {
//     try{
//         const coolText = await fsPromises.readFile('./cooltext.md', 'utf-8');
//         console.log(coolText);
//     } catch(err) {
//         console.log(err);
//     }
// }

// textReader();

// async function textWriter() {
    
//         await fsPromises.writeFile('./newtext.md', 'woooohoooooo!!');
       

//         try{
//             const newText = await fsPromises.readFile('./newtext.md', 'utf-8');
//             console.log(newText);
//         } catch(err) {
//             console.log(err);
//         }
//     }

// textWriter();
