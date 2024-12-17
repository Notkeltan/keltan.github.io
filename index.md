---
layout: home
---

## Categories

{% for category in site.categories %}
- [{{ category[0] | capitalize }}](/categories/{{ category[0] | slugify }}) ({{ category[1].size }} posts)
{% endfor %}

---
