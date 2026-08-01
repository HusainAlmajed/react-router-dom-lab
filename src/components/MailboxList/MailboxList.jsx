import { Link } from "react-router"

const MailboxList = (props) => {

    return(
        <main>
            <h1>Mailbox List</h1>
            <ul>
            {props.mailboxes.map((mailbox) => (
                <li className="mail-box" key={mailbox._id}>
                    <Link to={`/mailboxes/${mailbox._id}`} >
                        <h3>Mailbox {mailbox._id}</h3>
                    </Link>
                </li>
            ))}
            </ul>
        </main>
    )
}

export default MailboxList