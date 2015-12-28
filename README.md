# faljseBlog
faljseBlog is a very simple [dropwizard](http://www.dropwizard.io/) based blog system.
## Features
* Edit content using [markdown](https://en.wikipedia.org/wiki/Markdown)
* Upload images
* No Database (json for content, files for images)
* Customizable via [Freemarker](http://freemarker.incubator.apache.org/) Templates
* Image Scaling at upload

## Installation
* Download
* Build: _mvn package_
* Edit: _config.yml_
* Run:  _java -server  -Djava.awt.headless=true -jar faljseBlog-1.0-SNAPSHOT.jar server config.yml_
* Access: [http://localhost:8080/api/pub/list/](http://localhost:8080/api/pub/list/)
