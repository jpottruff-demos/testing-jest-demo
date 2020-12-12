const functions = require('./basics-demo');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSEY VALUES
  // toBeNull - matches only null
  // toBeUndefined - matches only undefined
  // toBeDefined - opposite of toBeUndefined
  // toBeTruthy - matches true values
  // toBeFalsy - matches false values

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should NOT be null', () => {
    expect(functions.isUndefined()).not.toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('Should be falsy', () => {
    expect(functions.checkValue(1)).toBeTruthy();
});



// TESTING OBJECTS 

// This will fail (toBe is for Primitive Types; not [] or {})
// test('User should be Joe John', () => {
//     expect(functions.createUser()).toBe({
//         fname: 'Joe',
//         lname: 'John'
//     });
// });

test('User should be Joe John', () => {
    expect(functions.createUser()).toEqual({
        fname: 'Joe',
        lname: 'John'
    });
});

//toBeLessThan()
// NOTE: Can also just do your logic here
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
});


// RegEx Testing
test('There is no I in team', () => {
    // const regex = '/I/'
    expect('team').not.toMatch(/I/);
    // expect('team').not.toMatch(regex);
});

// Arrays
test('Admin should be in user names', () => {
    const usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
}); 


