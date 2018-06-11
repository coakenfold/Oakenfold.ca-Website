---
permalink: index.html
layout: default
---
{% include work/work.html %}

{% if page.showSettings %}
    {% include settings.html %}
{% endif %}

{% include footer/footer.html %}