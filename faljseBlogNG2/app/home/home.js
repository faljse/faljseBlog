System.register(['angular2/core', 'angular2/router', "../blog.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, blog_service_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home(_router, _routeParams, _blogService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.blogService = _blogService;
                }
                Home.prototype.mDown = function (html) {
                    if (html != null)
                        return markdown.toHTML(html);
                    //return html;
                };
                Home.prototype.ngOnInit = function () {
                    var _this = this;
                    this.blogService.getPublicEntries().subscribe(function (res) { _this.entries = res; });
                };
                Home.prototype.signup = function (event) {
                    event.preventDefault();
                    this.router.parent.navigateByUrl('/signup');
                };
                Home = __decorate([
                    core_1.Component({
                        selector: 'home',
                        styleUrls: ['app/home/home.css'],
                        templateUrl: "app/home/home.html",
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, blog_service_1.BlogService])
                ], Home);
                return Home;
            })();
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=home.js.map