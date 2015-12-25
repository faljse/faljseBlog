import {Injectable} from 'angular2/core';
import {Inject} from 'angular2/core';
import {Component, View} from 'angular2/core';
import { Http,HTTP_PROVIDERS, Response, Headers} from 'angular2/http';
import 'rxjs/add/operator/map'


export class BlogEntry {
    id: number;
    title: string;
    text: string;
    files: Array<string>;
    created: number;
    modified: number;
}

export interface Blog {
    entries:Array<BlogEntry>;
}


@Injectable()
export class BlogService {
    http: Http;
    private result: Array<BlogEntry>;
    private baseURL :string ='http://localhost:8080/api/';

    constructor(@Inject(Http) http:Http) {
        this.http=http;
    }
    logError(err) {
        console.error('There was an error: ' + err);
    }

    logResult(data) {
        console.info('Result: ' + data);
    }

    getUploadURL()
    {
        return this.baseURL+'admin/uploadImage';
    }
    getImageURL(postID:number, fileName: String)
    {
        return this.baseURL+'image/'+postID+'/'+fileName;
    }

    postEntry(entry:BlogEntry)
    {
            var headers = new Headers();
            console.log("pre save: "+JSON.stringify(entry));
            headers.append('Content-Type', 'application/json');
            return this.http.post(this.baseURL+'admin/write', JSON.stringify(entry),{
                            headers: headers})
                            .map(res => res.json());
                            //.subscribe(
                            //    data => this.logResult(data),
                            //    err => this.logError(err),
                            //    () => console.log(this.result)
                            //);
    }

    getEntry(id:number)
    {
        console.log('getEntry(): '+id);
         return   this.http.get(this.baseURL+'admin/read/'+id)
                .map(res => res.json());
    }

    getEntries() {
        console.log('getEntries()');
            return this.http.get(this.baseURL+'admin/list.json')
                .map(res => res.json());
    }

    getPublicEntries()
    {
        console.log('getPublicEntries()');
        return this.http.get(this.baseURL+'entries.json')
            .map(res => res.json());
    }

    getImages(postID:number) {
        console.log('getImages()');
        return this.http.get(this.baseURL+'admin/listImages/'+postID)
            .map(res => res.json());
    }
}


