import { Request, Response, NextFunction } from 'express'

import TicketService from '@services/ticket.services'

async function getTicket (req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const digitableLine = req.params.digitableLine

    const ticket = await TicketService.getTicket(digitableLine)

    if (ticket) res.status(200).send(ticket)

    res.status(400).send({ message: 'digitableLine not found.' })
  } catch (error) {
    next(error)
  }
}

export default { getTicket }
