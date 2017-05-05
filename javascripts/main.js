var blogPostContent = $('#blog-posts');
var links = $('#list-group');

$.ajax({
    url: "blog-posts.JSON"
}).done(loadBlogPosts);

function loadBlogPosts(posts) {
    var blogPosts = posts.blogs;
    for (var i = 0; i < blogPosts.length; i++) {
        var posts =
            `<article class ="container-fluid">
      <header class="panel-header">
        <h3 class="">${blogPosts[i].date}</h3>
        <h2 id ="post${i}">${blogPosts[i].title} </h2>
      </header>
      <section class="">
        ${blogPosts[i].copy}
      </section>
      <footer class="">
        <p class="">Written By - ${blogPosts[i].author}
      </footer>
    </article>`;

        var linkContent =
            `<a href="#post${i}" class="list-group-item">
    <h4 class ="list-group-item-heading">${blogPosts[i].title}</h4>
    <p class ="list-group-item-text">${blogPosts[i].author}</p>
   </a>
  `

        blogPostContent.prepend(posts);
        links.append(linkContent);
    }
};

