System.register(['./app.component', 'angular2/platform/browser', 'angular2/http', 'angular2/router', 'angular2/core', "./blog.service", 'angular2/src/core/linker/view_pool'], function(exports_1) {
    var app_component_1, browser_1, http_1, router_1, core_1, router_2, blog_service_1, view_pool_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            },
            function (view_pool_1_1) {
                view_pool_1 = view_pool_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy }),
                blog_service_1.BlogService,
                core_1.provide(view_pool_1.APP_VIEW_POOL_CAPACITY, { useValue: 0 })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map