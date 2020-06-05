import React from 'react'

import { faUser, faUserLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components'


const FormLogin = () => {
  return (
    <div>
      <button className="btn btn-signup">Sign Up</button>
      <form>
        <div className="titles">
          <h6>We keep everything</h6>
          <h3>Ready to Login</h3>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" className="form-input" />
          <div className="input-icon">
            <FontAwesomeIcon icon={faUser}/>
          </div>
        </div>

        <div className="form-group">
          <input type="password" placeholder="Password" className="form-input" />
          <div className="input-icon">
            <FontAwesomeIcon icon={faUserLock}/>
          </div>
        </div>

        <button type="submit" className="btn btn-login">Login</button>
      </form>
    </div>
  );
}
 
export default FormLogin;