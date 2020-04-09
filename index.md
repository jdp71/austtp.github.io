---
layout: page
pagination: 
  enabled: true
---

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h2 class="headline"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div> 

{% for post in paginator.posts %}
  <h1>{{ post.title }}</h1>
{% endfor %}
And to display pagination links, simply

{% if paginator.total_pages > 1 %}
<ul>
  {% if paginator.previous_page %}
  <li>
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl }}">Newer</a>
  </li>
  {% endif %}
  {% if paginator.next_page %}
  <li>
    <a href="{{ paginator.next_page_path | prepend: site.baseurl }}">Older</a>
  </li>
  {% endif %}
</ul>
{% endif %}

  <p class="rss-subscribe">subscribe <a href="http://austtp.github.io/feed.xml">via RSS</a></p>
