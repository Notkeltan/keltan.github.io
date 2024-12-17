---
layout: home
title: keltan's blog
---

# Categories

{% for category in site.categories %}
- [{{ category[0] | capitalize }}](/categories/{{ category[0] | slugify }}) ({{ category[1].size }} posts)
{% endfor %}

---

# Recent Posts

{% for post in site.posts limit:5 %}
- {{ post.date | date: "%Y-%m-%d" }} [{{ post.title }}]({{ post.url }})
{% endfor %}
