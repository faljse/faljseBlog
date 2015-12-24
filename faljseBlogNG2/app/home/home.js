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
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home(router) {
                    this.router = router;
                }
                Home.prototype.login = function (event, username, password) {
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
                };
                Home.prototype.signup = function (event) {
                    event.preventDefault();
                    this.router.parent.navigateByUrl('/signup');
                };
                Home = __decorate([
                    core_1.Component({
                        selector: 'home'
                    }),
                    core_1.View({
                        template: "<div class=\"home jumbotron center-block\">\n    <h1>Home</h1>\n    blog entries;\n\n</div>",
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Home);
                return Home;
            })();
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=home.js.map