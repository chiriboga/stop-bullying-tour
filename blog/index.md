---
title: Blog
layout: blog
description: Stop Bullying Tour Blog
permalink: /blog/
pagination: 
  enabled: true
  trail: 
    before: 1 # The number of links before the current page
    after: 1  # The number of links after the current page
---
<section>
  <div class="container">
    <div class="row">
      <div class="col-lg-7 col-lg-offset-2 col-md-7 col-md-offset-2 col-sm-12 col-xs-12">
        <h1>The Blog</h1>
        {% if paginator.total_pages > 1 %}
        <p>Welcome to our blog. Stay in touch with what we are up to as well as some great posts from some of our friends.</p>
        {% endif %} 
      </div>
    </div>
    <hr/>
    {% for post in paginator.posts %}
    <div class="row">
      <div class="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-3 col-xs-12">
        <a href="{{ post.url }}" class="hidden-xs"><img src="{{ site.baseurl }}/img/{{ post.mainimage }}" alt="{{ post.title }}" class="img-responsive img-rounded"/></a>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-9 col-xs-12">
        <h2 class="article-header"><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p class="article-date"><strong>Date:</strong> {{ post.date | date: "%b %d, %Y" }} | <strong>Category:</strong> {{ post.categories }}
        </p>
      </div>
    </div>
    <hr/>
    {% endfor %}
    <div class="row">
      <div class="col-lg-7 col-lg-offset-2 col-md-7 col-md-offset-2 col-sm-12 col-xs-12">
        {% include pagination.html %}
      </div>
    </div>
  </div>
</section>