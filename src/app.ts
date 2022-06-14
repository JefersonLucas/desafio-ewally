import express from 'express'

import TicketsRoutes from '@routes/tickets.routes'

const app = express()

app.use('/boletos', TicketsRoutes)

export default app
