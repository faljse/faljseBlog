System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, core_2, http_1;
    var BlogEntry, BlogService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            BlogEntry = (function () {
                function BlogEntry() {
                }
                BlogEntry.prototype.getHTML = function () {
                    return markdown.toHTML(text);
                };
                return BlogEntry;
            })();
            exports_1("BlogEntry", BlogEntry);
            BlogService = (function () {
                function BlogService(http) {
                    this.baseURL = 'http://localhost:8080/api/';
                    this.http = http;
                }
                BlogService.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                BlogService.prototype.logResult = function (data) {
                    console.info('Result: ' + data);
                };
                BlogService.prototype.getUploadURL = function () {
                    return this.baseURL + 'admin/uploadImage';
                };
                BlogService.prototype.getImageURL = function (postID, fileName) {
                    return this.baseURL + 'image/' + postID + '/' + fileName;
                };
                BlogService.prototype.postEntry = function (entry) {
                    var headers = new http_1.Headers();
                    console.log("pre save: " + JSON.stringify(entry));
                    headers.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:8080/api/admin/write', JSON.stringify(entry), {
                        headers: headers })
                        .map(function (res) { return res.json(); });
                    //.subscribe(
                    //    data => this.logResult(data),
                    //    err => this.logError(err),
                    //    () => console.log(this.result)
                    //);
                };
                BlogService.prototype.getEntry = function (id) {
                    console.log('getEntry(): ' + id);
                    return this.http.get('http://localhost:8080/api/admin/read/' + id)
                        .map(function (res) { return res.json(); });
                    //.subscribe(
                    //    data => this.result = new Array<BlogEntry>(data),
                    //    err => this.logError(err),
                    //    () => console.log(this.result.length)
                    //);
                };
                BlogService.prototype.getEntries = function () {
                    console.log('getEntries()');
                    return this.http.get('http://localhost:8080/api/admin/list.json')
                        .map(function (res) { return res.json(); });
                };
                BlogService.prototype.getPublicEntries = function () {
                    console.log('getPublicEntries()');
                    return this.http.get('http://localhost:8080/api/entries.json')
                        .map(function (res) { return res.json(); });
                };
                BlogService.prototype.getImages = function (postID) {
                    console.log('getImages()');
                    return this.http.get('http://localhost:8080/api/admin/listImages/' + postID)
                        .map(function (res) { return res.json(); });
                };
                BlogService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_2.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BlogService);
                return BlogService;
            })();
            exports_1("BlogService", BlogService);
        }
    }
});
//# sourceMappingURL=blog.service.js.map