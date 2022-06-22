import { getAmount, getBarcode, getExpirationDate } from '../utils/ticketValidate'

const digitableLine = '21290001192110001210904475617405975870000002000'

describe('Get amout from digitable line', () => {
  it('Get the decimal values', () => {
    const amount = getAmount(digitableLine)

    expect(amount).toBe('20.00')
  })

  it('Get the centenary values', () => {
    const digitableLineWithCentenary = '21290001192110001210904475617405975870000020000'

    const amount = getAmount(digitableLineWithCentenary)

    expect(amount).toBe('200.00')
  })

  it('Get the millennial values', () => {
    const digitableLineWithMillennial = '21290001192110001210904475617405975870000200000'

    const amount = getAmount(digitableLineWithMillennial)

    expect(amount).toBe('2.000,00')
  })
})

test('Get barcode from digitable line', () => {
  const barcode = getBarcode(digitableLine)

  expect(barcode).toBe('21299758700000020000001121100012100447561740')
})

test('Get barcode from digitable line', () => {
  const barcode = getBarcode(digitableLine)

  expect(barcode).toBe('21299758700000020000001121100012100447561740')
})

test('Get expiration date from digitable line', () => {
  const expirationDate = getExpirationDate(digitableLine)

  expect(expirationDate).toBe('2021-04-10')
})
