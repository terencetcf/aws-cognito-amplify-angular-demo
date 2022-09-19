import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Hub } from 'aws-amplify';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss'],
})
export class AuthenticatedComponent implements OnInit {
  constructor(private router: Router) {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          console.log('Authenticated...');
          console.log('event', event);
          console.log('data', data);
          this.router.navigate(['']);

          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Error', data);
          break;
      }
    });
  }

  ngOnInit() {}
}
