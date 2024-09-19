module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'eslint-config-standard',
        'plugin:prettier/recommended'
    ],
    plugins: ['unused-imports', 'prettier'],
    rules: {
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': 'warn',
        'comma-dangle': ['error', 'never'], // Turn off trailing commas
        'no-tabs': 'error', // Disallow unexpected tabs
        indent: ['error', 4] // Enforce 4 spaces for indentation
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    env: {
        browser: true,
        es6: true,
        node: true
    }
};
