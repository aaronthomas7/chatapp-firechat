import { Button } from '@material-ui/core'
import React from 'react'
import {db,auth} from '../firebase'
import { useState } from 'react'
import { Input } from '@mui/material'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function SendMessage() {
    const [msg,setMsg] = useState('')

    async function sendMessage(e){
        e.preventDefault()
        const {uid,photoURL} = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
  return (
    <div class="sendmessage">
        <form onSubmit={sendMessage}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',fontSize: '15px', fontWeight: '550',height:'20px'}} className="sendMsg">
                <Input style={{paddingLeft: '25px', paddingRight: '25px'}} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message.." />
                <Button type="submit">Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMessage