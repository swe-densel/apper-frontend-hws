import './App.css';
import {useState} from 'react';

const LoginApp = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    username : '',
    password : ''
  })

  const [isLogin, setIsLogin] = useState(false)

  const toggleLogin = () => {
    if(loginCredentials.username === 'admin' && 
       loginCredentials.password === 'adminpassword')
          setIsLogin(!isLogin)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>

        {isLogin ? (
          <h1>Hello, {loginCredentials.username}!</h1>
        ) : (
          <form>
        
          <label>Username:</label>
            <input 
              type = 'text' 
              placeholder = 'Enter Username'
              value = {loginCredentials.username}
              onChange = {(e) => setLoginCredentials(
                value => {
                  return { ...value, username: e.target.value}
                }
              )} />

          <label>Password:</label>
            <input 
              type = 'password' 
              placeholder = 'Enter Password'
              value={loginCredentials.password}
              onChange = {(e) => setLoginCredentials(
                value => {
                  return { ...value, password: e.target.value}
                }
              )} />

          </form>

        )}
          <button onClick={toggleLogin}>
            {isLogin ? 'LOGOUT' : 'LOGIN'}
          </button>
        </div>
      </header>
    </div>
  );
}

export default LoginApp;
