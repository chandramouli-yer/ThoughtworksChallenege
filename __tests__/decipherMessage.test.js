const decipheredMessage = require('../src/decipherMessage')

describe('DecipherMessage function', () => {
  test('Deciphers Land Kindom messages', () => {
    expect(decipheredMessage('Panda', 'OWLAOWLBOWLC')).toBe('JRGVJRGWJRGX')
  })
  test('Deciphers ICE Kingdom messages', () => {
    expect(decipheredMessage('Mammoth', 'MOMAMVTMTMHTM')).toBe('FHFTFOMFMFAMF')
  })
  test('Deciphers Water Kingdom Messages', () => {
    expect(decipheredMessage('Octopus', 'SUMMER')).toBe('LNFFXK')
  })
  test('Deciphers AIR Kingdom Messages', () => {
    expect(decipheredMessage('Owl', 'OWLAOWLBOWLC')).toBe('LTIXLTIYLTIZ')
  })
  test('Deciphers Fire Kingdom Messages', () => {
    expect(decipheredMessage('Dragon', 'AJXGAMUTA')).toBe('UDRAUGONU')
  })
})
