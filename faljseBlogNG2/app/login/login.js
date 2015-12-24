System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login(router) {
                    this.router = router;
                }
                Login.prototype.login = function (event, username, password) {
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
                };
                Login.prototype.signup = function (event) {
                    event.preventDefault();
                    this.router.parent.navigateByUrl('/signup');
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [router_1.RouterLink],
                        template: "<div class=\"login jumbotron center-block\">\n    <h1>Login</h1>\n    <form role=\"form\" (submit)=\"login($event, username.value, password.value)\">\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" #username class=\"form-control\" id=\"username\" placeholder=\"Username\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        <a href=\"/signup\">Click here to Signup</a>\n    </form>\n</div>",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Login);
                return Login;
            })();
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.js.map