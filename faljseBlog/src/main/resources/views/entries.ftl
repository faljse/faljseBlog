<#-- @ftlvariable name="" type="views.EntriesView" -->
<html>
<head>
    <title>faljseBlog</title>
    <link rel="stylesheet" href="${basePath}assets/jsOnlyLightbox/css/lightbox.css">
    <link rel="stylesheet" href="${basePath}assets/clean-blog.min.css">
    <link rel="stylesheet" href="${basePath}assets/bootstrap.min.css">
    <script src="${basePath}assets/jsOnlyLightbox/js/lightbox.js"></script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body>
<!-- Navigation -->
<#include "includes/navigation.ftl">

<!-- Page Header -->
<!-- Set your background image for this header on the line below. -->
<!--<header class="intro-header" style="background-image: url('img/home-bg.jpg')">-->
<!--<div class="container">-->
<!--<div class="row">-->
<!--<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">-->
<!--<div class="site-heading">-->
<!--<h1>Clean Blog</h1>-->
<!--<hr class="small">-->
<!--<span class="subheading">A Clean Blog Theme by Start Bootstrap</span>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</header>-->
<header class="intro-header">
</header>

<!-- Main Content -->
<div class="container">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <#list entries as entry>
                <div class="post-preview">
                    <a href="${basePath}api/pub/entry/${entry.id}">
                        <h2 class="post-title">
                            ${entry.title}
                        </h2>
                        <h3 class="post-subtitle">
                        </h3>
                        ${toHtml(entry.headerText, entry)}
                    </a>
                    <p class="post-meta">Posted by <a href="#">me</a> on ${entry.created?number_to_date}</p>
                </div>
                <hr>
            </#list>

        </div>
    </div>
</div>
<!-- Footer -->
<#include "includes/footer.ftl">


<script>
   var lightbox = new Lightbox();
    lightbox.load({loadingAnimation: true},
            {closeOnClick: true}

    );
   function openImage(href)
   {
       lightbox.open(href);
   }

</script>
</body>
</html>
