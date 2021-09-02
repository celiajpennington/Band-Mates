import React, {useState} from 'react';


function Signup() {

  const [state, setState] = useState({
    email: '',
    password: '',
    userName:''
  });

  const handleEmail = (event) => {
    // console.log('we are typing!!!', event.target.value)
    setState({...state, email: event.target.value})
  }

  const handlePassword = (event) => {
    // console.log('we are typing!!!', event.target.value)
    setState({...state, password: event.target.value})
  }

  const handleuserName = (event) => {
    // console.log('we are typing!!!', event.target.value)
    setState({...state, userName: event.target.value})
  }

  const handleSaveBtn = (event) => {
    // console.log('we are typing!!!', event.target.value)
    console.log('Go signup with this info!', state)
    // go to Graphql mutatino stuff!!
    
  }

  return (
    <div>
      <h1>
        Sign Up Page
      </h1>
      <p>email</p>
      <input onChange={handleEmail} ></input>
      <p>password</p>
      <input onChange={handlePassword} ></input>
      <p>username</p>
      <input onChange={handleuserName} ></input>
      <button onClick={handleSaveBtn}>Signup!</button>
    </div>
  )
}

export default Signup;