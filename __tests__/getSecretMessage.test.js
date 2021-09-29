const getSecretMessage = require('../src/getSecretMessage.js')

describe('getSecretMessage function', () => {
  test('Get secret message with no spaces', () => {
    expect(getSecretMessage(['ertuisa', 'sahdusd'], 2)).toBe('SAHDUSD')
  })
  test('Get secret message with spaces', () => {
    expect(getSecretMessage(['space', 'space', 'is', 'awesome'], 2)).toBe('SPACEISAWESOME')
  })
})
