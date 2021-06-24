import React from 'react';

const LoginPage = () => {

  const loginUser = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ email, password })
    }).then((data) => {data.json})
    .then((userInfo) => {
      console.log(userInfo)
    })
  }

  const oAuthLogin = () => {
    fetch('/auth/google')
    .then((data) => {data.json})
    .then((userInfo) => {
      console.log(userInfo)
    })
  }

  return(
    <div>
      <h1>Login Page</h1>
      
        <input id='email' placeholder='Enter Email'></input>
        <input id='password' placeholder='Enter Password'></input>
        <button onClick={loginUser}>Submit</button>
        <a href='/auth/google'>Google OAuth</a>
      
      
    </div>
  );


}

export default LoginPage;