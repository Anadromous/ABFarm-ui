import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: string = '';

  constructor(private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  ngOnInit(): void {
  //Subscribe to authentication state changes
  this.oktaAuthService.authState$.subscribe(
    (result) => {
      this.isAuthenticated=result.isAuthenticated!;
      this.getUserDetails();
    }
  )
  }

  getUserDetails() {
    if(this.isAuthenticated){
      //fetch the logged in user details. User full name is a property name
      this.oktaAuth.getUser().then(
          (res) => {
            this.userFullName = res.name as string;
            console.log("User from Okta: "+this.userFullName);
          }
      );
    }
  }

  logout(){
    //Termin Okta session and removes tokens
    this.oktaAuth.signOut();
  }

}
