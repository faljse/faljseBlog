import {Component, View} from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';



@Component({
    selector: 'home'
})

@View({
    template: `<div class="home jumbotron center-block">
    <h1>Home</h1>
    blog entries;

</div>`,
    directives: [RouterLink]
})

export class Home {
    constructor(public router: Router) {
    }

    login(event, username, password) {
        event.preventDefault();
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