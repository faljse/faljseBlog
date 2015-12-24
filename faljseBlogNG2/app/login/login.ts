import {Component, View} from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';

@Component({
    selector: 'login',
    directives: [RouterLink],
    template: `<div class="login jumbotron center-block">
    <h1>Login</h1>
    <form role="form" (submit)="login($event, username.value, password.value)">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" #username class="form-control" id="username" placeholder="Username">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" #password class="form-control" id="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
        <a href="/signup">Click here to Signup</a>
    </form>
</div>`,
})
export class Login {
    constructor(public router: Router) {
    }

    login(event, username, password) {
        event.preventDefault();
        console.log(username);
        //window.fetch('http://localhost:3001/sessions/create', {
        //        method: 'POST',
        //        headers: {
        //            'Accept': 'application/json',
        //            'Content-Type': 'application/json'
        //        },
        //        body: JSON.stringify({
        //            username, password
        //        })
        //    })
        //    .then(status)
        //    .then(json)
        //    .then((response:any) => {
        //        localStorage.setItem('jwt', response.id_token);
        //        this.router.parent.navigateByUrl('/home');
        //    })
        //    .catch((error) => {
        //        alert(error.message);
        //        console.log(error.message);
        //    });
    }

    signup(event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/signup');
    }
}