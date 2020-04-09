<h2 class="headline">About Me</h2>

<p class="box">My name is <span class="green">Austin Poole</span>. I'm a systems architect in the state of North Carolina. I am the administrator of the document imaging system. In addition, I develop software and web solutions. I'm enrolled in DSC 680 at Bellevue University.</p>

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>
