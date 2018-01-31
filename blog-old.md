---
title: Blog
layout: blog
description: Stop Bullying Tour Blog
permalink: /blog/
---
<section>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h1>The Blog</h1>
      </div>
    </div>
    {% for post in site.posts %}
      {% capture modulo %}{{ forloop.index | modulo: 4 }}{% endcapture %}
      {% if modulo == '1' %}
        <div class="row">
      {% endif %}
          <div class="col-sm-3">
            <div class="article">
              <a href="{{ post.url }}" class="hidden-xs"><img src="{{ site.baseurl }}/img/{{ post.mainimage }}" alt="{{ post.title }}" class="img-responsive img-rounded"/></a>
              <h2 class="article-header"><a href="{{ post.url }}">{{ post.title }}</a></h2>
              <p class="article-date"><strong>Date:</strong> {{ post.date | date: "%b %d, %Y" }} | <strong>Category:</strong> {{ post.categories }} | <span class="read-time"></span>
              </p>
              <div class="word-count" style="display: none;">{{ post.content }}</div>
            </div>
          </div>
      {% if modulo == '0' or forloop.last %}
        </div>
      {% endif %}
    {% endfor %}
  </div>
</section>