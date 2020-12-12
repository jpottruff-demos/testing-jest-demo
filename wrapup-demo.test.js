const functions = require("./wrapup-demo")

const setUp = () => console.log(`LET 'ER RIP`);
const cleanUp = () => console.log('ALL DUN!');

beforeAll(() => setUp());
afterAll(() => cleanUp());

describe('chunkArr()', () => {
    beforeEach(() => console.log('chunking....'));
    afterEach(() => console.log('CHUNKED'));
    
    test('that chunkArr exists', () => {
        expect(functions.chunkArr).toBeDefined();
    });
    
    test('Chunk an array of 10 values with legnths of 2', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const len = 2;
        const chunkedArr = functions.chunkArr(numbers, len);
    
        expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10] ]);
    });
});

describe('reverseString()', () => {
    beforeEach(() => console.log('reversing...'));
    beforeEach(() => console.log('REVERSED'));

    test('reverseString function should exist', () => {
        expect(functions.reverseString).toBeDefined();
    });
    
    test(' String reverses', () => {
        expect(functions.reverseString('sup')).toEqual('pus');
    });
});

