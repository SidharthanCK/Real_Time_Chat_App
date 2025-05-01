import './App.css';
import Chat from './chat/Chat';
import Header from './components/header/Header';
import Signin from './signin/Signin';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 
const firestore = getFirestore(app);
function App() {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <Header auth={auth} user={user} />
      <section>
        {user ? <Chat user={user} firestore={firestore} /> : <Signin auth={auth} />}
      </section>
    </div>
  );
}

export default App;
