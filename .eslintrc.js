module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        mocha: true
    },
    extends: [
        'airbnb-base'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 11
    },
    rules: {
        indent: ['error', 4],
        'comma-dangle': ['error', 'never']
    }
};
