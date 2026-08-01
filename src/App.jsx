// src/App.jsx
import { useState } from "react";
import { Route , Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm"
import MailboxList from "./components/MailboxList/MailboxList"
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

const App = () => {

const [mailboxes , setMailboxes] = useState([])

const addbox = (mailboxData) => {
  const newMailbox = {
    ...mailboxData,
    _id: mailboxes.length + 1,
  }
  setMailboxes([...mailboxes , newMailbox])
}

  return (
    <>
      <NavBar />

    <Routes>

      <Route path="/" element={<h2>Welcome to MailBox</h2>} />

      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />

      <Route path="/new-mailbox" element={<MailboxForm addbox={addbox}/>} />

      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />

    </Routes>
    
    </>
  )
};

export default App;
