



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-a15e59d993eb0844d736a04652f63d465d909127e84cf7cd27073076df530f05.css" integrity="sha256-oV5Z2ZPrCETXNqBGUvY9Rl2QkSfoTPfNJwcwdt9TDwU=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-5eb765a970f5d2a442e2ddc646428cb268e0c9a6bd9fa4052a72d39799eb85cd.css" integrity="sha256-XrdlqXD10qRC4t3GRkKMsmjgyaa9n6QFKnLTl5nrhc0=" media="all" rel="stylesheet" />
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-ee521b8e9facac68ff27e93fc3ae0f8ed811d7bf9e434e84f4b9ea227780b084.js" rel="preload" />
    <link as="script" href="https://assets-cdn.github.com/assets/github-3f137b5d1ddd85df3bdf4469bfebc37af076ffcaa82719d7fb50a3f8b4ba88d8.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>Respond/respond.src.js at master · scottjehl/Respond</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars1.githubusercontent.com/u/214783?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="scottjehl/Respond" name="twitter:title" /><meta content="Respond - A fast &amp; lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)" name="twitter:description" />
      <meta content="https://avatars1.githubusercontent.com/u/214783?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="scottjehl/Respond" property="og:title" /><meta content="https://github.com/scottjehl/Respond" property="og:url" /><meta content="Respond - A fast &amp; lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MjM0MDEyMDowMTIxYzAwMDRjYzVhYWEyN2I0NDQ4OTI5MzU0YWIxMDpiZjZlNmQxYTc1YjJkZmY0ZWU1NTk1MzljYTc2ZDZlZDc2MzI3NDM2ZTlmOWFhYzEwNjA4MTkyOThlNGMwZWU0--abf8537bf7e932b7aa29a05e5408629c4b0c84ef">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="3EB21B0F:0C1F:3A8E923:56BC910F" name="octolytics-dimension-request_id" /><meta content="2340120" name="octolytics-actor-id" /><meta content="faljse" name="octolytics-actor-login" /><meta content="3157a001b66bb2adc692376d4c2c9d43a3b6db238345fa638186b28c383f4d4d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="faljse">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="MTI3NzNkZDMxY2FkMTRlMmIwZmZjMDViZDMwYzZkNGViZjU2MmZkZmMwYTg3MmQ4ZTlhN2M1ZWJlNTYyMzcxMXx7InJlbW90ZV9hZGRyZXNzIjoiNjIuMTc4LjI3LjE1IiwicmVxdWVzdF9pZCI6IjNFQjIxQjBGOjBDMUY6M0E4RTkyMzo1NkJDOTEwRiJ9">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="aa5d3c3b05ac071688cd4e4c2e5122bdb9c6ec63" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="13e288fbdeccbda703d7076aa1181a3d">

      
  <meta name="description" content="Respond - A fast &amp; lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)">
  <meta name="go-import" content="github.com/scottjehl/Respond git https://github.com/scottjehl/Respond.git">

  <meta content="214783" name="octolytics-dimension-user_id" /><meta content="scottjehl" name="octolytics-dimension-user_login" /><meta content="1337658" name="octolytics-dimension-repository_id" /><meta content="scottjehl/Respond" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1337658" name="octolytics-dimension-repository_network_root_id" /><meta content="scottjehl/Respond" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/scottjehl/Respond/commits/master.atom" rel="alternate" title="Recent Commits to Respond:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/scottjehl/Respond/blob/master/dest/respond.src.js" data-pjax-transient>
  </head>


  <body class="logged_in   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" role="img" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/scottjehl/Respond/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/scottjehl/Respond/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:faljse"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <svg aria-hidden="true" class="octicon octicon-bell" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l0.73-0.58c0.77-0.77 0.81-2.55 1.19-4.42 0.77-3.77 4.08-5 4.08-5 0-0.55 0.45-1 1-1s1 0.45 1 1c0 0 3.39 1.23 4.16 5 0.38 1.88 0.42 3.66 1.19 4.42l0.66 0.58z m-7 4c1.11 0 2-0.89 2-2H5c0 1.11 0.89 2 2 2z"></path></svg>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="scottjehl/Respond">This repository</span>
  </div>
    <a class="dropdown-item" href="/scottjehl/Respond/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/faljse"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@faljse" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/2340120?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">faljse</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/faljse" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
          <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
            Explore
          </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="aa5d3c3b05ac071688cd4e4c2e5122bdb9c6ec63" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Vwh7tPsgkJtupK50wbaZSV6f+tSrwB5foaGGK8TaqBWfRvVS8blO7bs8nNWi4senE7A3o7hD22dsNT2TzcY5eQ==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="aa5d3c3b05ac071688cd4e4c2e5122bdb9c6ec63" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="T2gcBXbCbYOeGbVC2BJ9fpM5AjZQkb1Y763Q9VTDJa7yMYJ5ho5iyLvyeKIUZ9zh3VQrgWZYFDcH+uPWlfq+5w==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="1337658" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/scottjehl/Respond/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/scottjehl/Respond/watchers">
            583
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 0.67-0.81 1-1.28 0.53L3 10H1c-0.55 0-1-0.45-1-1V7c0-0.55 0.45-1 1-1h2l3.72-3.72c0.47-0.47 1.28-0.14 1.28 0.53z m7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06 1.97 1.97-1.97 1.97 1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06-1.97-1.97 1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/scottjehl/Respond/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="aa5d3c3b05ac071688cd4e4c2e5122bdb9c6ec63" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="uO4BxMbbxVYFM1isrPtjq6Ym76XjSPi0d/loynEbuh5MGQQWfnv+Uvrps2qXFB/T04i9WMZCQnVpeM6xmu0yQw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar scottjehl/Respond"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/scottjehl/Respond/stargazers">
          9,778
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/scottjehl/Respond/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="aa5d3c3b05ac071688cd4e4c2e5122bdb9c6ec63" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="m8g4EvAdUqyuMHYCJeeWjz3ZoTForBNDr6SmumpfOYPU8+KBykM4XF0qKQ6DhvdW08rjxRGti2xJPq1I2Q5jEA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star scottjehl/Respond"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/scottjehl/Respond/stargazers">
          9,778
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/scottjehl/Respond/fork" class="btn-with-count" data-form-nonce="aa5d3c3b05ac071688cd4e4c2e5122bdb9c6ec63" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="29jO4KIlr/FvN5P4QBqfMF4vWy8vXa0UfXqx43IXfZmIRiwOXfLf1if+4002OwZ1y58fqRqNKfIoWyg1ONjVYA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of scottjehl/Respond to your account"
                aria-label="Fork your own copy of scottjehl/Respond to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" role="img" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/scottjehl/Respond/network" class="social-count">
      3,386
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author"><a href="/scottjehl" class="url fn" itemprop="url" rel="author"><span itemprop="title">scottjehl</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/scottjehl/Respond" data-pjax="#js-repo-pjax-container">Respond</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/scottjehl/Respond" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /scottjehl/Respond">
    <svg aria-hidden="true" class="octicon octicon-code" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
    Code
