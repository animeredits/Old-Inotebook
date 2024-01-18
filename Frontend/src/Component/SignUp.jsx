import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
const SignUp = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch('https://server-ijep.onrender.com/api/auth/createuser', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      props.showAlert("Change Your Email", "danger")
      return;
    }

    const json = await response.json()

    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/')
      props.showAlert("Account Created Successfully", "success")
    } else {
      props.showAlert("Invalid Details", "danger")
    }
  }
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
        <div className='container mt-5'>
          <h3>Create your account</h3>
          <h4>Have an account? <Link to="/Login" style={{textDecoration:"none"}}>Log in now</Link></h4>
        <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" name='name'  onChange={onchange} required aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <div id="emailHelp" className="form-text " style={{color:"rgb(197, 197, 197)"}}>We recommend using your work email. </div>
      <input type="email" className="form-control" id="email" name='email' onChange={onchange} required aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="Password" onChange={onchange} minLength={5} required name='password'  />
    </div>
    <button type="submit" className="btn btn-primary" >Sign Up</button>
    </form>
      </div> 
    // <div>
    //   <main className="box">
    //     <form onSubmit={handleSubmit} className="form">
    //       <h3>Log in</h3>
    //       <div className='name'>
    //         <input type="text" className="form-control" id="name" placeholder='Name' name='name' onChange={onchange} required aria-describedby="emailHelp" />
    //       </div>
    //       <div className="email">
    //         <input type="email" className="form-control" id="email" placeholder='Email' name='email' value={credentials.email} onChange={onchange} aria-describedby="emailHelp" />
    //         <ion-icon name="person"></ion-icon>
    //       </div>
    //       <div className="password">
    //         <input type="password" className="form-control" id="Password" placeholder='Password' name='password' value={credentials.password} onChange={onchange} />
    //         <ion-icon name="lock-closed"></ion-icon>
    //       </div>
          /* <div className="buttons">
    <div className="remember">
      <input type="checkbox" className="checkbox" />
      <p>Remember me</p>
    </div>
    <p>Forgot password?</p>
  </div>  */
    //       <button type='submit' className="btn-box"><a>Sign up</a></button>
    //       <div className="register">
    //         <p>
    //           Have an account?
    //           <Link to="/Login"><span>Login</span></Link>
    //         </p>
    //       </div>
    //     </form>
    //   </main>
    // </div>
  )
}

export default SignUp
