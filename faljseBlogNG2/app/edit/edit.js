System.register(['angular2/core', 'angular2/router', '../blog.service', "../blog.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, blog_service_1, blog_service_2;
    var Edit;
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
            },
            function (blog_service_2_1) {
                blog_service_2 = blog_service_2_1;
            }],
        execute: function() {
            Edit = (function () {
                function Edit(_router, _routeParams, _blogService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.blogService = _blogService;
                }
                Edit.prototype.loadFileNames = function (postID) {
                    var _this = this;
                    if (postID < 0)
                        return;
                    this.blogService.getImages(postID).subscribe(function (res) { return _this.imageFilenames = res; });
                };
                Edit.prototype.ngOnInit = function () {
                    var _this = this;
                    this.entry = new blog_service_1.BlogEntry;
                    var id = +this._routeParams.get('id');
                    this.blogService.getEntry(id).subscribe(function (res) {
                        _this.entry = res;
                        _this.loadDropzone(_this.entry.id);
                    });
                    this.blogService.getEntries().subscribe(function (res) { return _this.entries = res; });
                    this.loadFileNames(id);
                };
                Edit.prototype.onSave = function (event) {
                    var _this = this;
                    this.blogService.postEntry(this.entry)
                        .subscribe(function (res) {
                        _this.entry = res;
                        _this._router.navigate(['Edit', { id: _this.entry.id }]);
                    });
                };
                Edit.prototype.onSelect = function (entry) {
                    this._router.navigate(['Edit', { id: entry.id }]);
                };
                Edit.prototype.loadDropzone = function (postID) {
                    if (postID < 1)
                        return;
                    var previewNode = document.querySelector("#template");
                    previewNode.id = "";
                    var previewTemplate = previewNode.parentNode.innerHTML;
                    previewNode.parentNode.removeChild(previewNode);
                    var dz = new Dropzone("div#upload", {
                        url: this.blogService.getUploadURL(),
                        thumbnailWidth: 80,
                        thumbnailHeight: 80,
                        parallelUploads: 20,
                        previewTemplate: previewTemplate,
                        autoQueue: true,
                        previewsContainer: "#previews",
                        clickable: "div#upload" // Define the element that should be used as click trigger to select files.
                    });
                    dz.on('sending', function (file, xhr, formData) {
                        formData.append('JWT', 'bob');
                        formData.append('entryID', postID);
                    });
                    dz.on('complete', function (file) {
                        dz.removeFile(file);
                        this.loadFileNames(postID);
                    }.bind(this));
                };
                Edit.prototype.login = function (event, username, password) {
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
                Edit.prototype.signup = function (event) {
                    event.preventDefault();
                    this.router.parent.navigateByUrl('/signup');
                };
                Edit = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [router_1.RouterLink],
                        styles: ["textarea#editorArea {\n        width: 620px;\n        height: 320px;\n        border: 3px solid #cccccc;\n        padding: 5px;\n        font-family: Fixed, monospace;\n     //   background-image: url(bg.gif);\n        background-position: bottom right;\n        background-repeat: no-repeat;\n        }",
                            ".heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n        .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n        .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n        .heroes .badge {\n        font-size: small;\n        color: white;\n        padding: 0.1em 0.7em;\n        background-color: #369;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -1px;\n          }\n     .selected { background-color: #EEE; color: #369; }\n    ",
                            "   #editorArea {\n        position: relative;\n        height: 440px;\n        width: 420px;\n    }"],
                        template: "<div class=\"login jumbotron center-block\">\n    <div class=\"row\">\n    <div class=\"col-xs-2\">\n    <ul class=\"heroes\">\n    <li *ngFor=\"#entry of entries\" (click)=\"onSelect(entry)\">\n        <span class=\"badge\">{{entry.id}}</span> {{entry.title}}\n       </li>\n       </ul>\n    </div>\n    <div class=\"col-xs-10\">\n    <textarea id=\"editorArea\" [(ngModel)]=\"entry.text\"></textarea>\n    <button (click)=\"onSave(input, $event)\"\n    [disabled]=\"text === 'Save'\">Save</button>\n     <ul>\n      <li *ngFor=\"#fileName of imageFilenames\">\n        {{ fileName }}\n      </li>\n    </ul>\n\n    <div class=\"table table-striped\" class=\"files\" id=\"previews\">\n      <div id=\"template\" class=\"file-row\">\n        <!-- This is used as the file preview template -->\n        <div>\n            <span class=\"preview\"><img data-dz-thumbnail /></span>\n        </div>\n        <div>\n            <p class=\"name\" data-dz-name></p>\n            <strong class=\"error text-danger\" data-dz-errormessage></strong>\n        </div>\n        <div>\n            <p class=\"size\" data-dz-size></p>\n            <div class=\"progress progress-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\">\n              <div class=\"progress-bar progress-bar-success\" style=\"width:0%;\" data-dz-uploadprogress></div>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"upload\" style=\"width: 300px;height:70px;border:dashed;\">upload Files</div>\n\n</div>\n\n</div>",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, blog_service_2.BlogService])
                ], Edit);
                return Edit;
            })();
            exports_1("Edit", Edit);
        }
    }
});
//# sourceMappingURL=edit.js.map