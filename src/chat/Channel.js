import React, { useEffect, useState, useRef } from 'react';
import PropTypes  from 'prop-types'
import firebase from 'firebase/app';
import Message from './Messages'
import './Chanel.css'
const Channel = ({ user = null,db = null,name}) => {
    const [messages, setMessages] = useState([]);    
    const [newMessage, setNewMessage] = useState([]); 
    const [submitKey, setSubmitKey] = useState(10); 
    const { uid, displayName, photoURL } = user;
    const messageEl = useRef(null);
    const bottomListRef = useRef();
    useEffect(() => {
      if (messageEl) {
        messageEl.current.addEventListener('DOMNodeInserted', event => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
        });
      }
    }, [])
    useEffect(() =>{
        if(db){
            const unsubscribe = db.collection(name).orderBy('createdAt').limit(100).onSnapshot(
                querySnapshot => {
                    const data = querySnapshot.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                    setMessages(data)
                })
                return unsubscribe
        }
    },[])
    const handleOnChange = e =>{
      setNewMessage(e.target.value)
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        if(db){
          db.collection(name).add({
            text: newMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            displayName,
            photoURL
          })
          setNewMessage('');
        }
    }
    return (
      
          <div className="chat">
            <div className="head">ChatBox</div>
              <div className="messages" ref={messageEl}>
                {messages.map(message => (
                  <li key={message.id}><Message {...message}/></li>
                ))}
              </div>
              <div className="footer">
              <form
                onSubmit={handleOnSubmit}
                style={{background:"#af9a7d"}}
                  >
              <input
                
                type="text"
                value={newMessage}
                onChange={handleOnChange}
                placeholder="Type your message here..."
                className="flex-1 bg-transparent outline-none"
              />
              <button
                type="submit"
                disabled={!newMessage}
              >
                Send
              </button>
                </form>
            </div>
          </div>
      
    );

};
export default Channel