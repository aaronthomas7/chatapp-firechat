import './App.css';
import Chat from './components/Chat';
import Signin from './components/Signin';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase.js';

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? <Chat/> : <Signin />}
    </>
  );
}

export default App;
