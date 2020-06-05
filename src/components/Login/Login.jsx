import React from 'react'
import auth from '../../images/undraw_authentication_fsn5.svg'
import Wave from '../../images/Wave.png'

import { faDraftingCompass,  } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from 'styled-components'
import FormLogin from './FormLogin';



const Login = () => {
  return (
    <div>
      <div className="panel">
        <div className="row">
          <div className="col liquid">
            <h4><FontAwesomeIcon icon={faDraftingCompass} /> Ready Co.</h4>

            <div className="owl-carousel owl-theme">
              {<img src={auth} alt="login_img"/>}
            </div>

            <div className="follow">
              Follow us <FontAwesomeIcon icon={faFacebookF} /> <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
          <FormLogin/>
        </div>
      </div>
    </div>
  );
}
 
export default Login;