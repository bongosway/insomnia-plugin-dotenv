const index = require('../index.js').templateTags[0];
const env = './__tests__/.env';

test('return correct key value', () => {
    expect(index.run('', env, 'CHEESE')).toEqual("CAKE");
})
test('expands environment variables ', () => {
    var homedir = process.env.HOME
    expect(index.run('', env, 'HOMEDIR')).toEqual(homedir);
})