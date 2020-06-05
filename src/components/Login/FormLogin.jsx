import React from 'react'

import { faUser, faUserLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components'

const LoginForm = styled.div`
  background: var(--primary-gradient);
  margin: 1rem;
  padding: 2rem;
  padding-left: 0;

  .btn {
    padding: .8rem 1.5rem;
    border: none;
    border-radius: 4rem;
    background: #2B5876;
    color: whitesmoke;
    font-size: .7rem;
    font-family: var(--Montserrat);
    box-shadow: var(--primary-shadow);
    float: right;
    cursor: pointer;
  }

  form {
    margin-top: 6.5rem;

    .titles {
      margin-bottom: 2.2rem;

      h3, h6 {
        font-family: var(--Montserrat);
        padding: 0;
        margin: 0;
        padding-left: .5rem;
      }

      h6 {
        padding-left: 4.5rem;
        font-family: var(--Lobster);
        color: #444444D2;
      }
    }

    .form-group {
      text-align: left;
      border: 1px solid var(--border-color);
      margin-top: 1.5rem;
      margin-right: 0rem;
      border-radius: 3rem;
      width: 100%;
      padding: .4rem;

      .form-input {
        padding: .5rem 1rem;
        background: transparent;
        border: none;
        font-family: var(--Montserrat);
        font-size: .9rem;
        overflow: hidden;
        width: calc(100% - 65px);

      }

      input:focus{
        outline: none;
      }

      .input-icon {
        display: inline;
        color: var(--border-color);
        margin-left: 4px;
      }
    }

    .btn-login{
      margin-top: 3rem;
      padding: 1rem 0rem;
      margin-left: 0rem;
      width: 100%;
      font-size: 1rem;
    }
  }
` 

const FormLogin = () => {
  return (
    <LoginForm>
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
    </LoginForm>
  );
}
 
export default FormLogin;