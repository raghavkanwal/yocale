import { useMemo } from 'react';
import { useQuery } from "@tanstack/react-query";
import { getTickets } from "src/app/apis/get";
import Ticket, { TicketProp } from "../Ticket/Ticket";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Link, useLocation } from "react-router-dom";
import 'src/index.css'
import TicketDetail from '../TicketDetail/TicketDetail';


function useQueryParam() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function TicketList() {
    const columnHelper = createColumnHelper<TicketProp>();

    const queryParams = useQueryParam();

    const columns = [
        columnHelper.accessor('id', {
            cell: info => <Link to={`/tickets/?id=${info.getValue()}`}>{info.getValue()}</Link>,
            header: () => <span>Ticket ID</span>
        }),
        columnHelper.accessor('status', {
            cell: info => info.getValue(),
            header: () => <span>Ticket Status</span>
        }),
        columnHelper.accessor('userId', {
            cell: info => info.getValue(),
            header: () => <span>User ID</span>
        })
    ]
    const { isLoading, isError, data: ticketsList } = useQuery({
        queryKey: ['fetchTickets'],
        queryFn: () => getTickets(),
    });

    const table = useReactTable({
        data: ticketsList,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    if (isLoading) return <span>Loading....</span>;
    if (isError) return <span>An error occurred, please try again later!</span>;

    return <>
        <Child id={queryParams.get("id")} />

        <table className="p-2">
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {
                    table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
}

type IdProps = {
    id: string | null
}

function Child({id}: IdProps) {
    return (
        <div>
          {id ? (
            <TicketDetail id={id} />
          ) : null}
        </div>
      );
}