import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AmplifyService } from 'aws-amplify-angular';
import { Amplify } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private amplifyService: AmplifyService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.amplifyService
      .auth()
      .currentSession()
      .catch((error) => {
        this.redirectToLogin();
      });
  }

  redirectToLogin() {
    const config = Amplify.Auth.configure();

    const {
      domain,
      redirectSignIn,
      // redirectSignOut,
      responseType,
    } = config.oauth;
    console.log('🚀 - redirectToLogin - redirectSignIn', redirectSignIn);

    const clientId = config.userPoolWebClientId;

    const awsCognitoHostedUi = `https://${domain}/login?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectSignIn}`;

    window.location.href = awsCognitoHostedUi;
  }
}
