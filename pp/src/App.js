import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';

function App() {
  const {isAuthenticated, isLoading} = userAuth0();

  if (isLoading) return <h1>isLoading...</h1>

  return (
    <div className="App">
      <h1>Application</h1>
      {
        isAuthenticated ? 
        <LogoutButton/>
        :
        <LoginButton/>
      }
      <Profile/>
    </div>
  );
}

export default App;
