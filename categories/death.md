---
layout: default
title: keltan's blog - death
---

<h1>Death</h1>
<p>keltan's thoughts and writings about death and mortality</p>

{% assign category_posts = site.categories.death %}
{% for post in category_posts %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%Y-%m-%d" }}</time>
  </article>
{% endfor %} 