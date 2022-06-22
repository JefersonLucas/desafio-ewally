export function formatDate (date: Date): string {
  const d = date.getDate()
  const m = date.getMonth() + 1
  const y = date.getFullYear()

  return `${y}-${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`
}

export function getBarcode (digitableLine: string): string {
  const bank = digitableLine.substring(0, 3)
  const coin = digitableLine.substring(3, 4)
  const maturityValue = digitableLine.substring(32, 47)
  const verifyingDigit = digitableLine.substring(4, 9)
  const a = digitableLine.substring(10, 16)
  const b = digitableLine.substring(16, 20)
  const c = digitableLine.substring(21, 31)

  return `${bank}${coin}${maturityValue}${verifyingDigit}${a}${b}${c}`
}

export function getExpirationDate (digitableLine: string): string {
  const expirationDate = digitableLine.substring(33, 37)

  const dateBase = new Date('2000-07-03')

  dateBase.setDate(dateBase.getDate() + Number(expirationDate))

  return formatDate(dateBase)
}

export function getAmount (digitableLine: string): string {
  let amount = digitableLine.substring(37, 47)

  const index = amount.split('').findIndex((item) => item !== '0')

  if (index === 6) {
    amount = amount.slice(6, 10)
    return `${amount.substring(0, 2)}.${amount.substring(2, 4)}`
  }

  if (index === 5) {
    amount = amount.slice(5, 10)
    return `${amount.substring(0, 3)}.${amount.substring(3, 5)}`
  }

  if (index === 4) {
    amount = amount.slice(4, 10)
    return `${amount.substring(0, 1)}.${amount.substring(1, 4)},${amount.substring(4, 6)}`
  }

  if (index === 3) {
    amount = amount.slice(3, 10)
    return `${amount.substring(0, 2)}.${amount.substring(2, 5)},${amount.substring(5, 7)}`
  }

  if (index === 2) {
    amount = amount.slice(2, 10)
    return `${amount.substring(0, 3)}.${amount.substring(3, 6)},${amount.substring(6, 8)}`
  }

  if (index === 1) {
    amount = amount.slice(1, 10)
    return `${amount.substring(0, 1)}.${amount.substring(1, 4)}.${amount.substring(3, 6)},${amount.substring(7, 9)}`
  }

  if (index === 0) {
    amount = amount.slice(0, 10)
    return `${amount.substring(0, 2)}.${amount.substring(2, 5)}.${amount.substring(5, 8)},${amount.substring(8, 10)}`
  }
}

export function lineLength (digitableLine: string): boolean {
  if (digitableLine.length !== 47) return true
}
