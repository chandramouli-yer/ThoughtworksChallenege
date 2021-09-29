const checkAlliance = require('../src/checkAlliance')

describe('checkAlliance function', () => {
  test('Testing Alliance for ICE Kingdom', () => {
    expect(checkAlliance('ICE', 'FHFTFOMFMFAMF', 'Mammoth')).toStrictEqual([1, ['ICE']])
  })
  test('Testing Alliance for LAND Kingdom', () => {
    expect(checkAlliance('LAND', 'JAWWHPAYDXXNJ', 'Panda')).toStrictEqual([1, ['LAND']])
  })
  test('Negative Testing Alliance for Water Kingdom', () => {
    expect(checkAlliance('WATER', 'LNFFXK', 'Octopus')).toStrictEqual([0, []])
  })
  test('Testing Alliance for FIRE Kingdom', () => {
    expect(checkAlliance('FIRE', 'UDRAUGONU', 'Dragon')).toStrictEqual([1, ['FIRE']])
  })
  test('Negative Testing Alliance for AIR Kingdom', () => {
    expect(checkAlliance('AIR', 'LTIXLTIYLTIZ', 'Owl')).toStrictEqual([0, []])
  })
})
