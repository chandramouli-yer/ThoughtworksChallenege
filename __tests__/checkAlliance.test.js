const checkAlliance=require('../checkAlliance');

describe("checkAlliance function",()=>{
    test("Testing Alliance for ICE Kingdom",()=>{
        expect(checkAlliance("ICE","FHFTFOMFMFAMF")).toStrictEqual( [ 1, [ 'ICE' ] ])
    })
    test("Testing Alliance for LAND Kingdom",()=>{
        expect(checkAlliance("LAND","JAWWHPAYDXXNJ")).toStrictEqual( [ 1, [ 'LAND' ] ])
    })
    test("Negative Testing Alliance for Water Kingdom",()=>{
        expect(checkAlliance("WATER","LNFFXK")).toStrictEqual( [ 0, [  ] ])
    })
    test("Testing Alliance for FIRE Kingdom",()=>{
        expect(checkAlliance("FIRE","UDRAUGONU")).toStrictEqual( [ 1, [ "FIRE" ] ])
    })
    test("Negative Testing Alliance for AIR Kingdom",()=>{
        expect(checkAlliance("AIR","LTIXLTIYLTIZ")).toStrictEqual( [ 0, [  ] ])
    })
})