</a>
    <a href="/scottjehl/Respond/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /scottjehl/Respond/issues">
      <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
      Issues
      <span class="counter">63</span>
</a>
  <a href="/scottjehl/Respond/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /scottjehl/Respond/pulls">
    <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
    Pull requests
    <span class="counter">42</span>
</a>
    <a href="/scottjehl/Respond/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /scottjehl/Respond/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      Wiki
</a>
  <a href="/scottjehl/Respond/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /scottjehl/Respond/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/scottjehl/Respond/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /scottjehl/Respond/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/scottjehl/Respond/blob/1c8ce14b10cf636ed72a9e0ccffedb71143e2e69/dest/respond.src.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d260b76a2a1208cb6c068df5dd95f81b -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/Respond/blob/cross-domain/dest/respond.src.js"
               data-name="cross-domain"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="cross-domain">
                cross-domain
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/Respond/blob/em-experimental/dest/respond.src.js"
               data-name="em-experimental"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="em-experimental">
                em-experimental
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/Respond/blob/em-support/dest/respond.src.js"
               data-name="em-support"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="em-support">
                em-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/Respond/blob/gh-pages/dest/respond.src.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/scottjehl/Respond/blob/master/dest/respond.src.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/Respond/blob/shorthand-syntax/dest/respond.src.js"
               data-name="shorthand-syntax"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="shorthand-syntax">
                shorthand-syntax
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/Respond/blob/stevelove-logical-not/dest/respond.src.js"
               data-name="stevelove-logical-not"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="stevelove-logical-not">
                stevelove-logical-not
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/scottjehl/Respond/tree/1.4.2/dest/respond.src.js"
              data-name="1.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.2">
                1.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/scottjehl/Respond/tree/1.4.1/dest/respond.src.js"
              data-name="1.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.1">
                1.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/scottjehl/Respond/tree/1.4.0/dest/respond.src.js"
              data-name="1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.0">
                1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/scottjehl/Respond/tree/1.3.0/dest/respond.src.js"
              data-name="1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.0">
                1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/scottjehl/Respond/tree/1.2.0/dest/respond.src.js"
              data-name="1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.0">
                1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/scottjehl/Respond/tree/1.1.0/dest/respond.src.js"
              data-name="1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.0">
                1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/scottjehl/Respond/tree/1.0.1/dest/respond.src.js"
              data-name="1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.1">
                1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/scottjehl/Respond/tree/1.0.0/dest/respond.src.js"
              data-name="1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0">
                1.0.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/scottjehl/Respond/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/scottjehl/Respond" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">Respond</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/scottjehl/Respond/tree/master/dest" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">dest</span></a></span><span class="separator">/</span><strong class="final-path">respond.src.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/scottjehl/Respond/commit/cd214f02373de27b2b4223ee3f9a2c06a5b54dc0" data-pjax>
          cd214f0
        </a>
        <time datetime="2014-01-16T02:36:18Z" is="relative-time">Jan 15, 2014</time>
      </span>
      <div>
        <img alt="@goldibex" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/179067?v=3&amp;s=40" width="20" />
        <a href="/goldibex" class="user-mention" rel="contributor">goldibex</a>
          <a href="/scottjehl/Respond/commit/cd214f02373de27b2b4223ee3f9a2c06a5b54dc0" class="message" data-pjax="true" title="Recompile files">Recompile files</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>4</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="jefflembeck" href="/scottjehl/Respond/commits/master/dest/respond.src.js?author=jefflembeck"><img alt="@jefflembeck" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/109699?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="zachleat" href="/scottjehl/Respond/commits/master/dest/respond.src.js?author=zachleat"><img alt="@zachleat" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/39355?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tomfuertes" href="/scottjehl/Respond/commits/master/dest/respond.src.js?author=tomfuertes"><img alt="@tomfuertes" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1503991?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="goldibex" href="/scottjehl/Respond/commits/master/dest/respond.src.js?author=goldibex"><img alt="@goldibex" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/179067?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@jefflembeck" height="24" src="https://avatars1.githubusercontent.com/u/109699?v=3&amp;s=48" width="24" />
            <a href="/jefflembeck">jefflembeck</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@zachleat" height="24" src="https://avatars1.githubusercontent.com/u/39355?v=3&amp;s=48" width="24" />
            <a href="/zachleat">zachleat</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tomfuertes" height="24" src="https://avatars3.githubusercontent.com/u/1503991?v=3&amp;s=48" width="24" />
            <a href="/tomfuertes">tomfuertes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@goldibex" height="24" src="https://avatars0.githubusercontent.com/u/179067?v=3&amp;s=48" width="24" />
            <a href="/goldibex">goldibex</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/scottjehl/Respond/raw/master/dest/respond.src.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/scottjehl/Respond/blame/master/dest/respond.src.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/scottjehl/Respond/commits/master/dest/respond.src.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/scottjehl/Respond?branch=master&amp;filepath=dest%2Frespond.src.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h5.34c-0.25 0.61-0.86 1.39-2.34 2h8c-1.48-0.61-2.09-1.39-2.34-2h5.34c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1z m0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/scottjehl/Respond/edit/master/dest/respond.src.js" class="inline-form js-update-url-with-hash" data-form-nonce="aa5d3c3b05ac071688cd4e4c2e5122bdb9c6ec63" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jBSmwChIAVEYjL/U0kT8gf3M892xN/7Z6jf0jS40uu+vpJ4mbv41tRV3Rti5uNruibWSec/UXlGdD9qQSs6y3w==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/scottjehl/Respond/delete/master/dest/respond.src.js" class="inline-form" data-form-nonce="aa5d3c3b05ac071688cd4e4c2e5122bdb9c6ec63" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="z4jU/Scrlf7wjffsGmHWqJVEyYKiR0LfbXMutSC+jrVB9V3NY25eaS+r1N+vVw7i0HHNUo4XzJK0qKBBKaz15g==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M10 2H8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1H1c-0.55 0-1 0.45-1 1v1c0 0.55 0.45 1 1 1v9c0 0.55 0.45 1 1 1h7c0.55 0 1-0.45 1-1V5c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1z m-1 12H2V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9z m1-10H1v-1h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      237 lines (235 sloc)
      <span class="file-info-divider"></span>
    8.79 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*! Respond.js v1.4.2: min/max-width media query polyfill</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright 2014 Scott Jehl</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Licensed under MIT</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * http://j.mp/respondjs */</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors &amp; copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*! NOTE: If you&#39;re already including a window.matchMedia polyfill via Modernizr or otherwise, you don&#39;t need this part */</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">w</span>) {</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&quot;</span>use strict<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">w</span>.<span class="pl-smi">matchMedia</span> <span class="pl-k">=</span> <span class="pl-smi">w</span>.<span class="pl-smi">matchMedia</span> <span class="pl-k">||</span> <span class="pl-k">function</span>(<span class="pl-smi">doc</span>, <span class="pl-smi">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bool, docElem <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">documentElement</span>, refNode <span class="pl-k">=</span> <span class="pl-smi">docElem</span>.<span class="pl-smi">firstElementChild</span> <span class="pl-k">||</span> <span class="pl-smi">docElem</span>.<span class="pl-c1">firstChild</span>, fakeBody <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span>), div <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">div</span>.<span class="pl-c1">id</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>mq-test-1<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">div</span>.<span class="pl-c1">style</span>.<span class="pl-smi">cssText</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>position:absolute;top:-100em<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">fakeBody</span>.<span class="pl-c1">style</span>.<span class="pl-c1">background</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">fakeBody</span>.<span class="pl-c1">appendChild</span>(div);</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">q</span>) {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">div</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;shy;&lt;style media=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> q <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt; #mq-test-1 { width: 42px; }&lt;/style&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">docElem</span>.<span class="pl-c1">insertBefore</span>(fakeBody, refNode);</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">      bool <span class="pl-k">=</span> <span class="pl-smi">div</span>.<span class="pl-smi">offsetWidth</span> <span class="pl-k">===</span> <span class="pl-c1">42</span>;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">docElem</span>.<span class="pl-en">removeChild</span>(fakeBody);</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">        matches<span class="pl-k">:</span> bool,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">        media<span class="pl-k">:</span> q</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">  }(<span class="pl-smi">w</span>.<span class="pl-smi">document</span>);</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">})(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">w</span>) {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&quot;</span>use strict<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> respond <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">w</span>.<span class="pl-smi">respond</span> <span class="pl-k">=</span> respond;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">respond</span>.<span class="pl-en">update</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {};</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> requestQueue <span class="pl-k">=</span> [], <span class="pl-en">xmlHttp</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> xmlhttpmethod <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">      xmlhttpmethod <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">w.XMLHttpRequest</span>();</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">catch</span> (e) {</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">      xmlhttpmethod <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">w.ActiveXObject</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Microsoft.XMLHTTP<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> xmlhttpmethod;</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">  }(), <span class="pl-en">ajax</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">url</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> req <span class="pl-k">=</span> <span class="pl-en">xmlHttp</span>();</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>req) {</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">req</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>, url, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">req</span>.<span class="pl-en">onreadystatechange</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">req</span>.<span class="pl-c1">readyState</span> <span class="pl-k">!==</span> <span class="pl-c1">4</span> <span class="pl-k">||</span> <span class="pl-smi">req</span>.<span class="pl-c1">status</span> <span class="pl-k">!==</span> <span class="pl-c1">200</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">req</span>.<span class="pl-c1">status</span> <span class="pl-k">!==</span> <span class="pl-c1">304</span>) {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">callback</span>(<span class="pl-smi">req</span>.<span class="pl-smi">responseText</span>);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">req</span>.<span class="pl-c1">readyState</span> <span class="pl-k">===</span> <span class="pl-c1">4</span>) {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">req</span>.<span class="pl-c1">send</span>(<span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">isUnsupportedMediaQuery</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">query</span>) {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">query</span>.<span class="pl-c1">replace</span>(<span class="pl-smi">respond</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">minmaxwh</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">match</span>(<span class="pl-smi">respond</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">other</span>);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">respond</span>.<span class="pl-smi">ajax</span> <span class="pl-k">=</span> ajax;</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">respond</span>.<span class="pl-smi">queue</span> <span class="pl-k">=</span> requestQueue;</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">respond</span>.<span class="pl-smi">unsupportedmq</span> <span class="pl-k">=</span> isUnsupportedMediaQuery;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">respond</span>.<span class="pl-smi">regex</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">    media<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>@media<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\{</span>]</span><span class="pl-k">+</span><span class="pl-cce">\{</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\{\}</span>]</span><span class="pl-k">*</span><span class="pl-cce">\{</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\}\{</span>]</span><span class="pl-k">*</span><span class="pl-cce">\}</span>)<span class="pl-k">+</span><span class="pl-pds">/</span>gi</span>,</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">    keyframes<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>@(?:<span class="pl-cce">\-</span>(?:o<span class="pl-k">|</span>moz<span class="pl-k">|</span>webkit)<span class="pl-cce">\-</span>)<span class="pl-k">?</span>keyframes<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\{</span>]</span><span class="pl-k">+</span><span class="pl-cce">\{</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\{\}</span>]</span><span class="pl-k">*</span><span class="pl-cce">\{</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\}\{</span>]</span><span class="pl-k">*</span><span class="pl-cce">\}</span>)<span class="pl-k">+</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\}</span>]</span><span class="pl-k">*</span><span class="pl-cce">\}</span><span class="pl-pds">/</span>gi</span>,</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">    comments<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\/\*</span><span class="pl-c1">[<span class="pl-k">^</span>*]</span><span class="pl-k">*</span><span class="pl-cce">\*</span><span class="pl-k">+</span>(<span class="pl-c1">[<span class="pl-k">^</span>/][<span class="pl-k">^</span>*]</span><span class="pl-k">*</span><span class="pl-cce">\*</span><span class="pl-k">+</span>)<span class="pl-k">*</span><span class="pl-cce">\/</span><span class="pl-pds">/</span>gi</span>,</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">    urls<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>(url<span class="pl-cce">\(</span>)<span class="pl-c1">[&#39;&quot;]</span><span class="pl-k">?</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\/\)</span>&#39;&quot;][<span class="pl-k">^</span>:<span class="pl-cce">\)</span>&#39;&quot;]</span><span class="pl-k">+</span>)<span class="pl-c1">[&#39;&quot;]</span><span class="pl-k">?</span>(<span class="pl-cce">\)</span>)<span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    findStyles<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>@media <span class="pl-k">*</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\{</span>]</span><span class="pl-k">+</span>)<span class="pl-cce">\{</span>(<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">+?</span>)<span class="pl-k">$</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">    only<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>(only<span class="pl-c1">\s</span><span class="pl-k">+</span>)<span class="pl-k">?</span>(<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-k">+</span>)<span class="pl-c1">\s</span><span class="pl-k">?</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">    minw<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\(</span><span class="pl-c1">\s</span><span class="pl-k">*</span>min<span class="pl-cce">\-</span>width<span class="pl-c1">\s</span><span class="pl-k">*</span>:<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-c1">[<span class="pl-c1">0-9</span><span class="pl-cce">\.</span>]</span><span class="pl-k">+</span>)(px<span class="pl-k">|</span>em)<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-cce">\)</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">    maxw<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\(</span><span class="pl-c1">\s</span><span class="pl-k">*</span>max<span class="pl-cce">\-</span>width<span class="pl-c1">\s</span><span class="pl-k">*</span>:<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-c1">[<span class="pl-c1">0-9</span><span class="pl-cce">\.</span>]</span><span class="pl-k">+</span>)(px<span class="pl-k">|</span>em)<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-cce">\)</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">    minmaxwh<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\(</span><span class="pl-c1">\s</span><span class="pl-k">*</span>m(in<span class="pl-k">|</span>ax)<span class="pl-cce">\-</span>(height<span class="pl-k">|</span>width)<span class="pl-c1">\s</span><span class="pl-k">*</span>:<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-c1">[<span class="pl-c1">0-9</span><span class="pl-cce">\.</span>]</span><span class="pl-k">+</span>)(px<span class="pl-k">|</span>em)<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-cce">\)</span><span class="pl-pds">/</span>gi</span>,</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">    other<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\(</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\)</span>]</span><span class="pl-k">*</span><span class="pl-cce">\)</span><span class="pl-pds">/</span>g</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">respond</span>.<span class="pl-smi">mediaQueriesSupported</span> <span class="pl-k">=</span> <span class="pl-smi">w</span>.<span class="pl-smi">matchMedia</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">w</span>.<span class="pl-en">matchMedia</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>only all<span class="pl-pds">&quot;</span></span>) <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">w</span>.<span class="pl-en">matchMedia</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>only all<span class="pl-pds">&quot;</span></span>).<span class="pl-smi">matches</span>;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-smi">respond</span>.<span class="pl-smi">mediaQueriesSupported</span>) {</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> doc <span class="pl-k">=</span> <span class="pl-smi">w</span>.<span class="pl-smi">document</span>, docElem <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">documentElement</span>, mediastyles <span class="pl-k">=</span> [], rules <span class="pl-k">=</span> [], appendedEls <span class="pl-k">=</span> [], parsedSheets <span class="pl-k">=</span> {}, resizeThrottle <span class="pl-k">=</span> <span class="pl-c1">30</span>, head <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>head<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>] <span class="pl-k">||</span> docElem, base <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>base<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>], links <span class="pl-k">=</span> <span class="pl-smi">head</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>link<span class="pl-pds">&quot;</span></span>), lastCall, resizeDefer, eminpx, <span class="pl-en">getEmValue</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> ret, div <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>), body <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">body</span>, originalHTMLFontSize <span class="pl-k">=</span> <span class="pl-smi">docElem</span>.<span class="pl-c1">style</span>.<span class="pl-c1">fontSize</span>, originalBodyFontSize <span class="pl-k">=</span> body <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">body</span>.<span class="pl-c1">style</span>.<span class="pl-c1">fontSize</span>, fakeUsed <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">div</span>.<span class="pl-c1">style</span>.<span class="pl-smi">cssText</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>position:absolute;font-size:1em;width:1em<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>body) {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">      body <span class="pl-k">=</span> fakeUsed <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">body</span>.<span class="pl-c1">style</span>.<span class="pl-c1">background</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">docElem</span>.<span class="pl-c1">style</span>.<span class="pl-c1">fontSize</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">body</span>.<span class="pl-c1">style</span>.<span class="pl-c1">fontSize</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">body</span>.<span class="pl-c1">appendChild</span>(div);</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (fakeUsed) {</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">docElem</span>.<span class="pl-c1">insertBefore</span>(body, <span class="pl-smi">docElem</span>.<span class="pl-c1">firstChild</span>);</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">    ret <span class="pl-k">=</span> <span class="pl-smi">div</span>.<span class="pl-smi">offsetWidth</span>;</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (fakeUsed) {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">docElem</span>.<span class="pl-en">removeChild</span>(body);</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">body</span>.<span class="pl-en">removeChild</span>(div);</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">docElem</span>.<span class="pl-c1">style</span>.<span class="pl-c1">fontSize</span> <span class="pl-k">=</span> originalHTMLFontSize;</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (originalBodyFontSize) {</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">body</span>.<span class="pl-c1">style</span>.<span class="pl-c1">fontSize</span> <span class="pl-k">=</span> originalBodyFontSize;</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">    ret <span class="pl-k">=</span> eminpx <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(ret);</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> ret;</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">applyMedia</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">fromResize</span>) {</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> name <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>clientWidth<span class="pl-pds">&quot;</span></span>, docElemProp <span class="pl-k">=</span> docElem[name], currWidth <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-smi">compatMode</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>CSS1Compat<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> docElemProp <span class="pl-k">||</span> <span class="pl-smi">doc</span>.<span class="pl-c1">body</span>[name] <span class="pl-k">||</span> docElemProp, styleBlocks <span class="pl-k">=</span> {}, lastLink <span class="pl-k">=</span> links[<span class="pl-smi">links</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>], now <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getTime</span>();</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (fromResize <span class="pl-k">&amp;&amp;</span> lastCall <span class="pl-k">&amp;&amp;</span> now <span class="pl-k">-</span> lastCall <span class="pl-k">&lt;</span> resizeThrottle) {</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">w</span>.<span class="pl-c1">clearTimeout</span>(resizeDefer);</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">      resizeDefer <span class="pl-k">=</span> <span class="pl-smi">w</span>.<span class="pl-c1">setTimeout</span>(applyMedia, resizeThrottle);</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">      lastCall <span class="pl-k">=</span> now;</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">in</span> mediastyles) {</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">mediastyles</span>.<span class="pl-en">hasOwnProperty</span>(i)) {</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> thisstyle <span class="pl-k">=</span> mediastyles[i], min <span class="pl-k">=</span> <span class="pl-smi">thisstyle</span>.<span class="pl-smi">minw</span>, max <span class="pl-k">=</span> <span class="pl-smi">thisstyle</span>.<span class="pl-smi">maxw</span>, minnull <span class="pl-k">=</span> min <span class="pl-k">===</span> <span class="pl-c1">null</span>, maxnull <span class="pl-k">=</span> max <span class="pl-k">===</span> <span class="pl-c1">null</span>, em <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>em<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!!</span>min) {</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">          min <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(min) <span class="pl-k">*</span> (<span class="pl-smi">min</span>.<span class="pl-c1">indexOf</span>(em) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">?</span> eminpx <span class="pl-k">||</span> <span class="pl-en">getEmValue</span>() <span class="pl-k">:</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!!</span>max) {</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">          max <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(max) <span class="pl-k">*</span> (<span class="pl-smi">max</span>.<span class="pl-c1">indexOf</span>(em) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">?</span> eminpx <span class="pl-k">||</span> <span class="pl-en">getEmValue</span>() <span class="pl-k">:</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">thisstyle</span>.<span class="pl-smi">hasquery</span> <span class="pl-k">||</span> (<span class="pl-k">!</span>minnull <span class="pl-k">||</span> <span class="pl-k">!</span>maxnull) <span class="pl-k">&amp;&amp;</span> (minnull <span class="pl-k">||</span> currWidth <span class="pl-k">&gt;=</span> min) <span class="pl-k">&amp;&amp;</span> (maxnull <span class="pl-k">||</span> currWidth <span class="pl-k">&lt;=</span> max)) {</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">!</span>styleBlocks[<span class="pl-smi">thisstyle</span>.<span class="pl-c1">media</span>]) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">            styleBlocks[<span class="pl-smi">thisstyle</span>.<span class="pl-c1">media</span>] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">          styleBlocks[<span class="pl-smi">thisstyle</span>.<span class="pl-c1">media</span>].<span class="pl-c1">push</span>(rules[<span class="pl-smi">thisstyle</span>.<span class="pl-c1">rules</span>]);</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> j <span class="pl-k">in</span> appendedEls) {</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">appendedEls</span>.<span class="pl-en">hasOwnProperty</span>(j)) {</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (appendedEls[j] <span class="pl-k">&amp;&amp;</span> appendedEls[j].<span class="pl-c1">parentNode</span> <span class="pl-k">===</span> head) {</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">head</span>.<span class="pl-en">removeChild</span>(appendedEls[j]);</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">appendedEls</span>.<span class="pl-c1">length</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> k <span class="pl-k">in</span> styleBlocks) {</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">styleBlocks</span>.<span class="pl-en">hasOwnProperty</span>(k)) {</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> ss <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>style<span class="pl-pds">&quot;</span></span>), css <span class="pl-k">=</span> styleBlocks[k].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">ss</span>.<span class="pl-c1">type</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>text/css<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">ss</span>.<span class="pl-c1">media</span> <span class="pl-k">=</span> k;</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">head</span>.<span class="pl-c1">insertBefore</span>(ss, <span class="pl-smi">lastLink</span>.<span class="pl-c1">nextSibling</span>);</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">ss</span>.<span class="pl-smi">styleSheet</span>) {</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">ss</span>.<span class="pl-smi">styleSheet</span>.<span class="pl-smi">cssText</span> <span class="pl-k">=</span> css;</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">ss</span>.<span class="pl-c1">appendChild</span>(<span class="pl-smi">doc</span>.<span class="pl-c1">createTextNode</span>(css));</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">appendedEls</span>.<span class="pl-c1">push</span>(ss);</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">translate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">styles</span>, <span class="pl-smi">href</span>, <span class="pl-smi">media</span>) {</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> qs <span class="pl-k">=</span> <span class="pl-smi">styles</span>.<span class="pl-c1">replace</span>(<span class="pl-smi">respond</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">comments</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-smi">respond</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">keyframes</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">match</span>(<span class="pl-smi">respond</span>.<span class="pl-smi">regex</span>.<span class="pl-c1">media</span>), ql <span class="pl-k">=</span> qs <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">qs</span>.<span class="pl-c1">length</span> <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">    href <span class="pl-k">=</span> <span class="pl-smi">href</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>, <span class="pl-smi">href</span>.<span class="pl-c1">lastIndexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">repUrls</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">css</span>) {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">css</span>.<span class="pl-c1">replace</span>(<span class="pl-smi">respond</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">urls</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>$1<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> href <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>$2$3<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">    }, useMedia <span class="pl-k">=</span> <span class="pl-k">!</span>ql <span class="pl-k">&amp;&amp;</span> media;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">href</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">      href <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (useMedia) {</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">      ql <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> ql; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> fullq, thisq, eachq, eql;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (useMedia) {</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">        fullq <span class="pl-k">=</span> media;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">rules</span>.<span class="pl-c1">push</span>(<span class="pl-en">repUrls</span>(styles));</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">        fullq <span class="pl-k">=</span> qs[i].<span class="pl-c1">match</span>(<span class="pl-smi">respond</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">findStyles</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">RegExp</span>.<span class="pl-smi">$1</span>;</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">rules</span>.<span class="pl-c1">push</span>(<span class="pl-smi">RegExp</span>.<span class="pl-smi">$2</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">repUrls</span>(<span class="pl-smi">RegExp</span>.<span class="pl-smi">$2</span>));</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">      eachq <span class="pl-k">=</span> <span class="pl-smi">fullq</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">      eql <span class="pl-k">=</span> <span class="pl-smi">eachq</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> j <span class="pl-k">=</span> <span class="pl-c1">0</span>; j <span class="pl-k">&lt;</span> eql; j<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">        thisq <span class="pl-k">=</span> eachq[j];</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-en">isUnsupportedMediaQuery</span>(thisq)) {</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">mediastyles</span>.<span class="pl-c1">push</span>({</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">          media<span class="pl-k">:</span> <span class="pl-smi">thisq</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>].<span class="pl-c1">match</span>(<span class="pl-smi">respond</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">only</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">RegExp</span>.<span class="pl-smi">$2</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>all<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">          rules<span class="pl-k">:</span> <span class="pl-smi">rules</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">          hasquery<span class="pl-k">:</span> <span class="pl-smi">thisq</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">          minw<span class="pl-k">:</span> <span class="pl-smi">thisq</span>.<span class="pl-c1">match</span>(<span class="pl-smi">respond</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">minw</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">parseFloat</span>(<span class="pl-smi">RegExp</span>.<span class="pl-smi">$1</span>) <span class="pl-k">+</span> (<span class="pl-smi">RegExp</span>.<span class="pl-smi">$2</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">          maxw<span class="pl-k">:</span> <span class="pl-smi">thisq</span>.<span class="pl-c1">match</span>(<span class="pl-smi">respond</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">maxw</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">parseFloat</span>(<span class="pl-smi">RegExp</span>.<span class="pl-smi">$1</span>) <span class="pl-k">+</span> (<span class="pl-smi">RegExp</span>.<span class="pl-smi">$2</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">applyMedia</span>();</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">makeRequests</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">requestQueue</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> thisRequest <span class="pl-k">=</span> <span class="pl-smi">requestQueue</span>.<span class="pl-c1">shift</span>();</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">ajax</span>(<span class="pl-smi">thisRequest</span>.<span class="pl-c1">href</span>, <span class="pl-k">function</span>(<span class="pl-smi">styles</span>) {</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">translate</span>(styles, <span class="pl-smi">thisRequest</span>.<span class="pl-c1">href</span>, <span class="pl-smi">thisRequest</span>.<span class="pl-c1">media</span>);</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">        parsedSheets[<span class="pl-smi">thisRequest</span>.<span class="pl-c1">href</span>] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">w</span>.<span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">makeRequests</span>();</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">ripCSS</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">links</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> sheet <span class="pl-k">=</span> links[i], href <span class="pl-k">=</span> <span class="pl-smi">sheet</span>.<span class="pl-c1">href</span>, media <span class="pl-k">=</span> <span class="pl-smi">sheet</span>.<span class="pl-c1">media</span>, isCSS <span class="pl-k">=</span> <span class="pl-smi">sheet</span>.<span class="pl-c1">rel</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">sheet</span>.<span class="pl-c1">rel</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>stylesheet<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!!</span>href <span class="pl-k">&amp;&amp;</span> isCSS <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>parsedSheets[href]) {</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">sheet</span>.<span class="pl-smi">styleSheet</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">sheet</span>.<span class="pl-smi">styleSheet</span>.<span class="pl-smi">rawCssText</span>) {</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">translate</span>(<span class="pl-smi">sheet</span>.<span class="pl-smi">styleSheet</span>.<span class="pl-smi">rawCssText</span>, href, media);</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">          parsedSheets[href] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>:]</span><span class="pl-k">*</span><span class="pl-cce">\/\/</span>)<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(href) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>base <span class="pl-k">||</span> <span class="pl-smi">href</span>.<span class="pl-c1">replace</span>(<span class="pl-smi">RegExp</span>.<span class="pl-smi">$1</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>] <span class="pl-k">===</span> <span class="pl-smi">w</span>.<span class="pl-c1">location</span>.<span class="pl-c1">host</span>) {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">href</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>, <span class="pl-c1">2</span>) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>//<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">              href <span class="pl-k">=</span> <span class="pl-smi">w</span>.<span class="pl-c1">location</span>.<span class="pl-c1">protocol</span> <span class="pl-k">+</span> href;</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">requestQueue</span>.<span class="pl-c1">push</span>({</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">              href<span class="pl-k">:</span> href,</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">              media<span class="pl-k">:</span> media</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">makeRequests</span>();</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">ripCSS</span>();</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">respond</span>.<span class="pl-smi">update</span> <span class="pl-k">=</span> ripCSS;</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">respond</span>.<span class="pl-smi">getEmValue</span> <span class="pl-k">=</span> getEmValue;</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">callMedia</span>() {</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">applyMedia</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-smi">w</span>.<span class="pl-smi">addEventListener</span>) {</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">w</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span>, callMedia, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">w</span>.<span class="pl-smi">attachEvent</span>) {</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">w</span>.<span class="pl-c1">attachEvent</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>onresize<span class="pl-pds">&quot;</span></span>, callMedia);</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">})(<span class="pl-v">this</span>);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
          <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" role="img" title="GitHub " version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.10998s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-7lIbjp+srGj/J+k/w64PjtgR17+eQ06E9LnqIneAsIQ=" src="https://assets-cdn.github.com/assets/frameworks-ee521b8e9facac68ff27e93fc3ae0f8ed811d7bf9e434e84f4b9ea227780b084.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-PxN7XR3dhd8730Rpv+vDevB2/8qoJxnX+1Cj+LS6iNg=" src="https://assets-cdn.github.com/assets/github-3f137b5d1ddd85df3bdf4469bfebc37af076ffcaa82719d7fb50a3f8b4ba88d8.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

