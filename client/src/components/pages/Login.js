import React, {useState} from 'react';
//var score = 0
//var wins = 0

function Login() {

  const [state, setState] = useState({
    email: '',
    password: '',
  });

 
  console.log('Login State!!!', state)

  const handleEmail = (event) => {
    // console.log('we are typing!!!', event.target.value)
    setState({...state, email: event.target.value})
  }

  const handlePassword = (event) => {
    // console.log('we are typing!!!', event.target.value)
    setState({...state, password: event.target.value})
  }
  const handleLoginBtn = (event) => {
    // console.log('we are typing!!!', event.target.value)
    console.log('Go logged in with this info!', state)

    // go to Graphql mutatino stuff!!
  }

  return (
    <div>
      <h1>
        Login Page
      </h1>
      <p>email</p>
      <input onChange={handleEmail} ></input>
      <p>password</p>
      <input onChange={handlePassword} ></input>
      <button onClick={handleLoginBtn}>Login!</button>
    </div>
  )
}

export default Login;