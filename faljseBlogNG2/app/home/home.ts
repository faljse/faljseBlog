import {Component, View} from 'angular2/core';
import {Router, RouterLink, RouteParams} from 'angular2/router';
import {BlogEntry} from '../blog.service';
import {BlogService} from "../blog.service";


@Component({
    selector: 'home',
    styleUrls: ['app/home/home.css',
        'app/home/lightbox.css'],
    templateUrl: "app/home/home.html",
    directives: [RouterLink]
})

export class Home {
    private blogService:BlogService;
    private  entries: Array<BlogEntry>;
    private renderer;
    private postID; //Hack for renderer;




    constructor(private _router: Router, private _routeParams:RouteParams, _blogService: BlogService) {
        this.blogService=_blogService;
        this.renderer = new marked.Renderer();
        this.initMarked(this.renderer);
    }

    private mDown(entry)
    {
        this.postID=entry.id;
        if(entry.text!=null)
        {
            return marked(entry.text, { renderer: this.renderer });
        }
    }


    ngOnInit() {
        this.blogService.getPublicEntries().subscribe(res => {this.entries = res;});
    }

    signup(event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/signup');
    }

    initMarked(renderer)
    {
        var self=this;
        renderer.image = function(href, title, text) {
            href=self.blogService.getImageURL(self.postID, href);
            var out = '<img src="' +href + '" alt="' + text + '"';
            if (title) {
                out += ' title="' + title + '"';
            }
            out += this.options.xhtml ? '/>' : '>';
            //console.log(out);
            return out;
        };

    }
}

