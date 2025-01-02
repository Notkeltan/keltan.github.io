---
layout: home
---

# Posts

{% for post in site.posts %}
<article class="post-preview">
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <div class="post-meta">
    <span class="date">{{ post.date | date: "%B %d, %Y" }}</span>
    {% if post.tags %}
    <span class="tags">
      {% for tag in post.tags %}
      <a href="/tags/{{ tag | slugify }}" class="tag">#{{ tag }}</a>
      {% endfor %}
    </span>
    {% endif %}
  </div>
  {% if post.excerpt %}
  <div class="excerpt">
    {{ post.excerpt }}
  </div>
  {% endif %}
</article>
{% endfor %}
