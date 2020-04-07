import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import SignInSide from './components/SignInSide';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function App() {
  // Override default primary color
  const theme = createMuiTheme({
    palette: {
      primary: {
          main: 'rgb(8,134,150)'
        }
      },
      secondary: {
        main: 'rgb(43,222,167)'
      }
    },
  )
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
          <MuiThemeProvider theme={theme}>
            <Dashboard onSignOut={handleSignOut} />
          </MuiThemeProvider>
      </div>
    );
  } else {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <SignInSide onSignIn={handleSignIn} />
        </MuiThemeProvider>
      </div>
    );
  }

}



export default App;
