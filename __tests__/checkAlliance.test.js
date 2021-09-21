const checkAlliance=require('../checkAlliance');

describe("checkAlliance function",()=>{
    test("Testing Alliance for ICE Kingdom",()=>{
        expect(checkAlliance("ICE","FHFTFOMFMFAMF")).toStrictEqual( [ 1, [ 'ICE' ] ])
    })
})