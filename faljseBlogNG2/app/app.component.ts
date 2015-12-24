import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Location, Router} from 'angular2/router';

import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {Login} from './login/login';
import {Home} from './home/home';
import {Edit} from './edit/edit';


@Component({
    selector: 'my-app',
    template: `  <h1>Component Router</h1>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['Login']">Login</a>
      <a [routerLink]="['Edit', {id:-1}]">Edit</a>
      <router-outlet></router-outlet>`,
    directives: [ ROUTER_DIRECTIVES ]
})

@RouteConfig([
    { path: '/',       name: 'Home', component: Home, useAsDefault: true },
    { path: '/edit/:id',  name: 'Edit',  component: Edit },
    { path: '/login',  name: 'Login',  component: Login }
])

export class AppComponent {
    constructor(public router: Router) {
    }
}

