import {Component, View} from 'angular2/core';
import {Router, RouterLink, RouteParams} from 'angular2/router';
import {BlogEntry} from '../blog.service';
import {Blog} from "../blog.service";
import {BlogService} from "../blog.service";


@Component({
    selector: 'login',
    directives: [RouterLink],
    styleUrls: ['app/home/home.css'],
    styles: [`textarea#editorArea {
        width: 620px;
        height: 320px;
        border: 3px solid #cccccc;
        padding: 5px;
        font-family: Fixed, monospace;
     //   background-image: url(bg.gif);
        background-position: bottom right;
        background-repeat: no-repeat;
        }`,
        `.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
        .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
        .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
        .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
          }
     .selected { background-color: #EEE; color: #369; }
    `,
    `   #editorArea {
        position: relative;
        height: 440px;
        width: 420px;
    }`],
    template: `
    <header class="intro-header">

</header>

    <div class="login jumbotron center-block">
    <div class="row">
    <div class="col-xs-2">
    <ul class="heroes">
    <li *ngFor="#entry of entries" (click)="onSelect(entry)">
        <span class="badge">{{entry.id}}</span> {{entry.title}}
       </li>
       </ul>
    </div>
    <div class="col-xs-10">
            <form class="form-inline">
                <div class="form-group">
                    <label for="exampleInputName2">Title</label>
                    <input type="text" class="form-control" id="title" [(ngModel)]="entry.title">
                    <input type="checkbox" class="checkbox" id="published" value="published" [(ngModel)]="entry.published">published<br/>
              </div>
              </form>
        <textarea id="editorArea" [(ngModel)]="entry.text"></textarea>
        <button (click)="onSave(input, $event)"
        [disabled]="text === 'Save'">Save</button>
         <ul>
          <li *ngFor="#fileName of imageFilenames" (click)="onSelectImage(fileName)">
            {{ fileName }}
          </li>
        </ul>

    <div class="table table-striped" class="files" id="previews">
      <div id="template" class="file-row">
        <!-- This is used as the file preview template -->
        <div>
            <span class="preview"><img data-dz-thumbnail /></span>
        </div>
        <div>
            <p class="name" data-dz-name></p>
            <strong class="error text-danger" data-dz-errormessage></strong>
        </div>
        <div>
            <p class="size" data-dz-size></p>
            <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
              <div class="progress-bar progress-bar-success" style="width:0%;" data-dz-uploadprogress></div>
            </div>
        </div>
      </div>
    </div>
    <div id="upload" style="width: 300px;height:70px;border:dashed;">upload Files</div>

</div>

</div>`,
})
export class Edit {
    //[(ngModel)]="entry.text"
    private  entry:BlogEntry;
    private blogService:BlogService;
    private  entries: Array<BlogEntry>;
    private textarea: HTMLAreaElement;
    private imageFilenames: Array<String>;

    constructor(private _router: Router, private _routeParams:RouteParams, _blogService: BlogService) {
        this.blogService=_blogService;
    }

    loadFileNames(postID:number)
    {
        if(postID<0)
            return;
        this.blogService.getImages(postID).subscribe(res => this.imageFilenames = res);
    }

    ngOnInit() {
        this.entry=new BlogEntry;
        let id = +this._routeParams.get('id');
        this.blogService.getEntry(id).subscribe(res => {this.entry = res;
            this.loadDropzone(this.entry.id);});
        this.blogService.getEntries().subscribe(res => this.entries = res);
        this.loadFileNames(id);
        this.textarea=document.getElementById('editorArea');


    }
    onSave(event)
    {
        this.blogService.postEntry(this.entry)
            .subscribe(res => {
                this.entry =res;
                this._router.navigate( ['Edit', { id: this.entry.id }] );
            });
    }

    onSelectImage(fileName)
    {
        console.log(fileName);
        var text:String='![alt]('+this.blogService.getImageURL(this.entry.id,fileName)+ ' "txt")';
        this.insertAtCaret(this.textarea, text);
    }

    insertAtCaret(txtarea, text) {
        var scrollPos = txtarea.scrollTop;
        var caretPos = txtarea.selectionStart;

        var front = (txtarea.value).substring(0, caretPos);
        var back = (txtarea.value).substring(txtarea.selectionEnd, txtarea.value.length);
        txtarea.value = front + text + back;
        caretPos = caretPos + text.length;
        txtarea.selectionStart = caretPos;
        txtarea.selectionEnd = caretPos;
        txtarea.focus();
        txtarea.scrollTop = scrollPos;
    }

    onSelect(entry)
    {
        this._router.navigate( ['Edit', { id: entry.id }] );
    }

    loadDropzone(postID:number)
    {
        if(postID<1)
            return;
        var previewNode = document.querySelector("#template");
        previewNode.id = "";
        var previewTemplate = previewNode.parentNode.innerHTML;
        previewNode.parentNode.removeChild(previewNode);

        var dz = new Dropzone("div#upload", {
            url:  this.blogService.getUploadURL(),
            thumbnailWidth: 80,
            thumbnailHeight: 80,
            parallelUploads: 20,
            previewTemplate: previewTemplate,
            autoQueue: true, // Make sure the files aren't queued until manually added
            previewsContainer: "#previews", // Define the container to display the previews
            clickable: "div#upload" // Define the element that should be used as click trigger to select files.

        });
        dz.on('sending', function(file, xhr, formData){
            formData.append('JWT', 'bob');
            formData.append('entryID', postID);
        });
        dz.on('complete', function(file){
            dz.removeFile(file);
            this.loadFileNames(postID);
        }.bind(this));
    }

    login(event, username, password) {
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
    }

    signup(event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/signup');
    }
}