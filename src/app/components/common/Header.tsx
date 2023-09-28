import { Link } from "react-router-dom";

export default function Header() {
    return (<>
        <Link to="/users" className="p-2 mr-2">Users</Link>
        <Link to="/tickets">Tickets</Link>
    </>)
}