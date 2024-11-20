import { Button } from '@material-ui/core'
import React from 'react'
import { auth } from '../firebase.js'

function Signout() {
  return (
    <div style={{
        display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: 'lightgrey', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10', height: '1px'
    }}>
        <Button style={{ padding: '15px', fontSize: '15px', borderRadius: '2px', fontWeight: '600', border:'2px' }} onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  )
}

export default Signout