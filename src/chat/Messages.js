import React from 'react'
import { formatRelative } from 'date-fns';
import Image from '../images/logout/logout.jpg'
import './Message.css'

const Message = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoURL = ''
}) => { 
    return (
        <div className="chat-box">
            {/* <div className="chat">
            {photoURL ? (
                <img src={photoURL} alt="Avatar" width={45} height={45} />
            ) : <img src={Image} alt="Avatar" width={45} height={45} />}
            </div>
            <div className="chat" >
            {displayName ? <p>{displayName}</p> : <p>Stranger</p>}
            </div>
            <div className="chat">
            {createdAt ?.seconds ? (
                <span>
                    {formatRelative(new Date(createdAt.seconds*1000),new Date())}
                </span>
            ) : null}
            </div> */}
           
            <p>{text}</p>
           
        </div>
    )
}

export default Message;