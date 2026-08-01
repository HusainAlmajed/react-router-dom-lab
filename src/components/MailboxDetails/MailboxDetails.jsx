import { useParams } from "react-router"

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    // console.log(mailboxId)

    const mailbox = props.mailboxes.find((currentMailbox) => {
        return currentMailbox._id === Number(mailboxId)
    })

    if(!mailbox) return <h2>Mailbox not found</h2>

    return (
        <>
            <h1>Mailbox {mailboxId}</h1>
            <h2>Details</h2>
            <h3>Boxholder: {mailbox.boxOwner}</h3>
            <h3>Boxsize: {mailbox.boxSize}</h3>
        </>
    )

}

export default MailboxDetails