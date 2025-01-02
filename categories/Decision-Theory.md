---
layout: default
title: keltan's blog - decision theory
---

<h1>Decision Theory</h1>
<p>keltan's analysis of decision-making frameworks and approaches</p>

{% assign category_posts = site.categories.Decision-Theory %}
{% for post in category_posts %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%Y-%m-%d" }}</time>
  </article>
{% endfor %} 