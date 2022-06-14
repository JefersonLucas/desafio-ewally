import { Ticket } from '../models/Ticket'

test('it shoul be ok', () => {
  const ticket = new Ticket()

  ticket.barCode = '21299758700000020000001121100012100447561740'
  ticket.amount = '20.00'
  ticket.expirationDate = '2018-07-16'

  expect(ticket.barCode).toBe('21299758700000020000001121100012100447561740')
  expect(ticket.amount).toBe('20.00')
  expect(ticket.expirationDate).toBe('2018-07-16')
})
