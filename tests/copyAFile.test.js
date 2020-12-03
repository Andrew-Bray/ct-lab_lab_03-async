const { copyAFile } = require('../scripts/copyAFile.js')
const fs = require('fs').promises;


describe('copyAFile', () => {
    //do after - remove the copy file)
    afterEach(() => {fs.unlink('./newfile.md')})
    
    it('will take an existing file with text and make a copy', async() => {
        const src = `./scripts/file-to-copy.md`;
        const dst = './newfile.md'
        await copyAFile(src, dst); 

        expect(fs.readFile('./newfile.md'))
        .toEqual(fs.readFile(`./scripts/file-to-copy.md`))
    })
})
