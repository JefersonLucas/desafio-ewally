import express from 'express'

import TicketController from '@controllers/ticket.controllers'

const router = express.Router()

router.get('/:digitableLine', TicketController.getTicket)

export default router
