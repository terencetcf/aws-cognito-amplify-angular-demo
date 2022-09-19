import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    region: environment.cognito.region, // REQUIRED - Amazon Cognito Region
    userPoolId: environment.cognito.userPoolId,
    userPoolWebClientId: environment.cognito.userPoolWebClientId,
    oauth: {
      domain: environment.cognito.domain,

      // Authorized scopes
      scope: ['email', 'openid'],

      // Callback URL
      redirectSignIn: 'http://localhost:4200/authenticated',

      // Sign out URL
      redirectSignOut: 'http://localhost:4200',

      // 'code' for Authorization code grant,
      // 'token' for Implicit grant
      responseType: 'code',

      // optional, for Cognito hosted ui specified options
      options: {
        // Indicates if the data collection is enabled to support Cognito advanced security features.
        // By default, this flag is set to true.
        AdvancedSecurityDataCollectionFlag: false,
      },
    },
  },
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
