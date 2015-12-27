<#-- @ftlvariable name="" type="views.EntriesView" -->
<html>
<head>
    <title>faljseBlog</title>
    <link rel="stylesheet" href="${basePath}assets/clean-blog.min.css">
    <link rel="stylesheet" href="${basePath}assets/bootstrap.min.css">
    <link rel="stylesheet" href="${basePath}assets/clean-blog.min.css">
    <link rel="stylesheet" href="${basePath}assets/bootstrap.min.css">
    <link rel="stylesheet" href="${basePath}assets/app.css">

    <script src="${basePath}assets/es6-promise.min.js"></script>
    <script src="${basePath}assets/fetch.js"></script>

    <#--codemirror-->
    <link rel="stylesheet" href="${basePath}assets/codemirror/lib/codemirror.css">
    <link rel="stylesheet" href="${basePath}assets/codemirror/theme/cobalt.css">
    <script src="${basePath}assets/codemirror/lib/codemirror.js"></script>
    <script src="${basePath}assets/codemirror/mode/javascript/javascript.js"></script>
    <script src="${basePath}assets/codemirror/mode/markdown/markdown.js"></script>
    <#--/codemirror-->
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
            <div>
                <label for="fileselect">Files to upload:</label>
                <input type="file" id="fileselect" name="fileselect[]" multiple="multiple" />
                <div id="filedrag">or drop files here</div>
            </div>
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
            fetch('${basePath}api/admin/write', {
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

        function onDropFile(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }

        function InitDrop() {
            var fileselect = document.getElementById("fileselect");
            var filedrag = document.getElementById("filedrag");

            // file select
            fileselect.addEventListener("change", FileSelectHandler, false);
            filedrag.addEventListener("dragover", FileDragHover, false);
            filedrag.addEventListener("dragleave", FileDragHover, false);
            filedrag.addEventListener("drop", FileSelectHandler, false);
            filedrag.style.display = "block";

        }
        // file drag hover
        function FileDragHover(e) {
            e.stopPropagation();
            e.preventDefault();
            e.target.className = (e.type == "dragover" ? "hover" : "");
        }
        function ParseFile(file) {
            var data = new FormData();
            data.append('file', file);
            data.append('user', 'hubot');
            data.append('entryID',${entry.id});
            fetch('${basePath}api/admin/uploadImage', {
                method: 'post',
                credentials: 'same-origin',
                body: data
            }).then(function(data) {
                this.loadFileNames(${entry.id});
                console.log('request succeeded with JSON response', data)
            }).catch(function(error) {
                this.loadFileNames(${entry.id});
                console.log('request failed', error)
            });

        }

        // file selection
        function FileSelectHandler(e) {

            // cancel event and hover styling
            FileDragHover(e);

            // fetch FileList object
            var files = e.target.files || e.dataTransfer.files;

            // process all File objects
            for (var i = 0, f; f = files[i]; i++) {
                ParseFile(f);
            }

        }

        function onSelectImage(entry)
        {
            console.log("onSelectImage"+entry);
        }
        function loadFileNames(postID)
        {
            fetch('${basePath}api/admin/listImages/'+postID,
                    {credentials: 'same-origin'})
                    .then(function(response) {
                        return response.json()
                    }).then(function(json) {
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

            this.loadFileNames(${entry.id});
            this.InitDrop();
        }
    </script>
</body>
</html>
