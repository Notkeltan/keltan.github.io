---
layout: default
title: keltan's blog - cognitive strategies
---

<h1>Cognitive Strategies</h1>
<p>keltan's exploration of thinking patterns and mental models</p>

{% assign category_posts = site.categories.cognitive-strategies %}
{% for post in category_posts %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%Y-%m-%d" }}</time>
  </article>
{% endfor %} 