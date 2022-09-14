import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
import {useAuth0} from '@auth0/auth0-react';
import SearchBox from './components/SearchBox';


function App() {
    const {isAuthenticated} = useAuth0();
    return (
    <div className="App">
      <h1>Application</h1>
      {
        (isAuthenticated) 
        ? <><LogoutButton/><SearchBox/></>
        : <LoginButton/> 
      }
    </div>
  );
}

export default App;

