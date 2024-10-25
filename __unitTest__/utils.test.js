import { saveUserName, userName } from "../utils";

describe('[saveUserName]', () => {
    it('saveUserName to be defined', () => {
        expect(saveUserName).toBeDefined();
    })

    it('if it is an empty string', () => {
        expect(()=>saveUserName()).toThrow("Please enter a name")
    })

    it('if it is a function', () => {
        expect(typeof saveUserName).toBe('function')
    })

    test('[saveUserName] should accept only strings', () => {
        expect(()=>saveUserName(12)).toThrow("Name should be a string")
    });
});

