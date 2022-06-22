export type Ticket = {
  barCode?: string
  amount?: string
  expirationDate?: string
};

export interface ITickets {
  tickets: Array<Ticket>
}
