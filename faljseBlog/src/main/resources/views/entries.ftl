<#ftl encoding="utf-8">
<#-- @ftlvariable name="" type="views.EntriesView" -->
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
<div class="container">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <#list entries as entry>
                <div class="post-preview">
                    <a href="${basePath}api/pub/entry/${entry.id}">
                        ${toHtml(entry.headerText, entry, "LIGHTBOX")}
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
${trackingScript}
</body>
</html>
