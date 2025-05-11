import React from 'react';

import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login =()=>
{
  const nav1=useNavigate()
  const handleRegister=()=>{
    nav1("/Register")
  }

  return (
    <div className="input-page">

      <center>
        <form>
            <h1 className="head">WELCOME TO SPOTSAVER</h1>
          <div className="full">
            <div className="input">
              <h1 style={{ color: 'white' }}>Login</h1>
              <input type="text" placeholder="Username" required /><br />
            </div>
            <div className="input">
              <input type="email" placeholder="Email" required /><br />
            </div>
            <div className="input">
              <input type="password" placeholder="Password" required />
            </div>
            <a href="#" style={{ color: '#540530 ' }}>Forget Password</a><br /><br />
            <button style={{ width: '100px', height: '30px' }}>Login</button><br />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', color: 'black' }}>

              <h3 style={{ margin: 0 ,color:'#540530 '}}>Don't have an account?</h3>
              <button onClick={handleRegister}>Register</button>

            </div>
          </div>
        </form>
      </center>
    </div>
  );
}

export default Login;