import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getTicketDetail } from "src/app/apis/get";
import styles from './ticket.module.css';
import { Link } from "react-router-dom";

type IdProps = {
    id: string | null
}

export default function TicketDetail({id}: IdProps) {

  function resolveColorByState(status: string): string {
    switch(status) {
      case "assigned":
        return "yellow";
      case "unassigned": 
        return "red";
      case "completed":
        return "green";
      default: 
        return "gray";
        break;
    }
  }

    const { data:ticket, isLoading, isError, refetch, isFetching} = useQuery({
        queryKey: ["getTicketDetail"],
        queryFn: () => getTicketDetail(id),
        initialData: null
    })

    useEffect(() => { 
      refetch()
    }, [id]);

    if(isFetching) return <span>Loading Ticket Detail...</span>
    if(isError) return <span>Error loading ticket detail.</span>

    return (
        <div>
          {id ? (
            <div className={`${styles.ticket}`}>
              Ticket ID: {ticket?.id}
              <div className={styles.ticketContent}>
                <div>Ticket Assigned to: {`User ${ticket?.userId}` || 'None'}</div>
                <div>Ticket Status : <span className={`${resolveColorByState(ticket.status)}`}>{ticket?.status}</span></div>
                <div>Ticket #:{ticket?.number}</div>
              </div>
            </div>
          ) : null}
        </div>
      );
}