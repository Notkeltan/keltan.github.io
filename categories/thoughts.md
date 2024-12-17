---
layout: category
title: thoughts - keltan's blog
category: thoughts
---

# thoughts
*all posts in the thoughts category*

{% for post in site.categories.thoughts %}
- {{ post.date | date: "%Y-%m-%d" }} [{{ post.title }}]({{ post.url }})
{% endfor %}
