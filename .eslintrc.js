const eslintConfig = {
    extends: 'airbnb',
    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules: {
        'no-param-reassign': ['error', { props: false }],
        'global-require': 'off',
        'no-unused-vars': ['warn', {
            argsIgnorePattern: 'next'
        }],
        'no-await-in-loop': 0,
    }
};

module.exports = eslintConfig;
