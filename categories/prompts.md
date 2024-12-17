---
layout: category
title: prompts - keltan's blog
category: prompts
---

# prompts
*keltan's collection of prompts and prompt engineering*

{% for post in site.categories.prompts %}
- {{ post.date | date: "%Y-%m-%d" }} [{{ post.title }}]({{ post.url }})
{% endfor %}
