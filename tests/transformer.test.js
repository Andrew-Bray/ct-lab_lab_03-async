const { transformer } = require('../scripts/transformer.js')
//const fs = require('fs').promises;


describe('transformer', () => {
    //do after - remove the copy file)
    
    it('will remove the capital letters, make em all capital, and reverse the string', async() => {
        //const src = './scripts/transformer.md';
        return await transformer('./scripts/transformer.md')
        .then(result => {
            expect(result)
            .toEqual('GNIRT TAER A SI SIH')
        })
    })
});
