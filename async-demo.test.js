const asyncFunctions = require('./async-demo');
// Using Promises
test('PROMISES: user fetched; Name should be `Leanne Graham', () => {
    // IMPORTANT: Verifies that call backs actually get called (eg. a .then)
    expect.assertions(1);

    // You need to return the Promise
    return asyncFunctions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});

// REFACTOR of above
test('ASYNC/AWAIT: user fetched; Name should be `Leanne Graham', async () => {
    expect.assertions(1);
    const data = await asyncFunctions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');;
});