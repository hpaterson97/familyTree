const { test, expect } = require('@jest/globals');

//issue (solved): vscode automatically added the variable   describe   from a different library unrelated to jest which is why it failed to run so be carfeul in the future
//const {firstGen, secGen, thirdGen} = require('./famTree');
const {ftConstruct} = require('./famTree');

const firstGen = [ //first generation array of objects
    new ftConstruct("King George VI"),
    new ftConstruct("Queen Elizabeth")
];
const secGen = [ //second generation array of objects
    new ftConstruct("Queen Elizabeth II", 95, firstGen[0].name, firstGen[1].name),
    new ftConstruct("Princess Margaret", firstGen[0].name, firstGen[1].name),
    new ftConstruct("Prince Philip")
];

describe('first generation', () => { //testing first generation array of objects
    test('is the first name of the first generation array King George VI', () => {
        expect(firstGen[0].name).toBe("King George VI");
    });
    test('is the first element of the first array an object', () => {
        expect(typeof firstGen[0]).toBe("object");
    });
});

describe('second generation', () => { //testing second generation array of objects
    test('does the second generation array have 3 elements', () => { //does the second generation have 3 members
        expect(secGen).toHaveLength(3);
    });
    test('does Prince Philip have undefined parents', () => {
        expect(secGen[2].parents[0]).toBeUndefined();
    });
    test('does Princess Margaret have defined parents', () => {
        expect(secGen[1].parents[0]).toBeDefined();
    });
    test('is this object an instance of the ftConstruct class that was imported', () => {
        expect(secGen[1]).toBeInstanceOf(ftConstruct);
    }); 
    //Test Driven Development: testing for an attribute that doesn't exist and making the simplest solution
    test('does the age attribute have type: number', () => {
        expect(typeof secGen[0].age).toBe('number');
    });

});