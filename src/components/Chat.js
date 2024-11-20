import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { db } from '../firebase.js'
import SendMessage from './SendMessage.js'
import Signout from './Signout'
import "../App.css" 
import {auth} from '../firebase'

function Chat() {
  const scroll = useRef()
  const [messages, setMessages] = useState([])
  useEffect(() => {
      db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
          setMessages(snapshot.docs.map(doc => doc.data()))
      })
  }, [])
  return (
      <div>
          <Signout />
          <div className="msgs">
              {messages.map(({ id, text, photoURL, uid }) => (
                  <div>
                      <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                          <img src={photoURL} alt="" />
                          <p>{text}</p>
                      </div>
                  </div>
              ))}
          </div>
          <SendMessage scroll={scroll} />
          <div ref={scroll}></div>
      </div>
  )
}

export default Chat