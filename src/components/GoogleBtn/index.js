import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '';

class GoogleBtn extends Component {
  constructor(props) {
   super(props);

   this.state = {
     isLogined: false,
     accessToken: ''
   };

   this.login = this.login.bind(this);
   this.handleLoginFailure = this.handleLoginFailure.bind(this);
   this.logout = this.logout.bind(this);
   this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
 }

 login (response) {
   if(response.accessToken){
     this.setState(state => ({
       isLogined: true,
       accessToken: response.accessToken
     }));
   }
 }

 logout (response) {
   this.setState(state => ({
     isLogined: false,
     accessToken: ''
   }));
 }

 handleLoginFailure (response) {
   console.log('Failed to log in');
 }

 handleLogoutFailure (response) {
   console.log('Falha ao sair');
 }

 render() {
   return (
   <>
     { this.state.isLogined ?
       <GoogleLogout
         clientId={ CLIENT_ID }
         buttonText='Sair'
         onLogoutSuccess={ this.logout }
         onFailure={ this.handleLogoutFailure }
         theme='dark'
       >
       </GoogleLogout>: <GoogleLogin
         clientId={ CLIENT_ID }
         buttonText='Entrar'
         onSuccess={ this.login }
         onFailure={ this.handleLoginFailure }
         cookiePolicy={ 'single_host_origin' }
         responseType='code,token'
         theme='dark'
       />
     }
     { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null }

   </>
   )
 }
}

export default GoogleBtn;
