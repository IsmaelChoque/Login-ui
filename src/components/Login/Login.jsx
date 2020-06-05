import React from 'react'
import auth from '../../images/undraw_authentication_fsn5.svg'
import Wave from '../../images/Wave.png'

import { faDraftingCompass,  } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from 'styled-components'
import FormLogin from './FormLogin';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  .panel {
    width: 70%;
    height: 77%;
    box-shadow: var(--primary-gradient);

    .row {
      display: grid;
      grid-template-columns: 65% 35%;
      height: 100%;
      background: #FFF;
      
      .liquid {
        background: url('${Wave}');
        background-size: 100%;-webkit-background-size: 100%;
        background-repeat: no-repeat;
        h4 {
          text-align: left;
          padding: 0 2rem;
          color: whitesmoke;
          font-family: var(--Montserrat);
          
        }
        .owl-carousel {
          float: right;
          width: 100%;
          height: 80%;

          img{
            height: 100%; 
            width: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            padding-right: 3rem;
          }
        }

        .follow {
          margin-top: 0;
          padding: 0 1.4rem;
          font-family: var(--Lobster);
          color: whitesmoke;
          position: relative;
          font-size: .9rem;

          ::after {
            content: '';
            position: absolute;
            left: 73px;
            width: 50px;
            border: 1px solid whitesmoke;
            border-radius: 4rem;
            margin-top: .5rem;
          }

          svg:first-child{
            margin-left: 3rem;
          }
          
        }
      }
    }
  }
`

const Login = () => {
  return (
    <Container>
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
    </Container>
  );
}
 
export default Login;