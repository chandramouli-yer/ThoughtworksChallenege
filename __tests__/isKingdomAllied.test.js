const isKingdomAllied=require('../src/isKingdomAllied.js');

describe("isKingdomAllied function",()=>{
    test("Check If Air Kingdom is Allied",()=>{
        expect(isKingdomAllied("OWL","OLWL")).toBe(1);
    })
    test("Check If Water Kingdom is Allied",()=>{
        expect(isKingdomAllied("OCTOPUS","SUPOTCOFF")).toBe(1);
    })
    test("Check If Land Kingdom is Allied",()=>{
        expect(isKingdomAllied("PANDA","NANDAP")).toBe(1);
    })
    test("Check If Fire Kingdom is Allied",()=>{
        expect(isKingdomAllied("DRAGON","NOGADRF")).toBe(1);
    })
    test("Check If Ice Kingdom is Allied",()=>{
        expect(isKingdomAllied("MAMMOTH","HTOMMMA")).toBe(1);
    })
    test("Check If Air Kingdom is Allied",()=>{
        expect(isKingdomAllied("OWL","ODSL")).toBe(0);
    })
    test("Check If Water Kingdom is Allied",()=>{
        expect(isKingdomAllied("OCTOPUS","SUPOCOFF")).toBe(0);
    })
    test("Check If Land Kingdom is Allied",()=>{
        expect(isKingdomAllied("PANDA","NANDSP")).toBe(0);
    })
    test("Check If Fire Kingdom is Allied",()=>{
        expect(isKingdomAllied("DRAGON","NEGADRF")).toBe(0);
    })
    test("Check If Ice Kingdom is Allied",()=>{
        expect(isKingdomAllied("MAMMOTH","HTOMMA")).toBe(0);
    })
})
