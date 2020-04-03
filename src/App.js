import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import SignInSide from './components/SignInSide';



// todo get environment variables from .env for key info (use dotenv npm package?)
const keyName = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY || 'no env';
console.log(keyName)

function App() {
  const [userAuth, setUserAuth] = React.useState(false);

  const handleSignIn = (email, pass) => {
    localStorage.setItem('userAuth', true);
    setUserAuth(true);
  }

  const handleSignOut = () => {
    localStorage.setItem('userAuth', false);
    setUserAuth(false);
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
