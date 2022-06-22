import TicketRepositories from '@repositories/ticket.repositories'

import { Ticket } from 'types'

async function getTicket (digitableLine: string): Promise<Ticket> {
  return await TicketRepositories.getTicket(digitableLine)
}

export default { getTicket }
