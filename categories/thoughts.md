---
layout: default
title: keltan's blog - thoughts
---

<h1>Thoughts</h1>
<p>keltan's collection of thoughts and musings</p>

{% assign category_posts = site.categories.thoughts %}
{% for post in category_posts %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%Y-%m-%d" }}</time>
  </article>
{% endfor %}
