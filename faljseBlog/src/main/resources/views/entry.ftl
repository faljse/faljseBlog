<#ftl encoding="utf-8">
<#-- @ftlvariable name="" type="views.EntryView" -->
<html>
<#include "includes/head.ftl">
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
<!-- Set your background image for this header on the line below. -->
<header class="intro-header" style="background-image: url('${basePath}api/pub/image/${entry.id}/large/${firstImgLink(entry.headerText)}')">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div class="post-heading">
                    ${toHtml(entry.headerText, entry, "SKIP")}
                </div>
            </div>
        </div>
    </div>
</header>

<!-- Post Content -->
<article>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                ${toHtml(entry.text, entry, "LIGHTBOX")}
                <#--<h2 class="section-heading">The Final Frontier</h2>-->
                <#--<blockquote>The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote>-->
                <#--<h2 class="section-heading">Reaching for the Stars</h2>-->
                <#--<span class="caption text-muted">To go places and do things that have never been done before – that’s what living is all about.</span>-->
            </div>
        </div>
    </div>
</article>

<hr>
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
