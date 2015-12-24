System.register(['angular2/core', 'angular2/router', './login/login', './home/home', './edit/edit'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_1, home_1, edit_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (edit_1_1) {
                edit_1 = edit_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <!-- Navigation -->\n        <nav class=\"navbar navbar-default navbar-custom navbar-fixed-top\">\n            <div class=\"container-fluid\">\n                <!-- Brand and toggle get grouped for better mobile display -->\n                <div class=\"navbar-header page-scroll\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                        <a class=\"navbar-brand\" [routerLink]=\"['Home']\">faljseBlog</a>\n                </div>\n\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li>\n                              <a [routerLink]=\"['Home']\">Home</a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['Login']\">Login</a>\n                        </li>\n                        <li>\n                              <a [routerLink]=\"['Edit', {id:-1}]\">Edit</a>\n                        </li>\n                        <li>\n                             <a [routerLink]=\"['Edit', {id:-1}]\">Edit</a>\n                        </li>\n                    </ul>\n                </div>\n                <!-- /.navbar-collapse -->\n            </div>\n            <!-- /.container -->\n        </nav>\n      <router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_1.Home, useAsDefault: true },
                        { path: '/edit/:id', name: 'Edit', component: edit_1.Edit },
                        { path: '/login', name: 'Login', component: login_1.Login }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map