const axios = require('axios');

it.only('Should add a person to the list', async () => {
    const { data } = await axios.post('http://127.0.0.1:3000/people', { a: 1 });
    // data.should.be.an('array');
    // data.should.have.length(10);
});
