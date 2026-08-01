// src/App.jsx
import { useState } from "react";
import { Route , Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm"
import MailboxList from "./components/MailboxList/MailboxList"
// import MailboxDetails from "./components/MailboxDetails/MailboxDetails"

const App = () => {

  return (
    <>
      <NavBar />
      <h1>Hello world!</h1>

    <Routes>

      <Route path="/" element={<h2>Welcome to MailBox</h2>} />

      <Route path="/mailboxes" element={<MailboxList />} />

      <Route path="/new-mailbox" element={<MailboxForm />} />

    </Routes>
    
    </>
  )
};

export default App;
