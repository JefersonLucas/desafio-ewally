import { getAmount, getBarcode, getExpirationDate, lineLength } from '@utils/ticketValidate'

import { Ticket } from 'types'

async function getTicket (digitableLine: string): Promise<Ticket> {
  const expirationDate = getExpirationDate(digitableLine)
  const amount = getAmount(digitableLine)
  const barCode = getBarcode(digitableLine)

  const isValidate = lineLength(digitableLine)

  if (!isValidate) {
    return {
      barCode,
      amount,
      expirationDate
    }
  }
}

export default { getTicket }
