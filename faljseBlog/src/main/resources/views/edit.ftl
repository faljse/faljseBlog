<#-- @ftlvariable name="" type="views.EntriesView" -->
<html>
<head>
    <title>faljseBlog</title>
    <link rel="stylesheet" href="${basePath}assets/clean-blog.min.css">
    <link rel="stylesheet" href="${basePath}assets/bootstrap.min.css">
    <link rel="stylesheet" href="${basePath}assets/clean-blog.min.css">
    <link rel="stylesheet" href="${basePath}assets/bootstrap.min.css">
    <link rel="stylesheet" href="${basePath}assets/app.css">
    <link rel="stylesheet" href="${basePath}assets/dropzone.css">
    <link rel="stylesheet" href="${basePath}assets/cobalt.css">

    <script src="${basePath}assets/es6-promise.min.js"></script>
    <script src="${basePath}assets/fetch.js"></script>

    <#--codemirror-->
    <link rel="stylesheet" href="${basePath}assets/codemirror/lib/codemirror.css">
    <link rel="stylesheet" href="${basePath}assets/codemirror/theme/cobalt.css">
    <script src="${basePath}assets/codemirror/lib/codemirror.js"></script>
    <script src="${basePath}assets/codemirror/mode/javascript/javascript.js"></script>
    <script src="${basePath}assets/codemirror/mode/markdown/markdown.js"></script>
    <#--/codemirror-->


    <script src="${basePath}assets/dropzone.js"></script>
</head>
<body>
<#include "includes/navigation.ftl">
<header class="intro-header">
</header>
<!-- Main Content -->
<div class="login jumbotron center-block">
    <div class="row">
        <div class="col-xs-2">
            <ul class="heroes">
            <#list entries as e>
                <li onclick="onSelect(this)">
                    <a href="${basePath}api/admin/edit/${e.id}">
                        <span class="badge">${e.id}</span> ${e.title}
                    </a>
                </li>
            </#list>
            </ul>
        </div>
        <div class="col-xs-10">
            <form class="form-inline">
                <div class="form-group">
                    <input type="text" class="form-control" id="title" value="${(entry.title)!}">
                    <label for="title">id: ${(entry.id)!}</label>&nbsp;
                    <input type="checkbox" class="checkbox"  id="published" ${(entry.published)?then("checked","")}>published<br/>

                    <ul class="nav nav-tabs">
                        <li id="tabHeader" role="presentation" class="active" onclick="changeBuffer('header')"><a href="#">Header</a></li>
                        <li id="tabContent" role="presentation" onclick="changeBuffer('content')"><a href="#">Content</a></li>
                    </ul>
                    <div id="editor" style="width: 800px;height: 400px;"></div>
                </div>
            </form>

            <button onclick="onSave(this)" class="btn btn-primary" >Save</button><br/>
                <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">(markdown cheatsheet)</a>
            <br/><br/>

            <div id="fileList">
                </div>

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

    </div>

    <script>
        function changeBuffer(which)
        {
            if(which==="content")
            {
                tabHeader.className = "";
                tabContent.className = "active";
                this.editor.swapDoc(this.docText);
            }
            else if(which==="header")
            {
                tabHeader.className = "active";
                tabContent.className = "";
                this.editor.swapDoc(this.docHeaderText);

            }
        }

        function onSelect(entry)
        {
            console.log("onselect"+entry);
        }
        function onSave(entry)
        {
            console.log("onSave"+entry);
            var title=document.getElementById('title');
            var published=document.getElementById('published');
            var self=this;
            fetch('../write', {
                method: 'post',
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: ${entry.id},
                    title: title.value,
                    published: published.checked,
                    text: self.docText.getValue(),
                    headerText: self.docHeaderText.getValue(),
                })
            });
        }
        function onSelectImage(entry)
        {
            console.log("onSelectImage"+entry);
        }
        function loadFileNames(postID)
        {
            fetch('../listImages/'+postID,
                    {credentials: 'same-origin'})
                    .then(function(response) {
                        return response.json()
                    }).then(function(json) {
                console.log('parsed json', json)
                var list = document.createElement('ul');
                list.className="heroes";
                var _this=this;
                for(var i = 0; i < json.length; i++) {
                    var item = document.createElement('li');
                    item.onclick = function (fName) {
                        return function () {
                            _this.editor.replaceSelection('!['+fName+']('+fName+' "titleText")\n');
                        };
                    }(json[i]);
                    item.className="heroes";
                    item.appendChild(document.createTextNode(json[i]));
                    list.appendChild(item);
                }

                var flist=document.getElementById('fileList')
                flist.removeChild(flist.firstChild);
                flist.appendChild(list);
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
        }

        function loadDropzone(postID)
        {
            if(postID<1)
                return;
            var previewNode = document.querySelector("#template");
            previewNode.id = "";
            var previewTemplate = previewNode.parentNode.innerHTML;
            previewNode.parentNode.removeChild(previewNode);

            var dz = new Dropzone("div#upload", {
                url:  '../uploadImage',
                thumbnailWidth: 80,
                thumbnailHeight: 80,
                parallelUploads: 20,
                withCredentials: true,
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

        var editor;
        var docHeaderText;
        var docText;
        var tabHeader;
        var tabContent;
        window.onload=function()
        {
            this.tabHeader=document.getElementById("tabHeader");
            this.tabContent=document.getElementById("tabContent");

            this.docHeaderText=CodeMirror.Doc("${(entry.headerText?js_string)!}","markdown");
            this.docText=CodeMirror.Doc("${(entry.text?js_string)!}","markdown");

            this.editor = CodeMirror(document.getElementById("editor"), {
                    value: this.docHeaderText,
                    lineNumbers:true,
                    mode:  "markdown",
                    theme: "cobalt",

            });
            this.editor.setSize("100%","100%");

            this.loadDropzone(${entry.id});
            this.loadFileNames(${entry.id});
        }
    </script>
</body>
</html>
