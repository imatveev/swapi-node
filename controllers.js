const fs = require('fs');

module.exports = {
    async getPeople(request, response) {
        const people = fs.createReadStream('./DB/people.json');
        people.pipe(response);
    },
    async getPlanets(request, response) {
        const people = fs.createReadStream('./DB/planets.json');
        people.pipe(response);
    },
    async getStarships(request, response) {
        const people = fs.createReadStream('./DB/starships.json');
        people.pipe(response);
    },
    async notFound(request, response) {
        response.statusCode = 404;
        response.end('Not implemented');
    },
    async addPerson(request, response) {
        const arr = [];
        let data;
        request.on('data', chunk => {
            arr.push(chunk);
        });
        request.on('end', () => {
            data = Buffer.concat(arr).toString();
            console.log(data);
            response.end();
        });
    }
};
