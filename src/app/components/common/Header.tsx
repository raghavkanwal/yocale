import { Link } from "react-router-dom";
import styles from './Header.module.css';

export default function Header() {
    return (<div className={styles.header}>
        <Link to="/users" className={styles.mr2}>Users</Link>
        <Link to="/tickets">Tickets</Link>
    </div>)
}