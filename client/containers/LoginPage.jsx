import React from 'react';

const LoginPage = () => {

  const loginUser = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ username, password })
    }).then((data) => {data.json})
    .then((userInfo) => {
      console.log(userInfo)
    })
  }

  const oAuthLogin = () => {
    fetch('/google')
    .then((data) => {data.json})
    .then((userInfo) => {
      console.log(userInfo)
    })
  }

  return(
    <div>
      <h1>Login Page</h1>
      
        <input id='username' placeholder='Enter Username'></input>
        <input id='password' placeholder='Enter Password'></input>
        <button onClick={loginUser}>Submit</button>
        <button onClick={oAuthLogin}>Google OAuth</button>
      
      
    </div>
  );


}

export default LoginPage;