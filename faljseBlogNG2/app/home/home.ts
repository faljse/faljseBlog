import {Component, View} from 'angular2/core';
import {Router, RouterLink, RouteParams} from 'angular2/router';
import {BlogEntry} from '../blog.service';
import {BlogService} from "../blog.service";


@Component({
    selector: 'home',
    styleUrls: ['app/home/home.css'],
    templateUrl: "app/home/home.html",
    directives: [RouterLink]
})

export class Home {
    private blogService:BlogService;
    private  entries: Array<BlogEntry>;

    constructor(private _router: Router, private _routeParams:RouteParams, _blogService: BlogService) {
        this.blogService=_blogService;
    }

    private mDown(html:string)
    {
        if(html!=null)
            return markdown.toHTML(html);
        //return html;
    }


    ngOnInit() {
        this.blogService.getPublicEntries().subscribe(res => {this.entries = res;});
    }

    signup(event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/signup');
    }
}