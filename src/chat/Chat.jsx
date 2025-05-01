import React, { useState,useEffect, useRef } from 'react';
import "./Chat.css";
import { collection, addDoc, serverTimestamp, query, orderBy, limit } from 'firebase/firestore'; // 🔥 fixed import
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from './Message';
function Chat({ user, firestore }) {
  const [message, setMessage] = useState('');
  const dummy=useRef()

  const messagesRef = collection(firestore, 'messages');
  const messagesQuery = query(messagesRef, orderBy('createAt'), limit(25)); 

  const [messages] = useCollectionData(messagesQuery, { idField: 'id' });

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = user;
    await addDoc(messagesRef, {
      text: message,
      createAt: serverTimestamp(), 
      uid,
      photoURL
    });
    setMessage('');
    dummy.current.scrollIntoView({behavior:'smooth'})
  }

  return (
    <>
      <div className='chat-window'>
        {messages && messages.map((msg) => <Message key={msg.id} message={msg} user={user}/>)} 
     <span ref={dummy}></span>
      </div>
      <form onSubmit={sendMessage}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Type Here..' />
        <button type="submit">
          <img src="https://tse1.mm.bing.net/th?id=OIP.J1Yceoe1hI80frmlK84kxAHaHa&pid=Api&P=0&h=180" alt='' />
        </button>
      </form>
    </>
  );
}

export default Chat;
