<#-- @ftlvariable name="" type="views.EntriesView" -->
<html>
<head>
    <title>faljseBlog</title>
    <link rel="stylesheet" href="../../../assets/clean-blog.min.css">
    <link rel="stylesheet" href="../../../assets/bootstrap.min.css">
    <link rel="stylesheet" href="../../../assets/clean-blog.min.css">
    <link rel="stylesheet" href="../../../assets/bootstrap.min.css">
    <link rel="stylesheet" href="../../../assets/app.css">
    <link rel="stylesheet" href="../../../assets/dropzone.css">
    <script src="../../../assets/es6-promise.min.js"></script>
    <script src="../../../assets/fetch.js"></script>
    <script src="../../../assets/ace/ace.js"></script>
    <script src="../../../assets/dropzone.js"></script>
</head>
<body>
<#include "navigation.ftl">
<header class="intro-header">
</header>
<!-- Main Content -->
<div class="login jumbotron center-block">
    <div class="row">
        <div class="col-xs-2">
            <ul class="heroes">
            <#list entries as e>
                <li onclick="onSelect(this)">
                    <a href="../edit/${e.id}">
                        <span class="badge">${e.id}</span> ${e.title}
                    </a>
                </li>
            </#list>
            </ul>
        </div>
        <div class="col-xs-10">
            <form class="form-inline">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" value="${(entry.title)!}">
                    <label for="title">id: ${(entry.id)!}</label>&nbsp;
                    <input type="checkbox" class="checkbox"  id="published" ${(entry.published)?then("checked","")}>published<br/>
                    <div id="editor" style="width: 600px;height: 400px;">${(entry.text)!}</div>

                </div>
            </form>

            <button onclick="onSave(this)" >Save</button><br/>
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
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: ${entry.id},
                    title: title.value,
                    published: published.checked,
                    text: self.editor.getValue()
                })
            });
        }
        function onSelectImage(entry)
        {
            console.log("onSelectImage"+entry);
        }
        function loadFileNames(postID)
        {
            fetch('../listImages/'+postID)
                    .then(function(response) {
                        return response.json()
                    }).then(function(json) {
                console.log('parsed json', json)
                var list = document.createElement('ul');
                for(var i = 0; i < json.length; i++) {
                    var item = document.createElement('li');
                    item.onclick=function(){console.log(this)};
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
        window.onload=function()
        {
            this.editor = ace.edit("editor");
            this.editor.setTheme("ace/theme/twilight");
            this.editor.session.setMode("ace/mode/markdown");
            this.loadDropzone(${entry.id});
            this.loadFileNames(${entry.id});
        }
    </script>
</body>
</html>
