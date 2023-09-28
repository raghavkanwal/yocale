

export type TicketProp = {
    id: number,
    userId?: number,
    number: string,
    status: string,
}
export default function Ticket(props: TicketProp | any) {
    console.log(props)
    return (<span>Ticket: { `${props.ticket.status} ${props.ticket.userId}`}</span>)
}