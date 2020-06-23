const { start, stop } = require('../app');
require('chai/register-should');

before(async () => {
    start();
});

after(async () => {
    stop();
});
