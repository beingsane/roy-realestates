import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {userLoggedIn, userRegistered} from '../../actions/userAction'


export const AuthennticationPopUp = () => {
  const [loading, setLoading] = useState(false)
  const {error, errorLogin} = useSelector<any>(state => state.user)

  const [userDetails, setUserDetails] = useState({username: '', email: '', password: ''})

  const dispatch = useDispatch()

  const handleRegister = (e: any) => {
    e.preventDefault()
    const {username, email, password} = userDetails

    
    dispatch(userRegistered(username, email, password))
  } 
  const handleLogin =  async (e: any) => {
    e.preventDefault()
    const {email, password} = userDetails
     try{
      dispatch(userLoggedIn(email, password))
     }catch(error){
       console.log(error.response.data.message)
     }
      
      
  }


  const handleChange = (e: any) => {
    setUserDetails({...userDetails, [e.target.name] : e.target.value})
  }


    return (
        <>
    <div className="popup" id="sign-popup">
     
    <h3>Sign In to your Account</h3>
    {errorLogin && <p>{errorLogin}</p>}
    <div className="popup-form">
      <form onSubmit={handleLogin}>
        <div className="form-field">
          <input type="text" name="email" placeholder="Email" onChange={handleChange} value={userDetails.email} />
        </div>
        <div className="form-field">
          <input type="password" name="password" placeholder="Password" onChange={handleChange} value={userDetails.password}  />
        </div>
        <div className="form-cp">
          <div className="form-field">
            <div className="input-field">
              <input type="checkbox" name="ccc" id="cc1" />
              <label htmlFor="cc1">
                <span />
                <small>Remember me</small>
              </label>
            </div>
          </div>
          <a href="#" >Forgot Password?</a>
        </div>{/*form-cp end*/}
        <button type="submit" className="btn2">Sign In</button>
      </form>
      <a href="#"  className="fb-btn"> <i className="fa fa-facebook" />Sign In With Facebook</a>
    </div>
  </div>
  <div className="popup" id="register-popup">
    <h3>Register</h3>
    {error && <p>{error}</p>}
    <div className="popup-form">
      <form onSubmit={handleRegister}>
        <div className="form-field">
          <input type="text" name="username" placeholder="Username" onChange={handleChange} value={userDetails.username}  />
        </div>
        <div className="form-field">
          <input type="text" name="email" placeholder="Email"  onChange={handleChange} value={userDetails.email} />
        </div>
        <div className="form-field">
          <input type="password" name="password" placeholder="Password" onChange={handleChange} value={userDetails.password} />
        </div>
        <div className="form-cp">
          <div className="form-field">
            <div className="input-field">
              <input type="checkbox" name="ccc" id="cc2" />
              <label htmlFor="cc2">
                <span />
                <small>I agree with terms</small>
              </label>
            </div>
          </div>
          <a href="#"  className="signin-op">Have an account?</a>
        </div>
        <button type="submit" className="btn2">Register</button>
      </form>
    </div>
  </div>
  </>
    )
}