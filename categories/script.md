---
layout: default
title: keltan's blog - scripts
---

<h1>Scripts</h1>
<p>keltan's collection of scripts and written pieces</p>

{% assign category_posts = site.categories.script %}
{% for post in category_posts %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%Y-%m-%d" }}</time>
  </article>
{% endfor %} 