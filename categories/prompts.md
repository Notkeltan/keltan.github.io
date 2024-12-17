---
layout: default
title: keltan's blog - prompts
---

<h1>Prompts</h1>
<p>keltan's collection of prompts and prompt engineering</p>

{% assign category_posts = site.categories.prompts %}
{% for post in category_posts %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%Y-%m-%d" }}</time>
  </article>
{% endfor %}
