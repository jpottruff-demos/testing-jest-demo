const functions = require('./before-after-demo');

const initDB = () => console.log('fake DB initalized...');
const closeDB = () => console.log('fake DB closed...');

// Can do things before each test
// beforeEach(() => initDB());
// afterEach(() => closeDB());

// ...Or once before all tests, and once after all tests
beforeAll(() => initDB());
afterAll(() => closeDB());



test('sayHi says hi', () => expect(functions.sayHi().toLowerCase()).toEqual('hi'));

test('giveMeOne gives me one', () => expect(functions.giveMeOne()).toEqual(1));