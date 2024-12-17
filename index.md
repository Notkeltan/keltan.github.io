---
layout: home
---

## Categories

{% for category in site.categories %}
- [{{ category[0] | capitalize }}](/categories/{{ category[0] | slugify }}) ({{ category[1].size }} posts)
{% endfor %}

---

# All Posts

{% for post in site.posts %}
- {{ post.date | date: "%Y-%m-%d" }} [{{ post.title }}]({{ post.url }})
{% endfor %}
