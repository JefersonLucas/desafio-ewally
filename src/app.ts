import express from 'express'

import TicketRoute from '@routes/ticket.routes'

const app = express()

app.use('/boletos', TicketRoute)

export default app
