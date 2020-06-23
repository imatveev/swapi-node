const http = require('http');
const get = require('lodash.get');

const controllers = require('./controllers');
const router = require('./router');

const server = http.createServer();

const start = () => {
    server.listen(3000);
    console.log('App is started on 3000 port');

    server.on('request', async (request, response) => {
        const controller = controllers[get(router, [request.method, request.url])];

        await (controller || controllers.notFound)(request, response);
    });
};

const stop = () => {
    server.close(() => console.log('App is stopped'));
};

module.exports = {
    start,
    stop
};
