import { Link } from "react-router"

const MailboxList = (props) => {

    return(
        <main>
            <h1>Mailbox List</h1>
            {props.mailboxes.map((mailbox) => (
                <div key={mailbox._id}>
                    <Link to={`/mailboxes/${mailbox._id}`} >
                        <h3>Mailbox {mailbox._id}</h3>
                    </Link>
                </div>
            ))}
        </main>
    )
}

export default MailboxList