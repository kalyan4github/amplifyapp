import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';



function App() {
  return (
    <Authenticator>
       {({ signOut, user }) => (
        <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            We Now have Auth
          </h1>       
        </header>
        <button onClick={signOut}>Sign out</button>        
      </div>
    )}
    </Authenticator>    
  );
}

export default App;
