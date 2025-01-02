---
layout: default
title: "#script"
tag: script
---

<h1>Posts tagged #script</h1>

<div class="posts-by-tag">
{% for post in site.posts %}
  {% if post.tags contains page.tag %}
  <article class="post-preview">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <div class="post-meta">
      <span class="date">{{ post.date | date: "%B %d, %Y" }}</span>
      <span class="tags">
        {% for tag in post.tags %}
        <a href="/tags/{{ tag | slugify }}" class="tag">#{{ tag }}</a>
        {% endfor %}
      </span>
    </div>
    {% if post.excerpt %}
    <div class="excerpt">
      {{ post.excerpt }}
    </div>
    {% endif %}
  </article>
  {% endif %}
{% endfor %}
</div> 