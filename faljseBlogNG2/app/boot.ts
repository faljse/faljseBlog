import {AppComponent} from './app.component'
import {bootstrap}    from 'angular2/platform/browser'
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide}           from 'angular2/core';
import {LocationStrategy,
    HashLocationStrategy} from 'angular2/router';
import {BlogService} from "./blog.service";
import {APP_VIEW_POOL_CAPACITY} from 'angular2/src/core/linker/view_pool';



bootstrap(AppComponent,[
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass : HashLocationStrategy}),
    BlogService,
    provide(APP_VIEW_POOL_CAPACITY, {useValue: 0})
]);