import { useQuery } from "@tanstack/react-query";
import { getTicketDetail } from "src/app/apis/get";

type IdProps = {
    id: string | null
}

export default function TicketDetail({id}: IdProps) {

    const { data, isLoading, isError} = useQuery({
        queryKey: ["getTicketDetail"],
        queryFn: () => getTicketDetail(id)
    })

    if(isLoading) return <span>Loading Ticket Detail...</span>
    if(isError) return <span>Error loading ticket detail.</span>

    return (
        <div>
          {id ? (
            <span>Ticket Detail comes here.</span>
          ) : (
            <h3>There is no name in the query string</h3>
          )}
        </div>
      );
}