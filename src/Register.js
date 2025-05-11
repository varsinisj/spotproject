import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const nav1=useNavigate()
  const handleHome=()=>{
    nav1("/Home")
  }
  return (
    <div className='wh'>
      <h1 style={{marginLeft:'600px',marginTop:'20px' ,color:'#3e0424 '}}>WELCOME TO SPOT SAVER</h1>
    <div className="Box">
      <table className='up'>

    <tr><td><label style={{ fontWeight: 'bold', fontSize: '14px' }} >NAME:</label></td>
    <td><input className="Name"></input></td></tr>
    <tr><td><label style={{ fontWeight: 'bold', fontSize: '14px' }}>EMAIL:</label></td>
    <td><input className="Email"></input></td></tr>
    <tr><td><label style={{ fontWeight: 'bold', fontSize: '14px' }} >PASSWORD:</label></td>
    <td><input className="pass"></input></td></tr>
    <tr><td><label style={{ fontWeight: 'bold', fontSize: '14px' }}>CONFIRM PASSWORD:</label></td>
    <td><input className="cpass"></input></td></tr>





    </table>
    <div className='divv'>
    <tr><td><button  className='but' style={{ fontWeight: 'bold', fontSize: '14px',boxShadow:'1px 1px 1px 1px black' }}>Sign up with GOOGLE</button></td>        
    </tr>
    <tr><td><button className='butt' style={{ fontWeight: 'bold', fontSize: '14px',boxShadow:'1px 1px 1px 1px black'}}onClick={handleHome} >SIGN UP</button></td></tr>
    </div>
    </div>
    </div>
  )
}


export default Register