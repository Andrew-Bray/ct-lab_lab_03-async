// write a function that copys a file


const fs = require('fs').promises;

const copyAFile = (src, dst) => {
  
   return fs.readFile(src, 'utf-8')
    .then(data => { 
        return fs.writeFile(dst, data)
     });
}

copyAFile(`${__dirname}/file-to-copy.md`, './badassfile.md')

module.exports = { copyAFile };
