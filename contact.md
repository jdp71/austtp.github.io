<h2 class="headline">Contact</h2>

<form class="wj-contact" action="https://formspree.io/{{site.email}}" method="POST">
    <input type="text" name="name" placeholder="Name">
    <input type="text" name="email" placeholder="Email Address">
    <textarea type="text" name="content" rows="10" placeholder="Message"></textarea>
    <input type="hidden" name="_next" value="https://austtp.github.io">
    <input type="hidden" name="_subject" value="Contact Form">
    <input type="text" name="_gotcha" style="display:none">
    <input type="submit" value="Submit">
</form>
