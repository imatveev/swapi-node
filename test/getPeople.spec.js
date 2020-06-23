const axios = require('axios');

it('Should return list of people', async () => {
    const { data } = await axios.get('http://127.0.0.1:3000/people');
    data.should.be.an('array');
    data.should.have.length(10);
});
