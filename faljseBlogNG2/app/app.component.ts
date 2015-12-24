import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Location, Router} from 'angular2/router';

import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {Login} from './login/login';
import {Home} from './home/home';
import {Edit} from './edit/edit';


@Component({
    selector: 'my-app',
    template: `
    <!-- Navigation -->
        <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                        <a class="navbar-brand" [routerLink]="['Home']">faljseBlog</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                              <a [routerLink]="['Home']">Home</a>
                        </li>
                        <li>
                            <a [routerLink]="['Login']">Login</a>
                        </li>
                        <li>
                              <a [routerLink]="['Edit', {id:-1}]">Edit</a>
                        </li>
                        <li>
                             <a [routerLink]="['Edit', {id:-1}]">Edit</a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container -->
        </nav>
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

