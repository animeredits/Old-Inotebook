import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
// import s from '../Styles/Login.module.css' 
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      props.showAlert("Invalid Email and Password ", "danger")
    }

    const json = await response.json()
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Logged in  Successfully", "success")
      navigate('/Home')

    } else {
      props.showAlert("Invalid Email and Password ", "danger")
    }
  }
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
        <div className='mt-5'>
          <h3 className='my-3'>Log in to your account</h3>
          <h4>Don't have an account? <Link to="/SignUp" style={{textDecoration:"none"}}>Sign Up</Link></h4>
          <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label my-2">Email address</label>
        <input type="email" className="form-control" id="email" name='email'value={credentials.email}  onChange={onchange} aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="Password" name='password' value={credentials.password} onChange={onchange} />
      </div>
      <button type="submit" className="btn btn-primary" >Log in</button>
    </form>
        </div> 
  //   <div>
  //     <main className="box">
  //       <form onSubmit={handleSubmit} className="form">
  //         <h3>Log in</h3>
  //         <div className="email">
  //           <input type="email" className="form-control" id="email" placeholder='Email' name='email' value={credentials.email} onChange={onchange} aria-describedby="emailHelp" />
  //           <ion-icon className="person" name="person"></ion-icon>
  //         </div>
  //         <div className="password">
  //           <input type="password" className="form-control" id="Password" placeholder='Password' name='password' value={credentials.password} onChange={onchange} />
  //           <ion-icon name="lock-closed"></ion-icon>
  //         </div>
      
  //         <button type="submit" className="btn-box">Log in</button>
  //         <div className="register">
  //           <p>
  //             Don't have an account?
  //             <Link to="/SignUp">Register</Link>
  //           </p>
  //         </div>
  //       </form>
  //     </main>
  //   </div>
   )
}

export default Login
