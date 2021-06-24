import React from 'react';

const RegisterPage = () => {

  const registerUser = () => {
      const username = document.getElementById('username').value
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      const passwordConfirm = document.getElementById('passwordConfirm').value
      if(!email || !username){
        document.getElementById('error').innerText = 'Please enter an email and username'
      } else if(!password || !passwordConfirm){
        document.getElementById('error').innerText = 'Please enter an password and password confirm'
      }else if (password !== passwordConfirm){
        document.getElementById('error').innerText = 'Both Password Fields Must Match To Register'
      } else if( email && password === passwordConfirm){
        fetch('/register', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({ username, email, password })
        }).then((data) => {data.json})
        .then((userInfo) => {
          console.log(userInfo)
        })
      }
  }

  return(
    <div>
      <h1>Register Page</h1>
      
        <input id='username' placeholder='Enter Username'></input>
        <input id='email' placeholder='Enter Email'></input>
        <input id='password' placeholder='Enter Password'></input>
        <input id='passwordConfirm' placeholder='Confirm You Password'></input>
        <button onClick={registerUser}>Submit</button>
        <p id='error'></p>
      
    </div>
  );


}

export default RegisterPage;