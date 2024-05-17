import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {

  constructor(private oauthService: OAuthService) {
    this.initLogin();
  }


  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: Constants.GOOGLE_CLIENT_ID,
      redirectUri: Constants.GOOGLE_REDIRECT_URL,
      scope: 'openid profile email',
      //configuration
    }

    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  getProfile() {
    let user=this.oauthService.getIdentityClaims();
    return user;
  }

}
