import React from 'react'

function Message({message,user}) {
    const{text,uid,photoURL}=message
    const messageClass=uid===user.uid?"sent":"received"
  return (
    <div>
      <div className={`message ${messageClass}`}>
        <img src='https://logodix.com/logo/722769.png'/>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Message
