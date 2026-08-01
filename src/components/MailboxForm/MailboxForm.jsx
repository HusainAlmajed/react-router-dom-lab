import { useState } from "react"
import { useNavigate } from "react-router"

const initialState = {
    boxOwner: '',
    boxSize: 'small',
}

const MailboxForm = (props) => {

const [mailboxData , setMailboxeData] = useState(initialState)
const navigate = useNavigate()

// so now we can see any change we make in the form
const handelChange = () => {
    setMailboxeData({
        ...mailboxData,
        [event.target.name]: event.target.value,
    })
}

const handelSubmit = () => {
    event.preventDefault()
    props.addbox(mailboxData)
    setMailboxeData(initialState)
    navigate('/mailboxes')
}

    return(
        <main>
            <h1>New Mailbox</h1>

            <form onSubmit={handelSubmit}>
                Enter a Boxholder:
                <input type="text" name="boxOwner" value={mailboxData.boxOwner} onChange={handelChange} />

                Select a Box Size: 
                <select name="boxSize" value={mailboxData.boxSize} onChange={handelChange} >
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </select>

                <button type="submit">Add Mailbox</button>

            </form>

        </main>
    )
}

export default MailboxForm