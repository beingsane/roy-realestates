import React from 'react'

export const AuthennticationPopUp = () => {
    return (
        <>
    <div className="popup" id="sign-popup">
    <h3>Sign In to your Account</h3>
    <div className="popup-form">
      <form>
        <div className="form-field">
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className="form-field">
          <input type="text" name="password" placeholder="Password" />
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
    <div className="popup-form">
      <form>
        <div className="form-field">
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className="form-field">
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className="form-field">
          <input type="text" name="password" placeholder="Password" />
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