const hasUniqueAllies=require('../src/hasUniqueAllies.js');

describe("hasUniqueAllies function",()=>{
    test("Testing unique Alles",()=>{
        expect(hasUniqueAllies(["space","air","land","land"])).toBe(true);
    })
    test("Testing unique Alles",()=>{
        expect(hasUniqueAllies(["space","land","land","land"])).toBe(false);
    })
})