import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import SignInSide from './components/SignInSide';

function App() {
  const [userAuth, setUserAuth] = React.useState(false);

  const handleSignIn = (email, pass) => {
    localStorage.setItem('userAuth', true);
    setUserAuth(true);
  }

  const handleSignOut = () => {
    console.log('Sign out');
    localStorage.setItem('userAuth', false);
    setUserAuth(false);
    // todo force rerender... why does setUserAuth sometimes not rerender?
  }

  if (localStorage.getItem('userAuth') === 'true') {
    return (
      <div className="App">
        <Dashboard onSignOut={handleSignOut} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <SignInSide onSignIn={handleSignIn} />
      </div>
    );
  }

}



export default App;
