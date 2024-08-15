import logo from './logo.svg';
import './App.css';
import { auth } from './firebase';
import { useEffect, useState } from 'react';
import Login from './login';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};


export default App;
