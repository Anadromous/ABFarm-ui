import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import AppConfig from '../../config/app-config';
import OktaSignIn from '@okta/okta-signin-widget';
import appConfig from '../../config/app-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  oktaSignin: any;

  constructor(@Inject(OKTA_AUTH) private oktaAuth:OktaAuth) {

    this.oktaSignin = new OktaSignIn(
      {
        logo: 'assets/images/logos/AppleBlossom_icon.png',
        baseUrl: appConfig.oidc.issuer.split('/oath2')[0],
        clientId: appConfig.oidc.clientId,
        redirectUri: appConfig.oidc.redirectURI,
        authParams: {
          pkce: true,
          issuer: appConfig.oidc.issuer,
          scopes: appConfig.oidc.scopes
        }
      }
    );
   }

  ngOnInit(): void {
    this.oktaSignin.remove;

    this.oktaSignin.renderEl({
      el: '#okta-signin-widget'},//same name as in div tag in login.component.html
      (response: any) => {
        if(response.state === 'SUCCESS'){
          this.oktaAuth.signInWithRedirect();
        }
      },
      (error: any) =>{
        throw error;
      }
    );
  }

}
