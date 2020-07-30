import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import AuthenticatedArea from '../AuthenticatedArea';
import { GoogleLoginBtn } from './styles';

const CLIENT_ID = '193354124028-k2rd17heq22o4ngf03tg1lfhlj84sf1q.apps.googleusercontent.com';

class Login extends Component {
  constructor(props) {
    super(props);
 
    const { cookies } = props;
    let authorization = cookies.get('pittaflix');
    this.state = { isLogined:  authorization !== undefined };
 
    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
  };

  login (response) {
    if(response.accessToken) {
      const { cookies } = this.props;
      let date = new Date();
      date.setDate(date.getDate() + 14);
      this.setState(state => ({ isLogined: true }));
      cookies.set('pittaflix', response.accessToken, { expires: date });
    }

    this.saveUserData(response.profileObj)
  };

  handleLoginFailure (response) {
    console.log('Login failed');
  };

  saveUserData(data) {
    localStorage.setItem('@pitta-flix/name', data.name);
    localStorage.setItem('@pitta-flix/imageUrl', data.imageUrl);
  };

  render() {
    return(
      <>
        { this.state.isLogined ?
          <AuthenticatedArea/>
          :
          <GoogleLoginBtn
            clientId={ CLIENT_ID }
            buttonText='Entrar'
            onSuccess={ this.login }
            onFailure={ this.handleLoginFailure }
            cookiePolicy={ 'single_host_origin' }
            responseType='code,token'
            theme='dark'
          />
        }
      </>
    );
  };
};

export default withCookies(Login);